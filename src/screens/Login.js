import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router";

import Header from "../components/Header"
import '../styles/loginStyles.css';
import {useGAPageViewHook} from "../hooks/GAhooks";

function LoginScreen() {

    const history = useHistory();

    useGAPageViewHook(window.location.pathname);


    const onSuccessResponseGoogle = (response) => {
        history.push({
            pathname: '/home',
            state: response
        })
    }

    const onFailureResponseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div >
            <Header></Header>
            <header className="Login">
                <GoogleLogin
                    clientId="393599926777-5q541vhi9mchrcgbmh8otbn65n5sfb99.apps.googleusercontent.com"
                    buttonText="Sign In with Google"
                    onSuccess={onSuccessResponseGoogle}
                    onFailure={onFailureResponseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </header>

        </div>
    );
}

export default LoginScreen;
