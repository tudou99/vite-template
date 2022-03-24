<template>
  <div id="three" ref="refsThree"></div>
</template>
<script setup lang="ts">
import * as THREE from "three";
const refsThree = ref<HTMLDivElement>();
let renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  light: THREE.DirectionalLight,
  // cube: THREE.DirectionalLight,
  width = 0,
  height = 0;
onMounted(() => {
  width = refsThree.value?.clientWidth || 0;
  height = refsThree.value?.clientHeight || 0;
  initThree();
  initCamera();
  initScene();
  initLight();
  initObject();
  render();
});
function initThree() {
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 是否开启反锯齿，设置为true开启反锯齿，可以提升画质
  });
  renderer.setSize(width, height); // 设置画布大小
  refsThree.value?.appendChild(renderer.domElement); // 将画布添加到页面上
  renderer.setClearColor(0x000000, 1.0); // 设置画布颜色
}
function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  // 表示对象局部位置的Vector3。默认值为(0, 0, 0)。
  camera.position.x = 0;
  camera.position.y = 1000;
  camera.position.z = 10;
  // up 这个属性由lookAt方法所使用，例如，来决定结果的朝向。
  camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 1;
  // 旋转物体使其在世界空间中面朝一个点。
  // 这一方法不支持其父级被旋转过或者被位移过的物体。
  camera.lookAt(0, 0, 0);
}

function initScene() {
  scene = new THREE.Scene();
}
function initLight() {
  // 定义平行光
  light = new THREE.DirectionalLight(0xff0000, 1.0);
  // 设置平行光位置
  light.position.set(100, 100, 200);
  //   将平行光添加到场景
  scene.add(light);
}

function initObject() {
  // 创建几何体
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // 8. 定义网格， 几何体和材质组成网格
  const cube = new THREE.Mesh(geometry, material);
  // 9. 将网格模型添加到场景中
  scene.add(cube);
  // 10. 改变相机位置
  // 此时我们的相机在坐标原点,物体也在坐标原点,所以我们什么也看不到
  camera.position.z = 10; // 向屏幕外移动 5 米
}
function render() {
  renderer.clear(); // 通过setClearColor值，来对场景进行刷新
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
