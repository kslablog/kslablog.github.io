import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

type PostItemProps = {
    title: string
    date: string
    categories: string[]
    summary: string
    thumbnail: string
    link: string
}

const PostItem: FunctionComponent<PostItemProps> = function ({
        title,
        date,
        categories,
        summary,
        thumbnail,
        link,
    })
{
    return (
            <Link className="post-list" to={link}>
                <img className="post-thumbnail" src={thumbnail} alt="post thumbnail img" />
                <div className="post-items">
                    <div className="post-title">{title}</div>
                    <div className="post-date">{date}</div>
                    <div className="post-category">
                        {categories.map(category => (
                            <div className="category-items" key={category}>{category}</div>
                        ))}
                    </div>
                    <div className="summary">{summary}</div>
                </div>
            </Link>
    )
}

export default PostItem