import React, { FunctionComponent } from 'react'
import "../../App.css"
import PostItem from "components/Main/PostItem"

const POST_ITEM_DATA = {
    title: 'Post Item Title',
    date: '2020.01.29.',
    categories: ['Web', 'Frontend', 'Testing'],
    summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
    thumbnail:
        'https://imagedelivery.net/jfIRjXneURbVKR0daxEchg/c52583fe-68e2-4838-85ee-3c708e85af00/public',
    link: '<https://www.google.co.kr/>',
}

const PostList: FunctionComponent = function () {
    return <>
        <div className="post-wrapper">
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
        </div>
    </>
}

export default PostList