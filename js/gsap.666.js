(function () {
	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.create({
		end: 99999,
		onToggle: self => self.isActive ? document.querySelector('header').classList.add('active') : document.querySelector('header').classList.remove('active')
	});


	gsap.matchMedia().add('(min-width: 1281px)', () => {
		let headTl = gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('header'), start: "bottom top", end: "+=50%", pinSpacing: false, scrub: .3,
				// markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
			},
		});
		headTl.fromTo(document.querySelector('header .header_back'), { 'width': '100%', 'border-radius': '20px' }, { 'width': '100vw', 'border-radius': '0' })
	})

	let EAniArra = Array.from(document.querySelectorAll('.e-ani'));
	const aniKeep = new IntersectionObserver(item => item.forEach(e => {
		if (e.intersectionRatio > 0 && e.boundingClientRect.y < window.innerHeight) {
			e.target.classList.add('is-view');
		}
	}))
	EAniArra.forEach(e => aniKeep.observe(e));
})();
