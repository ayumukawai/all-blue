import React from "react";
import Image from "next/image";

const LoginModal = () => (
  <section className="login-modal-wrapper" id="login-modal">
    <div className="twin-modal">
        <div className="close-icon" id="close-btn"><Image src='/close_icon' alt='閉じるボタン' /></div>
        <div className="modal modal-left">
            <div id="login-form">
                <h2>E-mailログイン</h2>
                <form action="#">
                    <input className="form-contact" type="text" placeholder="メールアドレス"/>
                    <input className="form-contact" type="text" placeholder="パスワード"/>
                    <div id="submit-btn">ログイン</div>
                </form>
            </div>
        </div>  
        <div className="modal modal-right">
            <div id="login-form">
                <h2>新規登録</h2>
                <form action="#">
                    <input className="form-contact" type="text" placeholder="メールアドレス"/>
                    <input className="form-contact" type="text" placeholder="パスワード"/>
                    <div id="submit-btn">登録する</div>
                </form>
            </div>
        </div> 
    </div> 
</section>
);

export default LoginModal;
