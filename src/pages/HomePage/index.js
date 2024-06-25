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
                        <div className="title">프론트엔드 개발자<br className="br_mobile" /> 손병현 입니다</div>
                        <div className="Introduction">
                            사용자 접근성과 편의성을 향상시키는 데 끊임없이 고민하고<br className="br_pc" /> 이를 실현하는 개발자가 되고자 합니다.
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
                            인하우스에서 퍼블리싱 작업을시작으로 UI/UX와 웹에 대한 이해도를 높여왔고
                            <br/>
                            <br/>
                            비즈니스가 성장함에 따라 잦은 콘텐츠 업데이트로 인한 유지보수 문제에 대응하기 위해
                            cdn방식 Vue를 도입하여 리팩토링을 진행하여 코드 간소화 및 유지보수비용을 낮춘 경험이 있습니다.
                            <br/>
                            <br/>
                            이를 통해 spa 알게되면서 React로 서비스 구현을 시작하게 되었고
                            데이터를 받아오는 동안 페이지 전체를 랜더링하는것이 아닌 데이터가 적용되는 부분만 랜더링을 발생시켜
                            유저와 서버 모두에게 부담되는 영역을 해결하면서 웹에대한 심층적인 재미를 느껴 프론트엔드로 개발 방향성을 잡았고
                            <br/>
                            <br/>
                            사용자들이 계속해서 방문하고 싶어하는 사이트를 개발하는 것이 목표입니다.

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