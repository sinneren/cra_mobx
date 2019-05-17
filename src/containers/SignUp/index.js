import React from 'react';
import { observer, inject } from 'mobx-react';
import SignUpForm from '../../components/SignUpForm';

const SignUp = (props) => {
    const createUser = props.doCreateUserWithEmailAndPassword;

    const onSubmitHandler = (props) => {
        createUser(props.email, props.password)
            .then((res) => {
                const inNew = res.additionalUserInfo.isNewUser;
                const uid = res.user.uid;
                inject('auth')(
                    observer(({ auth }) => {
                        console.log(auth.isAuth)
                    })
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <SignUpForm submitHandler={onSubmitHandler} />
    )
}
export default SignUp;