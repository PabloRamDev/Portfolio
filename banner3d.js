import './style.css'

import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, 720/480 , 0.1, 1000)
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#bg"),
    alpha: true
  })
  
renderer.setClearColor( 0x000000, 0 );
const canvas = document.querySelector(".banner3d")
// const spaceTexture = new THREE.TextureLoader().load('fondo.jpg');
// scene.background = spaceTexture;
const geometry = new THREE.BoxGeometry(3,3,3)
let materialArray = [];

materialArray.push(new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( '/django.jpg' ) }));
materialArray.push(new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( '/js.png' ) }));
materialArray.push(new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( '/html5.jpg' ) }));
materialArray.push(new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( '/css3.jpg' ) }));
materialArray.push(new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( '/python.jpg' ) }));
materialArray.push(new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( '/react.jpg' ) }));

const cubo = new THREE.Mesh(geometry, materialArray)



scene.add(camera)

function actualizarWidth() {

    
    camera.aspect = 380 / canvas.offsetHeight
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(380, canvas.offsetHeight);
    if(window.innerWidth < 768){
      cubo.position.set(0,0,-15)   
      if(window.innerWidth <= 600){
        cubo.position.set(0,0,-15)
      }
      }
      
      else{
        cubo.position.set(0,0,-6)
       
        
      }
}

actualizarWidth()

window.addEventListener('resize',actualizarWidth);









const pointLight = new THREE.PointLight(0xffffff,1.3)
pointLight.position.set(0 ,8, -0.1);
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight, pointLight)

const plHelper = new THREE.PointLightHelper(pointLight);






scene.add(cubo)

scene.add(plHelper)

// function addStar(){
//     const geometry = new THREE.SphereGeometry(2,24,24);
//     const material = new THREE.MeshPhongMaterial({color: 0x0000ff});
//     const star = new THREE.Mesh( geometry, material );
  
//     const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100))
//     star.position.set(x,y,z);
//     scene.add(star)
//   }
  
//   Array(50).fill().forEach(addStar);



function animate(){
  requestAnimationFrame( animate );

 
  cubo.rotation.y += 0.01;
 
 


  renderer.render( scene, camera);
}

export default animate
