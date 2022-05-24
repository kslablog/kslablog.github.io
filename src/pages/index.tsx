import React, { FunctionComponent, useMemo } from 'react'
import CategoryList, {CategoryListProps} from 'components/Main/CategoryList'
import TopSection from "components/Main/TopSection";
import PostList from 'components/Main/PostList'
import { PostListItemType } from 'types/PostItem.types'
import '../Style.scss'
import { graphql } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'
import Template from "components/Common/Template";



type IndexPageProps = {
    location: {
        search: string
    }
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
                siteUrl: string
            }
        }
        allMarkdownRemark: {
            edges: PostListItemType[]
        }
        // file: {
        //     childImageSharp: {
        //         gatsbyImageData: IGatsbyImageData
        //     }
        //     publicURL: string
        // }
    }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
   location: { search },
    data: {
        site: {
            siteMetadata: {title, description, siteUrl}
        },
        allMarkdownRemark: {edges},
        // file: {
        //     childImageSharp: {gatsbyImageData},
        //     publicURL
        // }
    }
}) {
    const parsed: ParsedQuery<string> = queryString.parse(search)
    const selectedCategory: string =
        typeof parsed.category !== 'string' || !parsed.category
            ? 'All'
            : parsed.category

    const categoryList = useMemo(
        () =>
            edges.reduce(
                (
                    list: CategoryListProps['categoryList'],
                    {
                        node: {
                            frontmatter: { categories },
                        },
                    }: PostListItemType,
                ) => {
                    categories.forEach(category => {
                        if (list[category] === undefined) list[category] = 1;
                        else list[category]++;
                    });

                    list['All']++;

                    return list;
                },
                { All: 0 },
            ),
        [],
    )

    return (
        <Template title={title} description={description} url={siteUrl} image={"https://imagedelivery.net/jfIRjXneURbVKR0daxEchg/47c2b31f-48ad-4d52-f37f-93a6acfbb100/public"}>
            <TopSection/>
                <div>
                    <div className="main-category-wrapper">
                        <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
                    </div>
                    <div className="list">
                        <PostList selectedCategory={selectedCategory} posts={edges}/>
                    </div>
                </div>
        </Template>
    )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`;