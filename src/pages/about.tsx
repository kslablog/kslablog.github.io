import React, { FunctionComponent } from 'react'
import CTO from "../images/profile/cto.jpg"
import DG from"../images/profile/dg.jpg"
import DJ from"../images/profile/dj.jpg"
import GR from"../images/profile/gr.jpg"
import HJ from"../images/profile/hj.jpg"
import JH from"../images/profile/jh.jpg"
import JM from"../images/profile/jm.jpg"
import JY from"../images/profile/jy.jpg"
import JYP from"../images/profile/jyp.jpg"
import S from"../images/profile/s.jpg"
import SH from"../images/profile/sh.jpg"
import "../About.scss"
import Template from "components/Common/Template";




const AboutPage: FunctionComponent = function () {

    return (
        <>
            <Template title={"한국시니어 연구소 테크본부는 기술 블로그를 이렇게 운영합니다."} description={"한국시니어 연구소 테크본부는 기술 블로그를 이렇게 운영합니다."} url={"https://super-mangomango.github.io/about"} image={"https://imagedelivery.net/jfIRjXneURbVKR0daxEchg/47c2b31f-48ad-4d52-f37f-93a6acfbb100/public"}>
            <div className="about-wrapper">
                <section className="about-">
                    <div className="about-content-wrapper">
                        <div className="about-left-section">
                            <h4 className="about-left-section-1">
                                About
                            </h4>
                            <h2 className="about-left-section-2">
                                Korea Senior Lab <br/>
                                Tech Division <br/>
                                Tech Blog
                            </h2>
                        </div>
                        <div className="about-right-section">
                            <div className="right-section-1">
                                <div className="about-right-section-1">
                                    실버 테크 시장의 리딩컴퍼니, <br/>한국시니어 연구소의
                                    테크 본부 구성원들이 운영하는 기술 블로그입니다.
                                </div>
                                <div className="about-right-section-2">
                                    요양 산업 혁신을 위해, 우리가 만들어가고 있는
                                    새로운 서비스들의 개발 과정과, 함께 일하는 문화,
                                    함께 성장한 경험들을 이곳에서 공유합니다.
                                </div>
                            </div>
                            <div className="about-right-section-3">
                                인류의 건강한 100세 시대를 연구하는 곳,<br/>
                                <h2>한국시니어연구소</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="culture">
                    <div className="culture-content-wrapper">
                        <div className="culture-info-wrapper">
                            <div className="culture-title">
                                Culture
                            </div>
                            <p className="culture-info">
                                한국시니어연구소 테크본부는 이렇게 일하고 있습니다.
                            </p>
                        </div>
                        <div className="culture-no-wrapper">
                            <div className="culture-no1-title-wrapper">
                                <div className="numbering">
                                    01
                                </div>
                                <h5 className="small-title">
                                    Thinking
                                </h5>
                                <h2 className="big-title">
                                    높은 퀄리티의 코드를 위해
                                    끊임없이 고민합니다.
                                </h2>
                            </div>
                            <div className="culture-">
                                <ul className="culture-content-wrapper-">
                                    <li className="culture-content">
                                        한국시니어연구소 테크본부는 기술부채없는 미래지향적인 개발 문화를 만들어가고 있습니다.
                                    </li>
                                    <li className="culture-content">
                                        데드라인에 쫓기기보다 유지보수와 협업을 위한 좋은 코드를 작성하는 것이 목표입니다.
                                    </li>
                                    <li className="culture-content">
                                        나와 동료들의 다양한 의견을 자유롭게 제시하고, 지식과 노하우를 공유할 수 있는 코드리뷰를 통해 높은 코드 퀄리티와 구성원의 모두의 성장을 지향합니다
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="culture-no-wrapper">
                            <div className="culture-no1-title-wrapper">
                                <div className="numbering">
                                    02
                                </div>
                                <h5 className="small-title">
                                    Growth
                                </h5>
                                <h2 className="big-title">
                                    구성원의 성장을 위해
                                    지원을 아끼지 않습니다.
                                </h2>
                            </div>
                            <div className="culture-">
                                <ul className="culture-content-wrapper-">
                                    <li className="culture-content">
                                        서로에게 좋은 동료가 될 수 있도록, 함께 성장할 수 있는 환경을 만들기 위해 노력합니다.
                                    </li>
                                    <li className="culture-content">
                                        성장에 방해받지 않도록, 좋은 장비를 제공하고, 교육 지원 제도가 마련되어있습니다.
                                    </li>
                                    <li className="culture-content">
                                        자율적인 스터디 문화를 통해 함께 토론하고, 공유하며 성장합니다.
                                    </li>
                                    <li className="culture-content">
                                        구성원 모두가 참여할 수 있는 기술블로그를 운영하야, 우리만의 전문성을 높이는데 고민합니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="culture-no-wrapper">
                            <div className="culture-no1-title-wrapper">
                                <div className="numbering">
                                    03
                                </div>
                                <h5 className="small-title">
                                    Together
                                </h5>
                                <h2 className="big-title">
                                    우리는 함께 일합니다
                                </h2>
                            </div>
                            <div className="culture-">
                                <ul className="culture-content-wrapper-">
                                    <li className="culture-content">
                                        권위적인 리더와 수직적인 체계를 지양합니다.
                                    </li>
                                    <li className="culture-content">
                                        상대적 성과를 위한 경쟁보다는, 서로가 신뢰하고 함께 성장하기위한 문화를 만들어가고 있습니다.
                                    </li>
                                    <li className="culture-content">
                                        구성원의 장점과 능력을 존중하고 협업하면서, 좋은 팀플레이어가 되기 위해 노력합니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="members">
                    <div className="members-wrapper">
                        <div className="culture-info-wrapper">
                            <div className="culture-title">
                                Members
                            </div>
                            <p className="culture-info">
                                함께 일하고 있는, 한국시니어연구소 테크본부의 구성원을 소개합니다.
                            </p>
                        </div>
                        <ul className="member-list">
                           <li className="members-list-wrapper">
                               <div className="member">
                                   <img className="member-photo" src={CTO} alt="cto-photo"/>
                               </div>
                               <div className="member-info">
                                   <p className="member-name-rank">
                                       김선중&nbsp;
                                       <p className="rank">/ CTO</p>
                                   </p>
                                   <p className="member-position">
                                       한국시니어연구소 테크본부 본부장 / CTO
                                   </p>
                                   <p className="member-information">
                                       저는 머리가 큰 만큼 개발을 잘합니다.
                                   </p>
                               </div>
                           </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={JM} alt="jm-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        서재민&nbsp;
                                        <p className="rank">/ CDxO</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 CDxO
                                    </p>
                                    <p className="member-information">
                                        개발을 사랑하는 개발자
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={JYP} alt="jyp-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        박재용&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Front-end Developer
                                    </p>
                                    <p className="member-information">
                                        사용자들의 사용성 개선을 위한 ux 중심의 개발을 위해 늘 고민하고 있습니다.
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={HJ} alt="hj-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        시형준&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Back-end Developer
                                    </p>
                                    <p className="member-information">
                                        졸려요
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={DJ} alt="dj-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        이동주&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Back-end Developer
                                    </p>
                                    <p className="member-information">
                                        정제된 코드는 쉽게 전달된다고 생각합니다
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={JH} alt="jh-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        유지현&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Front-end Developer
                                    </p>
                                    <p className="member-information">
                                        저는 뺀질뺸질 거립니다.
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={S} alt="s-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        원 솔&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Back-end Developer
                                    </p>
                                    <p className="member-information">
                                        원래 다른 사람이 보는 내가 더 진실에 가깝습니다.
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={DG} alt="dg-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        박대근&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Back-end Developer
                                    </p>
                                    <p className="member-information">
                                        타코는 못 참지
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={JY} alt="jy-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        이지영&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Front-end Developer
                                    </p>
                                    <p className="member-information">
                                        코딩테스트는 너무 쉬웠어요.
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={GR} alt="gr-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        이가람&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 Product Manager
                                    </p>
                                    <p className="member-information">
                                        선비의 마음으로 모든 문장에 진심을 다하겠습니다.
                                    </p>
                                </div>
                            </li>
                            <li className="members-list-wrapper">
                                <div className="member">
                                    <img className="member-photo" src={SH} alt="sh-photo"/>
                                </div>
                                <div className="member-info">
                                    <p className="member-name-rank">
                                        조성호&nbsp;
                                        <p className="rank">/ Manager</p>
                                    </p>
                                    <p className="member-position">
                                        한국시니어연구소 테크본부 QA
                                    </p>
                                    <p className="member-information">
                                        골프왕
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            </Template>
        </>
    )
}

export default AboutPage

