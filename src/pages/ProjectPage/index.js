import {Route} from "react-router-dom";
import Pages from "../index";
import React from "react";
import Styles from "./styles";
import Tag from "../../components/Tag";


function ProjectPage() {

    return (
        <Styles.Container>
            <div className="pageTitle">
                Project 💻
            </div>
            <div className="list_wrap">
                <div className="item">
                    <img src={'/img/resource/thumbnail_01.jpg'} />
                    <div className="wrap">
                        <div className="title">
                            Makergallery Back-office
                        </div>
                        <div className="text">
                            메이커빌 근무 당시 제작한 쇼핑몰 사이트인 메이커갤러리의 백오피스입니다.
                        </div>
                        <div className="tags">
                            <Tag name='react' />
                        </div>
                        <div className="button_group">
                            <button>github</button>
                            <button>view</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={'/img/resource/thumbnail_02.jpg'} />
                    <div className="wrap">
                        <div className="title">
                            Makergallery Back-office
                        </div>
                        <div className="text">
                            메이커빌 근무 당시 제작한 쇼핑몰 사이트인 메이커갤러리의 백오피스입니다.
                        </div>
                        <div className="tags">
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                        </div>
                        <div className="button_group">
                            <button>github</button>
                            <button>view</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={'/img/resource/thumbnail_03.jpg'} />
                    <div className="wrap">
                        <div className="title">
                            Makergallery Back-office
                        </div>
                        <div className="text">
                            메이커빌 근무 당시 제작한 쇼핑몰 사이트인 메이커갤러리의 백오피스입니다.
                        </div>
                        <div className="tags">
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                        </div>
                        <div className="button_group">
                            <button>github</button>
                            <button>view</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={'/img/resource/thumbnail_04.jpg'} />
                    <div className="wrap">
                        <div className="title">
                            Makergallery Back-office
                        </div>
                        <div className="text">
                            메이커빌 근무 당시 제작한 쇼핑몰 사이트인 메이커갤러리의 백오피스입니다.
                        </div>
                        <div className="tags">
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                        </div>
                        <div className="button_group">
                            <button>github</button>
                            <button>view</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={'/img/resource/thumbnail_05.jpg'} />
                    <div className="wrap">
                        <div className="title">
                            Makergallery Back-office
                        </div>
                        <div className="text">
                            메이커빌 근무 당시 제작한 쇼핑몰 사이트인 메이커갤러리의 백오피스입니다.
                        </div>
                        <div className="tags">
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                            <span className="tag">react</span>
                        </div>
                        <div className="button_group">
                            <button>github</button>
                            <button>view</button>
                        </div>
                    </div>
                </div>
            </div>
        </Styles.Container>
    );
}


export default ProjectPage;