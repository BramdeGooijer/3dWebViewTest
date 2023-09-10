import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load( './public/shiba/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

// const geometry = new THREE.BoxGeometry( 1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const cube = new THREE.Mesh(geometry, material);

// const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
// const wireframe = new THREE.Mesh(geometry, wireframeMaterial);

// scene.add(cube);
// scene.add(wireframe);

camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // wireframe.rotation.x += 0.01;
    // wireframe.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();