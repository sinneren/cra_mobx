import React from 'react';
import Layout from '../../layouts/index';
import SignIn from '../../containers/SignIn';

const SignInPage = (props) => (
    <Layout>
        <SignIn {...props} />
    </Layout>
);

export default SignInPage;