import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const projects_section = document.querySelector("#my_projects");
const projects = gsap.utils.toArray(".project")
const stops = []

projects.forEach((project, index) => {
    if (project.dataset.pin) stops.push(index);
    console.log(project.dataset)
})



const projectsTween = gsap.timeline({
    defaults: {ease: "none"},
    scrollTrigger: {
        trigger: ".my_projects_trigger",
        start: 'center center',
        end: '+=4000',
        scrub: true,
        pin: true,
        anticipatePin: 1
        
       
        
        
    }
})

// projectsTween
// .to(
//     projects_section,{
//         x: - trigger.offsetWidth / 1.5
//     }
// )
stops.forEach((stop, index) => {
    const actual = gsap.utils.selector(projects[stop])
    projectsTween.to(projects, {
        xPercent: (-100 * stop),
        duration: stop,
        
    }).from(
actual(".project_title"),{
    alpha: 0
}
    ).from(
       actual(".project_description"),{
        ease: "power1",
        alpha: 0,
        xPercent: 300 ,
       } ,
       "<"
    ).from(
        
        actual(".project_image_wrapper"),{
            alpha: 0,
         xPercent:300,
         
        } ,
        "<"
     ).to(
        actual(".project_image_wrapper"),{
            
         yPercent:-3,
         
        } ,
        "<"
     )
    
    if(index === stops.length -1){
        projectsTween.to(projects, {
            xPercent: -(100 * (projects.length -1)),
            duration: projects.length - stop,
            
        })
    }
})


export {
    projectsTween
}