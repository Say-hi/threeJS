window.onload = function () {
  // 实例屏幕
  var scene = new THREE.Scene();
  // 实例相机
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  // 实例渲染
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xeeeeee);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 实例辅助坐标系
  var axes = new THREE.AxisHelper( 20 );
  // 向场景添加展示实例
  scene.add(axes);
  // 创建平面物体
  // 创建模型
  var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  // 设置模型材质
  var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xcccccc
  });
  // 创建模型承载台
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // 设置旋转角度
  plane.rotation.x = -0.5 *Math.PI;
  // 设置物体位置
  plane.position.x = 15;
  plane.position.Y = 0;
  plane.position.z = 0;
  // 添加平面物体
  scene.add(plane);

  var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    // 设置模型框架线
    wireframe: true
  });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  scene.add(cube);

  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  var sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true
  });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  scene.add(sphere);

  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  // 设置相机观察位置
  camera.lookAt(scene.position);
  // 向容器内添加创建好的dom
  $('#container').append(renderer.domElement);
  // 渲染
  renderer.render(scene, camera);
}