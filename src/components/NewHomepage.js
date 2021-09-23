import { useEffect } from "react"
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import img from '../images/text.png'
// import vertexShader from '../shaders/vertex.glsl'
// import fragmentShader from '../shaders/fragment.glsl'


let camera, scene, renderer;
let geometry, material, mesh;
let controls;
let clock;

function vertexShader() {
    return `
    varying vec2 vUv;
    uniform float uTime;
    
    void main() {
        vUv = uv;
        
        float time = uTime * 1.0;
        
        vec3 transformed = position;
        transformed.z += sin(position.y + time);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
    `
}

function fragmentShader() {
    return `
    varying vec2 vUv;
    uniform float uTime;
    uniform sampler2D uTexture;

    void main() {
        float time = uTime;

        vec2 uv = vUv;
        uv.x += sin(uv.y * 0.25);
        vec2 repeat = vec2(6.0, 12.0);
        uv = fract(uv * repeat + vec2(0.0, time));
        
        vec4 color = texture2D(uTexture, uv);
        
        gl_FragColor = color;
    }
    `
}

const NewHomepage = () => {


    const init = () => {
        // Renderer
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })
        renderer.setClearColor('black', 1)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement)

        // Camera

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 8

        // Scene

        scene = new THREE.Scene()

        // Geometry

        geometry = new THREE.TorusGeometry(3, 1, 100, 100)

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

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Clock

        clock = new THREE.Clock();




    }

    const render = () => {
        controls.update()

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

    return (
        <div />
    )
}

export default NewHomepage