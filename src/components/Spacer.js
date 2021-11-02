import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

const Spacer = ({ h }) => {

    return (
        <>
            {isMobile || window.innerWidth < 922 ? null : window.innerWidth > 1396 ? <div style={{ height: '40vh' }} /> : <div style={{ height: h }} />}

        </>
    )
}

export default Spacer