// followed the documentation here:
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,  // fielf of view
  window.innerWidth / window.innerHeight,  // aspect ratio
  0.1,  // objects nearer disappear
  1000  // objects further away disappear
);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
console.log("renderer:", renderer)


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

console.log("scene with cube added:", scene);
console.log("camera:", camera);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
