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

            <Styles.Form>
                <div className="emailTitle">Send Email ✉️</div>
                <div className="emailSubTitle">메일을 보내주시면 연락드리겠습니다.</div>
                <div className="emailFormWrap">
                    <div className="emailForm">
                        <div className="labelItem">
                            <label>Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="labelItem">
                            <label>Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="labelItem">
                            <label>Subject</label>
                            <input type="text" name="subject" />
                        </div>
                    </div>
                    <div className="emailForm">
                        <div className="labelItem">
                            <label>Message</label>
                            <textarea name="message" required />
                        </div>
                        <input className="submit" type="submit" value="submit" />
                    </div>
                </div>
            </Styles.Form>
        </Styles.Container>
    );
}


export default ContactPage;