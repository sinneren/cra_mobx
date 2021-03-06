import React, { Component } from "react";
import { extendObservable } from "mobx";
import { inject, observer } from "mobx-react";
import SignUpForm from '../../components/SignUpForm';


const SignUp = inject('authState')(
     observer(
        class SignUp extends Component {
            constructor() {
                super();

                extendObservable(this, {});
            }
            onSubmitHandler = (props) => {
                this.props.doCreateUserWithEmailAndPassword(props.email, props.password)
                    .then((res) => {
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

export default SignUp;