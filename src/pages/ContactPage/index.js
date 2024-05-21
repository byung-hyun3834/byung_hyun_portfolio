import {Route} from "react-router-dom";
import Pages from "../index";
import React, {useRef} from "react";
import Styles from "./styles";
import Email from "./components/Email";

function ContactPage() {
    return (
        <Styles.Container>
            <div className="pageTitle">
                Contact me 👋
            </div>
            <div className="tag_wrap">
                <span>contact</span>
                <span>link</span>
            </div>
            <div className="links_wrap">
                <div className="title">
                    Links
                </div>
                <div className="links">
                    <div>Email: <a href="mailto:sbh3834@naver.com" target="_blank">sbh3834@naver.com</a></div>
                    <div>GitHub: <a href="https://github.com/Edward-Shawn" target="_blank">ByungHyun Son github</a></div>
                    <div>notion: <a href="" target="_blank">ByungHyun Son notion</a></div>
                </div>
            </div>
            <Email/>
        </Styles.Container>
    );
}


export default ContactPage;