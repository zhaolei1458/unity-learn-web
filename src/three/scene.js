import * as THREE from 'three'

export function createScene(container) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a2e)

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
  camera.position.set(4, 3, 6)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const dir = new THREE.DirectionalLight(0xffffff, 0.9)
  dir.position.set(3, 5, 4)
  scene.add(dir)

  const grid = new THREE.GridHelper(8, 8, 0x666666, 0x444444)
  scene.add(grid)

  function resize(w, h) {
    if (w === 0 || h === 0) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }

  return { scene, camera, renderer, resize }
}
