import React, { FunctionComponent } from "react";

interface  PostTocProps {
    html: string
}

const Toc: FunctionComponent<PostTocProps> = function ({ html }) {
    return <div className='post-toc' dangerouslySetInnerHTML={{ __html:html }} />
}

export default Toc