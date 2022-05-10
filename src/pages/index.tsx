import React, { FunctionComponent } from 'react'
import CategoryList from 'components/Main/CategoryList'
import TopSection from "components/Main/TopSection";
import Footer from "components/Footer";



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
        </div>
            <Footer/>
        </>
    )
}

export default IndexPage