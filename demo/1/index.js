/**
 * Created by Administrator on 2017/5/23.
 */
window.onload = function () {
  var scene, camera, renderer;
  var geometry, material, mesh;

  init();
  animate();
  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    geometry = new THREE.TorusKnotGeometry();
    material = new THREE.MeshNormalMaterial({morphTargets: true, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  }
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y -= 0.01;
    mesh.rotation.z += 0;
    renderer.render(scene, camera);
  }
}