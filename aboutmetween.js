import  {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize" // notice "resize" isn't in the list
  });

const aboutMeText = document.querySelector("#about_me_text_wrapper")
const aboutMeWrap = document.querySelector("#about_me_image_wrapper")
const aboutMeImage = document.querySelector("#about_me_image")

const aboutmeTween = gsap.timeline({
    scrollTrigger: {
        trigger: ".about_me_trigger",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
       
        }
    
})
aboutmeTween.from(
    aboutMeText,
    {x: "-100%",
},

).from(
    aboutMeWrap,{
        alpha: 0,
        y: "100%",
    },
).from(
    aboutMeImage,{ 
        translateY: "100%",
    },
    
)


export default aboutmeTween;