import React from "react";
import {StyeldLinkContact, StyeldLinkProject} from "../../components/Layout/styles";
import Tag from "../../components/Tag";
import NotionIcon from "../../components/icons/NotionIcon";


function HomePage() {
    return (
        <div className="container_wrap">
            <div className="section_01">
                <div className="wrap">
                    <div className="sub_title">안녕하세요, 프론트엔드 개발자</div>
                    <div className="title">손병현 입니다</div>
                    <StyeldLinkContact to={'/Portfolio/Contact'}>contact ✉️</StyeldLinkContact>
                </div>
                <div className="wrap">
                    <img src={'/img/resource/profile.png'}/>
                    <StyeldLinkContact className="mobile" to={'/Portfolio/Contact'}>contact ✉️</StyeldLinkContact>
                </div>
            </div>
            <div className="section_02">
                <div className="title">
                    Introduction.
                </div>
                <div className="text">
                    프론트엔드 개발자로서 사용자 중심의 인터페이스를 설계하고 구현하는 데 열정을 가지고 있습니다. 최신 웹 기술과 혁신적인 접근 방식을 통해 사용자에게 최고의 경험을 제공하고자
                    합니다.
                </div>
                {/*제가 하는 일을 좋아하고, 스스로 부족한 부분을 잘 알기에 개발 공부하는 것이 즐겁습니다. 저는 공부한 것을 팀원들과 나누고 서로 배우는 것에 큰 가치가 있다고 여깁니다. 완벽하지 않아서*/}
                {/*더 나은 서비스를 만드는 것을 함께 고민하고, 각자의 부족함을 서로 채우고, 재능을 인정하는 것이 좋은 기업과 서비스를 만드는 열쇠라고 생각하며 일합니다.*/}
            </div>
            <div className="skills">
                <div className="title">SKills</div>
                <div className="skill_list">
                    <div className="skill">
                        <div className="title">
                            Language
                        </div>
                        <div className="tags">
                            <Tag name='Typescript'/>
                            <Tag name='Javascript'/>
                            <Tag name='Styled-Component'/>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="title">
                            Framework
                        </div>
                        <div className="tags">
                            <Tag name='React'/>
                            <Tag name='Next.js'/>
                            <Tag name='Node.js'/>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="title">
                            tool
                        </div>
                        <div className="tags">
                            <Tag name='Github'/>
                            <Tag name='Jira'/>
                            <Tag name='Figma'/>
                            <Tag name='Notion'/>
                            <Tag name='Slack'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Career">
                <div className="title">Career</div>
                <div className="info_wrap">
                    <div className="head">
                        파스토
                        <img src={'/img/icons/1csbomq_logo.png'}/>
                    </div>
                    <div className="date">2021.12 ~ 2023.08</div>
                    <div className="info_text">
                        파스토는 온라인에 특화된 물류서비스(풀필먼트서비스)를 제공하는 IT물류 플랫폼이며
                        프로덕트팀의 프론트엔드 개발을 전담하며 신규 기능 개발 및 유지 보수를 진행한 경험이 있습니다.
                    </div>
                    <div className='mid_line'></div>
                    <div className="description">
                        <div className="title">▎파셀 1.0 & 2.0</div>
                        <div className="text">
                            <div>프론트엔드 기술을 활용하여 홈페이지의 고도화 및 성능 최적화를 담당.</div>
                            <div>각 페이지의 구성 요소를 컴포넌트화하여 재사용성을 향상시킴.</div>
                            <div>-사용기술 next.js, react.js, redux tool-kit, emotiion.css,</div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="title">▎CMS 어드민</div>
                        <div className="text">
                            <div>프론트엔드 업무를 통해 어드민 페이지를 구축</div>
                            <div>테이블 및 세부 페이지의 각 구성 요소를 컴포넌트화</div>
                            <div>-사용기술 react.js, styled-component</div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="title">▎풀필먼트 회사 홈페이지 구축 및 리뉴얼</div>
                        <div className="text">
                            <div>기존 홈페이지의 리뉴얼을 진행하여 사용자 경험을 향상시킴.</div>
                            <div>운영업무 기간동안 구축된 프로젝트 프론트엔드 기술을 활용하여 재사용 및 코드 최적화.</div>
                        </div>
                    </div>
                </div>
                <div></div>
                <a className="more_info" href="">
                    More Info (노션)
                    <div className="icon">
                        <NotionIcon/>
                    </div>
                </a>
            </div>
            <div className="Project">
                <div className="title">Project</div>
                <StyeldLinkProject to='/Portfolio/Project'>go_to_project</StyeldLinkProject>
            </div>
        </div>
    );
}


export default HomePage;