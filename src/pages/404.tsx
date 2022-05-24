import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import '../Style.scss'
import notfound from "../images/notfound.jpg"


const NotFoundPage: FunctionComponent = function () {
    return  (
        <>
            <div className="notfound-wrapper">
                <img className="notfound-image" src={ notfound } alt="404"/>
                <div className="notfound-text">
                    찾고 계신 페이지가 존재하지 않습니다. <br/>
                    한국시니어연구소의 다른 콘텐츠를 보러가시겠어요?
                </div>
                <Link className="notfound-btn" to="/">Main</Link>
            </div>
        </>
    )
}

export default NotFoundPage