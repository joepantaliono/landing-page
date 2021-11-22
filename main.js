import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add(light);

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 1000 );
camera.position.set(0, 10, 40);
function animate() {
    requestAnimationFrame(animate);
    object.rotation.y += 0.01;
    renderer.render(scene, camera);
}

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//import 3D model
const loader = new GLTFLoader();
var object;
loader.load("assets/skull.gltf", function (gltf) {
    object = gltf.scene;
    scene.add(gltf.scene);
});
animate();


