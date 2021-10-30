import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const TextLogo = (props) => {

    // const container = {
    //     // hidden: { opacity: 1, scale: 0 },
    //     visible: {
    //         opacity: 1,
    //         scale: 1,

    //         transition: {
    //             delayChildren: 0.5,
    //             staggerChildren: 0.045,
    //             ease: "easeInOut",

    //             repeat: Infinity
    //         }
    //     }
    // }

    // const item = {
    //     hidden: { y: -210 },
    //     visible: {
    //         y: [0, 40, 0],
    //         transition: {
    //             duration: 1,
    //             repeat: Infinity, /* new */
    //         },
    //     },

    // }

    const [animationType, setAnimationType] = useState('visible')


    const container = {
        // hidden: { opacity: 1, scale: 0 },
        visible: {
            // opacity: 1,
            // scale: 1,
            transition: {
                delayChildren: 0.05,
                staggerChildren: 0.045
            }
        },
        general: {
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.045,
                ease: "easeInOut",

                repeat: Infinity
            }
        }
    }

    const item = {
        hidden: { y: -100 },
        visible: {
            y: 0,

        },
        general: {
            y: [0, 40, 0],
            transition: {
                duration: 1,
                repeat: Infinity, /* new */
            },
        }
    }

    // animate={{ y: [-40, 40, -40] }}
    // transition={{ ease: "anticipate", duration: 1 }}

    useEffect(() => {
        setTimeout(() => {
            setAnimationType('general')
        }, 575)
    }, [])


    return (

        <motion.div className="logo-motion-container"
            variants={container}
            initial="hidden"
            animate={animationType} >
            <svg
                viewBox="0 0 1247 204"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                }}
                {...props}
            >
                <motion.g variants={item} id='logo-p'

                >
                    <path
                        d="M441.68 244.972v56.659l66.387 38.293.082-56.612-66.469-38.34Z"
                        style={{
                            fill: "#c9c6ce",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        d="m508.149 283.312 21.741-12.36 158.272-31.865v57.693c-13.489 50.6-119.502 56.093-158.344 30.613l-21.669 12.531v-56.612Z"
                        style={{
                            fill: "#b3b0b8",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <circle
                        cx={655.776}
                        cy={576.597}
                        r={105}
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(.72045 0 -.36035 .62391 -136.717 -294.235)"
                    />
                    <path
                        style={{
                            fill: "#fff",
                        }}
                        d="M587.583 286.869h207.145v486.775H587.583z"
                        transform="matrix(.36972 0 -.1813 .3139 -76.958 -90.05)"
                    />
                </motion.g>
                <motion.g variants={item} id='logo-a-1'>
                    <path
                        d="M1257.63 715.937v56.612l151.97-87.88v-56.612l-151.97 87.88Z"
                        style={{
                            fill: "#b3b0b8",
                        }}
                        transform="rotate(-30 -261.618 2181.433)"
                    />
                    <path
                        d="M1105.65 628.057v56.612l151.98 87.88v-56.612l-151.98-87.88Z"
                        style={{
                            fill: "#c9c6ce",
                        }}
                        transform="rotate(-30 -261.618 2181.433)"
                    />
                    <path
                        d="M385.148 452.21v175.797H210.006L385.148 452.21Z"
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(1 0 -.50017 .866 250.044 -391.052)"
                    />
                </motion.g>
                <motion.g variants={item} id='logo-r'>
                    <path
                        d="M731.805 413.523v57.515l130.114 74.717.821-56.612-130.935-75.62Z"
                        style={{
                            fill: "#c9c6ce",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        d="m867.634 453.471 109.628-52.54v58.324c-4.374 41.428-55.848 47.271-109.11 51.763l-5.412 34.737v-56.612l4.894-35.672Z"
                        style={{
                            fill: "#b3b0b8",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <circle
                        cx={655.776}
                        cy={576.597}
                        r={105}
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(.72045 0 -.36035 .62391 196.9 -293.393)"
                    />
                    <path
                        style={{
                            fill: "#fff",
                        }}
                        d="M587.583 286.869h207.145v486.775H587.583z"
                        transform="matrix(.3652 0 -.1813 .3139 261.199 -89.207)"
                    />
                    <path
                        d="m493.158 540 88.223 88.223H404.935L493.158 540Z"
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(.85746 0 -.50017 .866 302.519 -390.396)"
                    />
                </motion.g>
                <motion.g variants={item} id='logo-a-2'>
                    <path
                        d="M385.148 452.21v175.797H210.006L385.148 452.21Z"
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(1 0 -.50017 .866 602.62 -390.209)"
                    />
                    <path
                        d="M1257.63 715.937v56.612l151.97-87.88v-56.612l-151.97 87.88Z"
                        style={{
                            fill: "#b3b0b8",
                        }}
                        transform="rotate(-30 -83.757 1523.94)"
                    />
                    <path
                        d="M1105.65 628.057v56.612l151.98 87.88v-56.612l-151.98-87.88Z"
                        style={{
                            fill: "#c9c6ce",
                        }}
                        transform="rotate(-30 -83.757 1523.94)"
                    />
                    <path
                        d="M385.148 452.21v175.797H210.006L385.148 452.21Z"
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(1 0 -.50017 .866 602.62 -390.209)"
                    />
                </motion.g>
                <motion.g variants={item} id='logo-l'>
                    <path
                        d="m1096.74 624.192 151.52-87.447v56.614l-151.52 87.445v-56.612Z"
                        style={{
                            fill: "#b3b0b8",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        d="M1034.38 588.286v56.472l62.36 36.046v-56.612l-62.36-35.906Z"
                        style={{
                            fill: "#c9c6ce",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        style={{
                            fill: "#fff",
                        }}
                        d="M770.986 452.426h176.23v174.932h-176.23z"
                        transform="matrix(.40864 0 -.50017 .866 683.628 -389.647)"
                    />
                </motion.g>
                <motion.g variants={item} id='logo-a-3'>
                    <path
                        d="M1257.63 715.937v56.612l151.97-87.88v-56.612l-151.97 87.88Z"
                        style={{
                            fill: "#b3b0b8",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        d="M1105.65 628.057v56.612l151.98 87.88v-56.612l-151.98-87.88Z"
                        style={{
                            fill: "#c9c6ce",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        d="M385.148 452.21v175.797H210.006L385.148 452.21Z"
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(1 0 -.50017 .866 870.818 -391.052)"
                    />
                </motion.g>
                <motion.g variants={item} id='logo-x'>
                    <path
                        d="M1420.32 866.263v-56.302l29.59-72.127 123.11-15.979v56.612l-122.8 15.93-29.9 71.866Z"
                        style={{
                            fill: "#b3b0b8",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        d="M1267.61 721.855v56.612l152.71 87.796v-56.302l-152.71-88.106Z"
                        style={{
                            fill: "#c9c6ce",
                        }}
                        transform="rotate(-30 48.77 1023.053)"
                    />
                    <path
                        d="M1349.19 629.304h176.18L1470.38 540l54.99-87.142-176.45.433 54.77 86.277-54.5 89.736Z"
                        style={{
                            fill: "#fff",
                        }}
                        transform="matrix(1 0 -.50017 .866 -80.702 -392.175)"
                    />
                </motion.g>
            </svg>
        </motion.div >
    )
};

export default TextLogo;