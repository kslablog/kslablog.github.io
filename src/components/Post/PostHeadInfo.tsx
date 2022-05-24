import React, { FunctionComponent } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../../Style.scss'


export type PostHeadInfoProps = {
    // title: string
    date: string
    categories: string[]
    headimage: {
        publicURL: string
    }
}



const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
    // title,
    date,
    categories,
    headimage
}) {
    // const goBackPage = () => window.history.back()
const CategoryList = categories.map((name)=>
    <div className="post-head-category" key={name}><div className="post-category-text">{name}</div></div>
)
    return (
        <div className="post-head-info-wrapper">
            {/*<div className="prev-page-icon" onClick={goBackPage}>*/}
            {/*    <FontAwesomeIcon icon={faArrowLeft} />*/}
            {/*    <div className="icon-text">이전 페이지</div>*/}
            {/*</div>*/}
            <img src={headimage.publicURL} alt="head-img" />
            <div className="head-list-wrapper" >
                <div className="post-head-category-wrapper">
                    {CategoryList}
                </div>
                <div className="post-head-date">{date.substring(0,date.length-1)}</div>
            </div>
        </div>
    )
}

export default PostHeadInfo