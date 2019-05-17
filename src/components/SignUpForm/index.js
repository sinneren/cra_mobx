import React, {Component} from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.submitHandler(this.state);
    }
    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input type="email" name="email" value={this.state.email} onChange={this.onChangeHandler} autoComplete="on" />
                <input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} autoComplete="on" />
                <button type="submit">Sign Up</button>
            </form>
        );
    }
}

export default SignUpForm;