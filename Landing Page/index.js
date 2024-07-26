
// let section1= document.getElementById("section-1")

// window.addEventListener("scroll",()=>{
//     let value = window.screenY;
//     section1.style.left=value*0.55+"px";
// })

gsap.registerPlugin(ScrollTrigger,TextPlugin)

gsap.to(
    ".section-1-bg img",{
        scrollTrigger:{scrub:true},
        duration:2,
        scale:2.2,
        y:500,
        
    }
)


gsap.from(
    "#section-1-text-h1",{
      y:150,
      opacity:-1,
      duration:1.5,
        
    }
)


gsap.to(
    ".section-1-text button",{
       rotateX:20,
        duration:2,
        repeat:-1

        
    }
)


gsap.from(
    "#section-2-left-img",{
        scrollTrigger:"#section-2-left-img",
        x:60,
        opacity:0,
        duration:1,
        delay:.5,
        
    }
)


gsap.from(
    ".card",{
        scrollTrigger:".card",
        opacity:0,
        duration:1,
        delay:.5,
        
    }
)


gsap.from(
    ".section-4 button",{
        scrollTrigger:".section-4 button",
        y:60,
        opacity:0,
        duration:1,
        delay:.5,
        
    }
)

gsap.from(
    ".section-5-container-left img ",{
        scrollTrigger:".section-5-container-left img",
        
        opacity:0,
        duration:2,
        rotate:20,  
    }
)

gsap.from(
    ".section-5-container-right button ",{
        scrollTrigger:".section-5-container-right button",
        x:1000,
        opacity:0,
        duration:2,
        rotate:50,  
    }
)

gsap.from(
    ".section-6-container-left",{
        scrollTrigger:".section-6-container-left",
        x:-200,
        opacity:-1,
        duration:1,
          
    }
)

gsap.from(
    ".section-6-container-right",{
        scrollTrigger:".section-6-container-right",
        x:5,
        opacity:0,
        duration:1,
        rotate:15,  
    }
)

gsap.from(
    ".section-8 button",{
        scrollTrigger:".section-8 button",
        y:50,
        opacity:0,
        duration:1,  
    }
)




// gsap.to(
//     ".section-8-bg img",{
//         scrollTrigger:{scrub:true},
//         duration:2,
//         scalex:1.1,
//         repeat:-1, 
//     }
// )
