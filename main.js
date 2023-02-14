import animate from "./banner3d.js";
import aboutmeTween from "./aboutmetween.js";
import { projectsTween } from "./projects_tween.js";
import { gsap } from "gsap";

const banner3dTitle = document.querySelector("#banner3d_title")
const banner3dcanvas = document.querySelector("#bg")


const banner3dTween = () => gsap.timeline({
    defaults: {ease: "power2"},
    

}).from(
    banner3dTitle,
    {alpha: 0,
    delay:0.25,
duration: 0.5},
0  
).from(
    banner3dcanvas,{
        scale: 0,
        duration: 0.5
    }
)


animate()
banner3dTween()
aboutmeTween()
projectsTween()



function scrollAbout(){
    e.preventDefault()
    console.log("hola")
  
    window.scrollTo(0, Position(document.querySelector(".about_me_trigger")));
    

}
const about_link = document.querySelector(".about_link")
about_link.addEventListener("click",scrollAbout);







