import { isMobile } from "react-device-detect";

const Spacer = ({ h }) => {
    return (
        <>
            {isMobile || window.innerWidth < 922 ? null : <div style={{ height: h }} />}
        </>
    )
}

export default Spacer