import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

const Spacer = ({ h, dH }) => {

    return (
        <>
            {isMobile || window.innerWidth < 922 ? null : <div style={{ height: h }} />}

        </>
    )
}

export default Spacer