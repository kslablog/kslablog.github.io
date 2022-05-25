import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import PostContent from "components/Post/PostContent";
import CommentWidget from "components/Post/CommentWidget";
import Template from "components/Common/Template";
import Toc from "components/Post/Toc"
import PostHeadInfo from "components/Post/PostHeadInfo";
import "../MarkdownHtml.scss"
import "../Style.scss"


type PostTemplateProps = {
    data: {
        allMarkdownRemark: {
            edges: PostPageItemType[]
        }
    }
    location: {
        href: string
    }

}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
    data: {
        allMarkdownRemark: { edges },
    },
    location: {href}
}) {
    const {
        node: {
            html,
            frontmatter: {
                title,
                summary, // 나중에 사용할 예정입니다!
                date,
                categories,
                thumbnail: {
                    publicURL,
                },
                headimage
            },
            tableOfContents
        },
    } = edges[0]


    return <>
        <Template title={title} description={summary} url={href} image={publicURL} >
            <div className="post-content-wrapper">
                <PostHeadInfo date={date} categories={categories} title={title} headimage={headimage} />
                <div className="post-html-wrapper">
                    <PostContent html={html} />
                    <Toc html={tableOfContents}/>
                </div>
            <CommentWidget/>
            </div>
        </Template>
    </>
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
            headimage {
              publicURL
            }
          }
          tableOfContents
        }
      }
    }
  }
`
export type PostPageItemType = {
    node: {
        html: string
        frontmatter: PostFrontmatterType
    }
}