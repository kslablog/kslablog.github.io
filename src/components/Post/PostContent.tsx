import React, { FunctionComponent } from 'react'
import PostHeadInfo from "components/Post/PostHeadInfo";
// import styled from '@emotion/styled'

interface PostContentProps {
    html: string
    date: string
    categories: string[]
    headimage: {
        publicURL: string
    }
}

// const MarkdownRenderer = styled.div`
//   // Renderer Style
//   display: flex;
//   flex-direction: column;
//   width: 768px;
//   margin: 0 auto;
//   padding: 100px 0;
// `

const PostContent: FunctionComponent<PostContentProps> = function ({
    html,
    date,
    categories,
    headimage,
}) {
    return(
        <>
            <PostHeadInfo date={date} categories={categories} headimage={headimage}/>
            <div className="post-content-md" dangerouslySetInnerHTML={{__html: html}}/>
        </>
    )
}

export default PostContent