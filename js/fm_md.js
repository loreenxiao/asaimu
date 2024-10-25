//搜索处理
const searchHandle = (networkArray) => {
    const handle = () => {
        const keyword = $("#searchText").val()
        if (!keyword) {
            listStoreHandle(networkArray)
        } else {
            const regExp = new RegExp(keyword, 'i');
            listStoreHandle(
                networkArray.filter((c) => c.address?.search(regExp) > -1 || c.province?.search(regExp) > -1 || c.city?.search(regExp) > -1)
            )
        }
        //重置缩放
        setMapZoom(10);
    }
    //事件绑定
    $("#searchText").keypress(function (event) {
        if (event.which === 13) {
            handle()
        }
    });
    $(".search-btn").click(handle)
}

//列表处理
const listStoreHandle = (networkArray) => {
    const base = $('.search-kinds').html('')
    networkArray.forEach(item => {
        $(`<div class="search-box search-box1">
                <div class="search-box-tit">${item.title}</div>
                     <div class="select-wrap clearfix">
                         <div class="net-work-content">
                              <img src="https://s0.seewo.com/wp-content/themes/maxhub/assets/images/fm_md/address-bc726af876.svg" alt="">
                              ${item.address}
                        </div>
                        <div class="net-work-content">
                              <img src="https://s0.seewo.com/wp-content/themes/maxhub/assets/images/fm_md/teleph-16551823b3.svg" alt="">
                               ${item.tel}
                      </div>
               </div>
          </div>`).appendTo(base).click(function () {
            //处理点击
            openMapMarker(item)
        })
    })
}


//地图处理
const mapStoreHandle = (networkArray, initCallBack) => {
    window._AMapSecurityConfig = {
        securityJsCode: 'd90c00e613b39b96903636d649a297c0',
    };
    window.contactMap = new AMap.Map('dituContent');
    networkArray.forEach((network) => {
        if (network.coordinate) {
            addServiceStoreMarker(network);
        }
    });
    AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function () {
        window.contactMap.addControl(new AMap.ToolBar({position: 'RB', liteStyle: true}));
        //进行定位
        new AMap.Geolocation().getCityInfo(function (status, result) {
            if (status === 'complete' && result.info === 'SUCCESS') {
                initCallBack?.(result);
            }
        });
    });
};

const addServiceStoreMarker = (network, move = false) => {
    network.infoWindow = new AMap.InfoWindow({
        isCustom: true,
        content: `<div class="location-descr">
				<img src="https://s0.seewo.com/wp-content/themes/maxhub/assets/images/fm_md/close1-86bc251418.svg" alt="" onclick="window.currentNetwork.infoWindow.close()">
				<h2>${network.province} - ${network.city}</h2>
				<h2 class="title">${network.title || network.address}</h2>
				<p>地址：${network.address}</p>
				<p>电话：${network.tel || ''}</p>
			</div>`,
        offset: new AMap.Pixel(0, -45),
    });
    const coordinateArr = network.coordinate.split(',').map(parseFloat);
    network.position = {Q: coordinateArr[1], R: coordinateArr[0], lat: coordinateArr[1], lng: coordinateArr[0]};
    const marker = new AMap.Marker({
        position: [network.position.lng, network.position.lat],
    });
    marker.on('click', () => openMapMarker(network, move));
    window.contactMap.add(marker);
};

const openMapMarker = (network, move = true) => {
    if (!network.position) {
        return;
    }
    //移动坐标
    if (move) {
        moveMapMarkerPosition(network);
    }
    //打开窗口
    network.infoWindow.open(window.contactMap, network.position);
    //设置当前窗口
    window.currentNetwork = network;
};

const moveMapMarkerPosition = (network, zoom = 17) => {
    window.contactMap.setZoomAndCenter(zoom, [network.position.lng, network.position.lat]);
};

const setMapZoom = (zoom) => {
    window.contactMap.setZoom(zoom);
    if (window.currentNetwork) {
        window.currentNetwork.infoWindow.close();
        window.currentNetwork = undefined;
    }
};
