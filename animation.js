import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

//scene
const scene = new THREE.Scene();
const light = new THREE.HemisphereLight( "white", "darkslategrey", 1.5 );
scene.add(light);

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 1000 );
camera.position.set(0, 300, 300);

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//import 3D model
const loader = new GLTFLoader();
var head;
loader.load("assets/head.gltf", function (gltf) {
    head = gltf.scene;
    scene.add(gltf.scene);
});

function animate() {
  requestAnimationFrame(animate);
  head.rotation.y += 0.04;
  head.position.set(-200,455,0);
  renderer.render(scene, camera);
}

animate();