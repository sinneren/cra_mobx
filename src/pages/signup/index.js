import React from 'react';
import Layout from '../../layouts/index';
import SignUp from '../../containers/SignUp';

const SignUpPage = (props) => (
    <Layout>
        <SignUp {...props} />
    </Layout>
);

export default SignUpPage;