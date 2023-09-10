import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

let scene, camera, renderer, hlight, model, controls;

function init() {
    // RENDERER AND LOADER
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // SCENE
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    // CAMERA
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.x = 6;
    camera.position.y = 3;
    camera.position.z = 6;
    camera.lookAt(0, 0, 0);

    controls = new OrbitControls(camera, renderer.domElement);

    // LIGHT
    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    let directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    let light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(0, 300, 500);
    scene.add(light);
    let light2 = new THREE.PointLight(0xc4c4c4, 10);
    light2.position.set(500, 100, 0);
    scene.add(light);
    let light3 = new THREE.PointLight(0xc4c4c4, 10);
    light3.position.set(0, 100, -500);
    scene.add(light);
    let light4 = new THREE.PointLight(0xc4c4c4, 10);
    light4.position.set(-500, 300, 0);
    scene.add(light);


    let loader = new GLTFLoader();
    loader.load('./public/theatre/scene.gltf', function(gltf) {
        model = gltf.scene.children[0];
        // model.scale.set(0.5, 0.5, 0.5);

        scene.add(gltf.scene);
        animate();
    });
}
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();