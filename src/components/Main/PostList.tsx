import React, { FunctionComponent, useMemo } from 'react'
import "../../App.css"
import PostItem from "components/Main/PostItem"
import { PostListItemType } from 'types/PostItem.types'
// export type PostType = {
//     node: {
//         id: string
//         frontmatter: {
//             title: string
//             summary: string
//             date: string
//             categories: string[]
//             thumbnail: {
//                 publicURL: string
//             }
//         }
//     }
// }

type PostListProps = {
    selectedCategory: string
    posts: PostListItemType[]
}


const PostList: FunctionComponent<PostListProps> = function ({
        selectedCategory,
        posts,
    }) {
    const postListData = useMemo(
        () =>
            posts.filter(({ node: { frontmatter: { categories } } }: PostListItemType) =>
                selectedCategory !== 'All'
                    ? categories.includes(selectedCategory)
                    : true,
            ),
        [selectedCategory],
    )
    return <>
        <div className="post-wrapper">
            {postListData.map(({ node: { id, fields:{ slug }, frontmatter }}: PostListItemType) => (
                <PostItem {...frontmatter} link={ slug } key={id} />
            ))}
        </div>
    </>
}

export default PostList