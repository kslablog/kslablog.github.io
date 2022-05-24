import React, { FunctionComponent } from 'react'
import '../../Style.scss'

const TopSection: FunctionComponent = function () {
    return <>
        <header className="site-head" >
            <div className="head-container">

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
                </div>
            </div>
        </header>
    </>
}

export default TopSection