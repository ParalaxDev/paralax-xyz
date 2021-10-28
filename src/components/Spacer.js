import { isMobile } from "react-device-detect";

const Spacer = () => {
    return (
        <>
            {isMobile ? null : <br />}
        </>
    )
}

export default Spacer