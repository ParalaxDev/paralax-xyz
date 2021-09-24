import { useEffect, useState } from "react"
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import img from '../images/paralax_text.png'
// import vertexShader from '../shaders/vertex.glsl'
// import fragmentShader from '../shaders/fragment.glsl'


let camera, scene, renderer;
let geometry, material, mesh;
let controls;
let clock;

function vertexShader() {
    return `
    varying vec2 vUv;
    varying vec3 vPos;
    
    void main() {
      vUv = uv;
      vPos = position;
    
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
    `
}

function fragmentShader() {
    return `
    varying vec2 vUv;
    varying vec3 vPos;
    
    uniform sampler2D uTexture;
    uniform float uTime;
    
    void main() {
      float time = uTime * 0.25;
      vec2 repeat = -vec2(15., 3.);
      vec2 uv = fract(vUv * repeat - vec2(time, 0.));
    
      vec3 texture = texture2D(uTexture, uv).rgb;
    
      float shadow = clamp(vPos.z / 5., 0., 1.);
    
      gl_FragColor = vec4(texture * shadow, 1.);
    }
    `
}

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
            console.log('window resized')
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    // return size;
}

const TorusKnot = (props) => {



    const init = () => {
        const canvReference = document.getElementById('threejs_canvas')

        // Renderer
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            canvas: canvReference
        })
        // renderer.setClearColor('black', 1)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement)

        // Camera

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 25

        // Scene

        scene = new THREE.Scene()

        // Geometry

        geometry = new THREE.TorusGeometry(3, 1, 100, 100)
        // geometry = new THREE.BoxGeometry(1, 1, 1)
        geometry = new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3);

        // Texture

        const texture = new THREE.TextureLoader().load(img, (texture) => {
            texture.minFilter = THREE.NearestFilter;
        });

        // Material

        material = new THREE.ShaderMaterial({
            vertexShader: vertexShader(),
            fragmentShader: fragmentShader(),
            uniforms: {
                uTime: { value: 0 },
                uTexture: { value: texture },
            },
            transparent: true,
            // side: THREE.DoubleSide
        });


        // material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Mesh

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Controls

        // controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;

        // Clock

        clock = new THREE.Clock();




    }

    const render = () => {
        // controls.update()

        material.uniforms.uTime.value = clock.getElapsedTime()

        renderer.render(scene, camera)
    }

    const animate = () => {
        requestAnimationFrame(animate)
        render()
    }

    useEffect(() => {

        init()
        animate()
    }, [])

    const windowSize = useWindowSize()

    return (
        <canvas id='threejs_canvas' {...props} />
        // < div />
    )
}

export default TorusKnot