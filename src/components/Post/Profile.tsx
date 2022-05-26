import React, { FunctionComponent } from 'react'
import '../../Style.scss'


export type PostProfileProps = {
    author: string[]
    profile: {
        publicURL:string
    }
}

const Profile: FunctionComponent<PostProfileProps> = function ({
    author,
    profile
}) {
    return (
        <div className="profile-wrapper">
            <div className="profile-photo">
                <img className="profile-photo-img" src={profile.publicURL} alt="profile-photo"/>
            </div>
            <div className="author-info-wrapper">
                <div className="author-name">@{author[0]}</div>
                <div className="author-text-wrapper">
                    <div className="author-text-info">{author[1]}<br/>{author[2]}</div>
                    <div className="author-mail">{author[3]}</div>
                    {/*<div className="author-text-detail">{author[2]}</div>*/}
                    {/*<div className="author-link">*/}
                    {/*    <a className="mailtoauthor" href="mailto:"{...author[3]}><img className="mailto" src={mail} alt="mail" /></a>*/}
                    {/*    <a className="gitauthor" href={author[5]}><img className="gitto" src={git} alt="git" /></a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Profile