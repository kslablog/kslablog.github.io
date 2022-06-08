import React, { FunctionComponent } from 'react'
import '../Style.scss'

const Footer: FunctionComponent = function() {
    return <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="left-text">KoreaSeniorLab Tech Blog</div>
                    한국시니어연구소 ⓒ 2020-2022 All rights reserved.
                </div>
                <div className="footer-right">
                </div>
            </div>
        </footer>
    </>
}

export default Footer