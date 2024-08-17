import { BsMouse } from "react-icons/bs";
import logo from "../Assets/logo.png";


const Misc = () => {
    return (
        <>
            <div className="cursor"></div>
            <a href="" className="logo" >
                <img src={logo} alt="" data-cursorpointer="true" />
            </a>
            <a href="/franchise" className="franchisBtn" data-cursorpointer="true">
                GET A FRANCHISE
            </a>

            <BsMouse className="scrollBtn" data-cursorpointer="true" />
        </>
    )
}

export default Misc
