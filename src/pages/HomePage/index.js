import React from "react";
import Tag from "../../components/Tag";
import Styles from "./styles";
import NotionIcon from "../../components/icons/NotionIcon";


function HomePage() {

    const handleCopyClipBoard = async (text) => {
        try {
            navigator.clipboard.writeText(text);
            alert('클립보드에 복사되었습니다.');
        } catch (error) {
            alert('클립보드 복사에 실패하였습니다.');
        }
    };
    return (
        <Styles.Container>
            <div className="container_wrap">
                <div className="main_banner">
                    <div className="wrap">
                        <div className="sub_title">Front-End</div>
                        <div className="title">프론트엔드 개발자 손병현 입니다</div>
                        <div className="Introduction">
                            사용자 접근성과 편의성을 향상시키는 데 끊임없이 고민하고<br/>
                            이를 실현하는 개발자가 되고자 합니다.
                        </div>
                    </div>
                </div>


                    <div className="aboutMe">
                        <div className="title">🪪 About Me</div>
                        <div className="wrap">
                            <div className="profile_wrap">
                                <img src={'/img/resource/profile.png'}/>
                            </div>
                            <div className="links">
                                <div className="profile">
                                    <div className="name">손병현 👨🏻‍💻</div>
                                    <div className="tag_wrap">
                                        <span>frontend</span>
                                        <span>3 year</span>
                                    </div>
                                </div>
                                <div className="link_title">Email : <span className="link_text" onClick={(e) => handleCopyClipBoard('sbh3834@naver.com')}>sbh3834@naver.com</span></div>
                                <div className="link_title">GitHub : <a className="link_text" href="https://github.com/Edward-Shawn" target="_blank">ByungHyun Son github</a></div>
                            </div>
                        </div>

                    </div>
                    <div className="Interview_wrap">
                        <div className="title">
                            Interview.
                        </div>
                        <div className="text">
                            HTML/CSS 기반 퍼블리싱 작업을시작으로 UI/UX와 웹에 대한 이해도를 높였습니다.
                            <br/>
                            <br/>
                            비즈니스가 성장함에 따라 잦은 콘텐츠 업데이트로 인한 유지보수 문제에 대응하기 위해 cdn방식 Vue를 도입하여
                            리팩토링을 진행하여 유지보수비용을 낮춘 경험이 있습니다.
                            <br/>
                            <br/>
                            그리고 사내 신규 프로젝트를 React로 진행하면서 긴 HTML/JS 코드를 간소화하고,
                            JSON 데이터 기반 동적 코드와 성능 이슈를 해결했습니다. 저는 JavaScript를 가장 좋아하고 잘 다루며, 시각적 요소뿐 아니라 성능, 코드 가독성, 유지보수를 중시하는 개발자로 성장하고 있습니다.
                        </div>
                    </div>
                    <div className="skills">
                        <div className="title">SKills</div>
                        <div className="skill_list">
                            <div className="skill">
                                <div className="title">
                                    FrontEnd
                                </div>
                                <div className="tags">
                                    <Tag name='React'/>
                                    <Tag name='Next.js'/>
                                    <Tag name='Redux'/>
                                    <Tag name='Typescript'/>
                                    <Tag name='Javascript'/>
                                    <Tag name='JQuery'/>
                                    <Tag name='Styled-Component'/>
                                    <Tag name='SCSS'/>
                                    <Tag name='Tailwind CSS'/>
                                    <Tag name='Emotion'/>
                                    <Tag name='HTML'/>
                                    <Tag name='CSS'/>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="title">
                                    Community
                                </div>
                                <div className="tags">
                                    <Tag name='Figma'/>
                                    <Tag name='Jira'/>
                                    <Tag name='Confluence'/>
                                    <Tag name='Notion'/>
                                    <Tag name='Slack'/>
                                    <Tag name='Discord'/>
                                </div>
                            </div>
                        </div>
                    </div>




            </div>
        </Styles.Container>

    );
}


export default HomePage;