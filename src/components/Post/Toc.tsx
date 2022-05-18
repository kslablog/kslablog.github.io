import React from "react";

const Toc = ({ headings:any }) => (
    <ul className='toc-ul'>
        <h2 className='toc-title'>Table of contents</h2>
        <div className='toc-li-wrapper'>
            {headings.map(heading => {
                if (heading.depth > 4) {
                    return <div />
                }
                return (
                    <li className='toc-li' key={heading.value}>
                        <a className='toc-link'
                            href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
                        >
                            {heading.value}
                        </a>
                    </li>
                )
            })}
        </div>
    </ul>
)

export default Toc;