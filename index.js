var tl = gsap.timeline({scrollTrigger:{
     trigger: "#main",
     start: "30% 30%",
     end:"95% 100%",
     scrub: true,
     // markers:true   
}})

tl.to("#img-2",{
rotateX:"0deg"
})
tl.to("#img-3",{
rotateX:"0deg"
})
tl.to(".resume",{
marginTop:"100vh",
scale:"0.8",
paddingTop:"14vh"
}, 'sa')
tl.to("img",{
     filter:"grayscale(2)"
}, 'sa')
tl.to(".text",{
marginTop:"-60vh"
}, 'sa')
tl.to(".overlay",{
opacity:"1"
}, 'sa')


