import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'
import { GatsbyImage } from 'gatsby-plugin-image'


type PostItemProps = PostFrontmatterType & { link: string }

const PostItem: FunctionComponent<PostItemProps> = function ({
        title,
        date,
        categories,
        summary,
        thumbnail,
        link,
    })
{
    // const scrollTop = () => {
    //   window.scrollTo(0,0);
    // }
    return (
            <Link className="post-list" to={link} >
                <GatsbyImage className="post-thumbnail" image={thumbnail.childImageSharp.gatsbyImageData} alt="post thumbnail img" />
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