import React from "react";
import '../styles/homepage.scss'

const Blob1 = (props) => (
  <svg id="visual" viewBox="0 0 900 600" width={900} height={600} {...props}>
    {/* <rect x={0} y={0} width={900} height={600} fill="#ffffff" /> */}
    <g transform="translate(453.1658941357134 264.08562961115956)">
      <path
        d="M151.5 -190.1C198.7 -174.2 241.1 -133.1 261.3 -82.2C281.5 -31.3 279.6 29.5 258.8 81.2C238 133 198.4 175.7 152.1 217.8C105.8 260 52.9 301.5 -10.3 315.6C-73.5 329.8 -146.9 316.6 -178.2 269.6C-209.4 222.5 -198.4 141.7 -215.2 73.7C-232.1 5.8 -276.8 -49.3 -281.4 -108.8C-286 -168.3 -250.6 -232.2 -197 -246.1C-143.4 -259.9 -71.7 -223.7 -9.8 -210.2C52.1 -196.7 104.2 -206 151.5 -190.1"
        fill="url(#blob-gradient)"
      />
    </g>
    <defs>
      <linearGradient id="blob-gradient">
        <stop className='start-colour' offset="5%" />
        <stop className='end-colour' offset="95%" />
      </linearGradient>
    </defs>
  </svg>
);

export default Blob1;
