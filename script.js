<<<<<<< HEAD
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

// Animation 1
tl.to("#page1 .row1 h1", {
    scale: 0.4,
    ease: "power1.in",
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "+2000",
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
        end: "+2000",
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
        end: "+2000",
        scrub: 2,
    },
    onComplete: startNewAnimation,
});

tl.to("#page1 .row", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1 .row",
        start: "top 0",
        end: "+2000",
        scrub: 2,
    },
});

function startNewAnimation() {
    // New Animation
    tl.to("#page1 .layer", {
        x: "-98vw",
        ease: "power1.in",
        scrollTrigger: {
            trigger: "#page1",
            start: "top top",
            end: "+500",
            scrub: 2,
        },
        onComplete: anim2, // Fixed the onComplete parameter
    });
}

function anim2() {
    // New Animation with delay
    tl.to(".layer2", {
        width: "100vw",
        ease: "power1.in",
        delay: 1, // Adjust the delay in seconds
        scrollTrigger: {
            trigger: "#page1",
            start: "top top",
            end: "+500",
            scrub: 2,
        },
    });
}


// tl.to(".layer2 ",{
//     ease: "power1.in",
//     scrollTrigger: {
//         trigger: "#page1",
//         start: "top top",
//         end: "+1000",
//         pin: true,
//         scrub: 2,
//     },
// })


=======
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
>>>>>>> d3f7cb3db9617aa0b4b0cb2b9698a9877365f71a
