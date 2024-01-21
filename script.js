gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

// Animation 1
tl.to("#page1 .row1 h1", {
    scale: 0.4,
    ease: "power1.in",
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "+1200",
        scrub: 2,
        pin: true,
    },
});

// Animation 2
tl.to("#page1 .row3", {
    scale: 7,
    color: "rgb(196, 0, 196)", // Change the font color to purple
    ease: "power1.in",
    scrollTrigger: {
        trigger: "#page1 .row3",
        start: "top top",
        end: "+1200",
        scrub: 2,
    },
});


// Animation 3
tl.to("#page1 .layer", {
    opacity: 1,
    ease: "power1.in",
    scrollTrigger: {
        trigger: "#page1 .row3",
        start: "top top",
        end: "+1200",
        scrub: 2,
    },
    onComplete: startNewAnimation,
});

function startNewAnimation() {
    // New Animation
    gsap.to("#page1 .layer", {
        x: "-100%",
        ease: "power1.in",
        scrollTrigger: {
            trigger: "#page1 .layer",
            start: "top top",
            end: "+1200",
            scrub: 2,
        },
    });
}
