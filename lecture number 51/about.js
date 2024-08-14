

gsap.from("#page1 #box",{
    scale: 10,
    opacity:0,
    duration:1,
    delay:1,
})
gsap.from("#page2 #box",{
    scale: 1,
    opacity:0,
    rotate:360,
    duration:1,
    delay:8,
    scrollTrigger:{
       trigger: "#page2 #box",
       scroller: "body" ,
       markers:true,
       start: "top 60%",
       scrube:3,
       pin:true,
    }
})
gsap.from("#page3 #box",{
    scale:0.5 , 
    opacity:0 ,
    duration:1,
    scrollTrigger:{
          trigger: "#page3 #box",
          scroller:"body",
          markers: true,
          start: "top 60%",
          pin:true,
    }
})











