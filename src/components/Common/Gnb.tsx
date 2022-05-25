import React, {FunctionComponent,  useState} from 'react'
import { Link } from "gatsby"
import Logo from "../../images/black_logo.png"
import '../../Gnb.scss'

const Gnb: FunctionComponent = function () {

    const [toggleDisplay, setToggleDisplay] = useState<boolean>(false)

    const openToggle = (e:React.MouseEvent<HTMLElement>) => {
        if (toggleDisplay) {
            setToggleDisplay(false)
        } else {
            setToggleDisplay(true)
        }
        e.currentTarget.classList.toggle('active-1');
    }

    // @ts-ignore
    return <>
        <div className="gnb">
            <div className="gnb-wrapper">
                <Link className="gnb-left" to="/">
                    <div className="gnb-logo">
                        <img src={Logo} alt="로고" />
                    </div>
                    <span className="gnb-left-txt">
                        - Tech Blog
                    </span>
                </Link>
                <div className="gnb-right">
                    <Link className="about" to = "/github/githubflow/">
                        About
                    </Link>
                    <a className="youtube" href="https://youtu.be/LMMrnutt3oc" target="_blank">
                        Who We Are
                    </a>
                    <a className="gnb-recruit" href="https://recruit.kslab.co.kr/" target="_blank">
                        Recruit
                    </a>
                </div>
                <a className="gnb-right-mobile" onClick={openToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div className="gnb-right-menu-mobile" style={{ maxHeight: toggleDisplay ? "200px" : "0"}} >
                <Link className="about-m" to = "/github/githubflow/">
                    About
                </Link>
                <a className="youtube-m" href="https://youtu.be/LMMrnutt3oc" target="_blank">
                    Who We Are
                </a>
                <a className="gnb-recruit-m" href="https://recruit.kslab.co.kr/" target="_blank">
                    Recruit
                </a>
            </div>
        </div>
    </>
}

export default Gnb