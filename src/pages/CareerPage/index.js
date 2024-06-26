import { Link } from 'react-router-dom';
import React, {useRef} from "react";
import Styles from "./styles";

function CareerPage() {
    return (
            <Styles.Container>
                <div className="pageTitle">
                    Career 📑
                </div>

                <div className="Career">
                    <div className="info_wrap">
                        <div className="head">
                            (주)투데이디벨로퍼
                        </div>
                        <div className="date">2024.03 ~ 2024.05</div>
                        <div className="info_text">
                            소프트웨어(앱) 개발 및 공급을 담당하는 회사로 타회사에 신규 서비스 개발을 담당하였습니다.
                        </div>
                        <div className='mid_line'></div>
                        <div className="description">
                            <div className="title">▎ 신규 서비스페이지 제작 - 피플레이스, 에듀소스, 손경수 갤러리</div>
                            <div className="text">
                                <div>React를 사용한 동적 페이지 및 컴포넌트 개발.</div>
                                <div>작업한 내용은 <Link to="/Portfolio/Project">프로젝트</Link>에서 확인이 가능합니다</div>
                                <div>-사용기술 react.js, custom hook, styled-component</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="Career">
                    <div className="info_wrap">
                        <div className="head">
                            라이피스
                        </div>
                        <div className="date">2023.11 ~ 2024.02</div>
                        <div className="info_text">
                            웹/앱/응용SW 전문 개발사로 프리랜서로 근무하며 신규 서비스 개발에 참여하였습니다.
                        </div>
                        <div className='mid_line'></div>
                        <div className="description">
                            <div className="title">▎신규 서비스페이지 제작 - 아트페, 라디</div>
                            <div className="text">
                                <div>React를 사용한 동적 페이지 및 컴포넌트 개발</div>
                                <div>작업한 내용은 <Link to="/Portfolio/Project">프로젝트</Link>에서 확인이 가능합니다</div>
                                <div>-사용기술 react.js, highcharts, styled-component</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="Career">
                    <div className="info_wrap">
                        <div className="head">
                            파스토
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

                </div>
            </Styles.Container>

    );
}


export default CareerPage;