import {Route} from "react-router-dom";
import Pages from "../index";
import React, {useRef} from "react";
import Styles from "./styles";
import emailjs from '@emailjs/browser';

function ContactPage() {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm("service_xa5zd2o", "template_lhnc8bh", form.current, {publicKey: "0n4piESDlU-Yg6ocf"}).then(
            result => {
                alert("성공적으로 이메일이 전송되었습니다.");
                form.current.reset();
            },
            error => {
                console.log(error.text);
                alert("이메일이 전송이 실패되었습니다.");
            },
        );
    };

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

            <Styles.Form ref={form} onSubmit={sendEmail}>
                <div className="emailTitle">Send Email ✉️</div>
                <div className="emailSubTitle">메일을 보내주시면 연락드리겠습니다.</div>
                <div className="emailFormWrap">
                    <div className="emailForm">
                        <div className="labelItem">
                            <label>Name</label>
                            <input type="text" name="user_name" />
                        </div>
                        <div className="labelItem">
                            <label>Email</label>
                            <input type="email" name="user_email" />
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