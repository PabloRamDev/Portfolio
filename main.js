import animate from "./banner3d.js";
import { traducciones } from "./traductions.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
// projects
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


const translate = (elem,obj,lang)=>{
   
    elem.forEach(el => {
        
        const trad = Object.keys(obj[lang])
        trad.forEach(tr => {
            if(el.id == tr){
                el.innerHTML = obj[lang][tr]
            }
        })
   
})
}

const elements = document.querySelectorAll(["p","h2","h3","a"])

const handleTranslate = (e)=>{
    var lang = document.documentElement.lang
    
    if( lang == 'en'){
        lang = 'es'
        document.documentElement.lang = 'es'
        e.target.innerText = '🇪🇸'
        translate(elements,traducciones, lang)
      
       
    }else{
        lang = 'en'
        document.documentElement.lang = 'en'
        e.target.innerText = '🇬🇧'
        translate(elements,traducciones, lang)
        
        
    }


    
}
let languageBtn = document.querySelector("#language");

const  languageStart = ()=>{
    var userLang = navigator.language || navigator.userLanguage; 
    console.log(userLang)
    if(userLang.includes('es')){
        
        translate(elements,traducciones,'es')
        document.documentElement.lang = 'es'    
        languageBtn.innerText = '🇪🇸'
    

    }
}

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const githubLogo = document.getElementById('github_logo')

window.addEventListener('DOMContentLoaded',() => {languageStart; isDarkMode? githubLogo.fill = "#bgbgbg" : null })
languageBtn.addEventListener('click', handleTranslate)







