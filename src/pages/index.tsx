import React, { FunctionComponent } from 'react'
import CategoryList from 'components/Main/CategoryList'
import TopSection from "components/Main/TopSection";
import Footer from "components/Footer";
import PostList from "components/Main/PostList";
import "../App.css"



const IndexPage: FunctionComponent = function () {
    const CATEGORY_LIST = {
        All: 5,
        Web: 3,
        Mobile: 2,
    }
    return (
        <>
            <TopSection/>
        <div>
            <CategoryList selectedCategory="All" categoryList={CATEGORY_LIST} />
            <div className="list">
                <PostList />
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default IndexPage