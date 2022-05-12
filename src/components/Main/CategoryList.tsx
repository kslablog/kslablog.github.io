import React, {FunctionComponent, ReactNode} from 'react'
import { Link } from 'gatsby'
import styled from "@emotion/styled";
import '../../App.css'

export type CategoryListProps = {
    selectedCategory: string
    categoryList: {
        [key: string]: number
    }
}

type CategoryItemProps = {
    active: boolean;
}

type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
))<CategoryItemProps>`
  font-size: 17px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  color: ${({ active }) => (active ? '#333333' : '#6f6f6f')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
    selectedCategory,
    categoryList,
    })
{
    return <>
        {Object.entries(categoryList).map(([name, count]) => (
            <CategoryItem
                to={`/?category=${name}`}
                active={name === selectedCategory}
                key={name}
            >
                # {name} {count}
            </CategoryItem>
        ))}
        </>
}

export default CategoryList