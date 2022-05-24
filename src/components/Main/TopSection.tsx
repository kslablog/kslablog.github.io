import React, { FunctionComponent } from 'react'
import { Link } from "gatsby"
import Logo from "../../images/whitelogo.png"
import '../../Style.scss'

const TopSection: FunctionComponent = function () {
    return <>
        <header className="site-head" >
            <div className="head-container">
                <div className="head-mast">
                    <Link to = "/">
                        <img className="head-logo" src={Logo} alt="로고" />
                    </Link>
                    <div className="mast-left">
                    </div>
                </div>
                <div className="head-main">
                    <h2 className="head-main-text">
                        안녕하세요. 한국시니어 연구소 기술 블로그입니다.
                    </h2>
                    <h2 className="head-main-text-mobile">
                        안녕하세요. 한국시니어 연구소<br/>기술 블로그입니다.
                    </h2>
                    <h5 className="sub-text">
                        함께 일하고, 함께 성장하기 위해 끊임없이 고민합니다.
                    </h5>
                    <a className="recruit" href="https://recruit.kslab.co.kr/" target="_blank">RECRUIT</a>
                </div>
            </div>
        </header>
    </>
}

export default TopSection