import React, { FunctionComponent } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../../App.css"

export type PostHeadInfoProps = {
    // title: string
    date: string
    categories: string[]
}



const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
    // title,
    date,
    categories,
}) {
    // const goBackPage = () => window.history.back()
const CategoryList = categories.map((name)=>
    <div className="post-head-category"><div className="post-category-text">{name}</div></div>
)
    return (
        <div className="post-head-info-wrapper">
            {/*<div className="prev-page-icon" onClick={goBackPage}>*/}
            {/*    <FontAwesomeIcon icon={faArrowLeft} />*/}
            {/*    <div className="icon-text">이전 페이지</div>*/}
            {/*</div>*/}
            <div className="head-list-wrapper">
                {CategoryList}
            </div>
            <div className="post-head-date">{date.substring(0,date.length-1)}</div>
        </div>
    )
}

export default PostHeadInfo