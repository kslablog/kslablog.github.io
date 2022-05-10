import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

export type CategoryListProps = {
    selectedCategory: string
    categoryList: {
        [key: string]: number
    }
}

const CategoryList: FunctionComponent<CategoryListProps> = function ({
    selectedCategory,
    categoryList,
    })
{
    return <>
        {Object.entries(categoryList).map(([name, count]) => (
            <Link
                to={`/?category=${name}`}
                active={name === selectedCategory}
                key={name}
            >
                #{name}({count})
            </Link>
        ))}
        </>
}

export default CategoryList