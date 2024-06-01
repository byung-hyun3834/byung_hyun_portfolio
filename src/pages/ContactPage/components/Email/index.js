import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import Styles from "../../styles";

const Email = () =>{
    const [email, setEmail] = React.useState("");
    const [emailMessage, setEmailMessage] = React.useState("");
    const [isEmail, setIsEmail] = React.useState(false);

    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm("service_xa5zd2o", "template_lhnc8bh", form.current, {publicKey: "0n4piESDlU-Yg6ocf"}).then(
            result => {
                alert("성공적으로 이메일이 전송되었습니다.");
                form.current.reset();
            },
            error => {

                alert("이메일이 전송이 실패되었습니다.");
            },
        );
    };

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
            /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
        } else {
            setEmailMessage("사용 가능한 이메일 입니다.");
            setIsEmail(true);
        }
    };

    return(
        <Styles.Form ref={form} onSubmit={sendEmail}>
            <div className="emailTitle">Send Email ✉️</div>
            <div className="emailSubTitle">메일을 보내주시면 연락드리겠습니다.</div>
            <div className="emailFormWrap">
                <div className="emailForm">
                    <div className="labelItem">
                        <label>Name</label>
                        <input type="text" name="user_name" required />
                    </div>
                    <div className="labelItem">
                        <label>Email</label>
                        <input type="email" name="user_email" onChange={onChangeEmail} required />
                        <p className="message">{emailMessage}</p>

                    </div>
                    <div className="labelItem">
                        <label>Subject</label>
                        <input type="text" name="subject" required />
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
    )
}

export default Email;