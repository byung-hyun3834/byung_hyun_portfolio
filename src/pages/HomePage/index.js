import React from "react";
import {StyeldLinkProject} from "../../components/Layout/styles";
import Tag from "../../components/Tag";




function HomePage() {
    return (
        <>
            <div className="section_01">
                <div className="wrap">
                    <div className="sub_title">안녕하세요, 프론트엔드 개발자</div>
                    <div className="title">손병현 입니다</div>
                    <button>contact ✉️</button>
                </div>
                <img className="profile" src={'/img/resource/profile.png'}/>
            </div>
            <div className="section_02">
                제가 하는 일을 좋아하고, 스스로 부족한 부분을 잘 알기에 개발 공부하는 것이 즐겁습니다. 저는 공부한 것을 팀원들과 나누고 서로 배우는 것에 큰 가치가 있다고 여깁니다. 완벽하지 않아서
                더 나은 서비스를 만드는 것을 함께 고민하고, 각자의 부족함을 서로 채우고, 재능을 인정하는 것이 좋은 기업과 서비스를 만드는 열쇠라고 생각하며 일합니다.
            </div>
            <div className="skills">
                <div className="title">SKills</div>
                <div className="skill_list">
                    <div className="skill">
                        <div className="title">
                            Language
                        </div>
                        <div className="tags">
                            <Tag name='Typescript' />
                            <Tag name='Javascript' />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="title">
                            Language
                        </div>
                        <div className="tags">
                            <Tag name='Typescript' />
                            <Tag name='Javascript' />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="title">
                            Language
                        </div>
                        <div className="tags">
                            <Tag name='Typescript' />
                            <Tag name='Javascript' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Career">
                <div className="title">Career</div>
                <div className="info_wrap">
                    <div className="head">
                        <div className="title">파스토</div>
                        <div className="date">2021.12 ~ 2023.08</div>
                    </div>
                    <div className="text">
                        프론트엔드 개발을 리딩하여 프로젝트 설계, 리팩토링과 기술부채 관리, 디자인 시스템 등을 이끌며
                        상업용 부동산 수익증권 거래 플랫폼인 Rebit을 개발했습니다.
                    </div>
                    <div className="list"></div>
                </div>
            </div>
            <div className="Project">
                <div className="title">Project</div>
                <StyeldLinkProject to='/Portfolio/Project'>go_to_project</StyeldLinkProject>
            </div>
        </>
    );
}


export default HomePage;