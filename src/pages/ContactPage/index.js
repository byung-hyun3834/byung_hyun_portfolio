import {Route} from "react-router-dom";
import Pages from "../index";
import React from "react";
import Styles from "./styles";

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
                    <div>notion: <a>Son ByungHyun</a></div>
                    <div>notion: <a>Son ByungHyun</a></div>
                    <div>notion: <a>Son ByungHyun</a></div>
                </div>
            </div>

        </Styles.Container>
    );
}


export default ContactPage;