/**
 * Created by vcc on 2017/05/23.
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
    geometry = new THREE.BoxGeometry(300, 300, 300);
    material = new THREE.MeshBasicMaterial({color: 0x0094ff, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  }
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
}


// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// var scene, camera, renderer;
// var geometry, material, mesh;
//
// init();
// animate();
//
// function init() {
//
//   scene = new THREE.Scene();
//
//   camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
//   camera.position.z = 1000;
//
//   geometry = new THREE.BoxGeometry( 200, 200, 200 );
//   material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
//
//   mesh = new THREE.Mesh( geometry, material );
//   scene.add( mesh );
//
//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize( window.innerWidth, window.innerHeight );
//
//   document.body.appendChild( renderer.domElement );
//
// }
//
// function animate() {
//
//   requestAnimationFrame( animate );
//
//   mesh.rotation.x += 0.01;
//   mesh.rotation.y += 0.02;
//
//   renderer.render( scene, camera );
//
// }


 // var scene = new THREE.Scene();
 // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 10000 );
 //
 // var renderer = new THREE.WebGLRenderer();
 // renderer.setSize( window.innerWidth, window.innerHeight );
 // document.body.appendChild( renderer.domElement );
 //
 // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
 // var material = new THREE.MeshBasicMaterial( { color: 0x0094ff } );
 // var cube = new THREE.Mesh( geometry, material );
 // scene.add( cube );
 //
 // camera.position.z = 5;
 //
 // var render = function () {
 //   requestAnimationFrame( render );
 //
 //   cube.rotation.x += 0.001;
 //   cube.rotation.y += 0.02;
 //
 //   renderer.render(scene, camera);
 // };
 //
 // render();