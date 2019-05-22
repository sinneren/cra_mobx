import React, { Component } from "react";
import { extendObservable } from "mobx";
import { inject, observer } from "mobx-react";
import SignUpForm from '../../components/SignUpForm';

const SignIn = inject('authState')(
     observer(
         class SignIn extends Component {
            constructor() {
                super();

                extendObservable(this, {});
            }
            onSubmitHandler = (props) => {
                this.props.doSignInWithEmailAndPassword(props.email, props.password)
                    .then((res) => {
                        const {uid} = res.user;
                        this.props.authState.setAuth(true)
                        localStorage.setItem('authUser', uid);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }

            render() {
                return <SignUpForm submitHandler={this.onSubmitHandler} />
            }
        }
     )
);

export default SignIn;