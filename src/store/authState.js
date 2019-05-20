import {observable, computed, action} from 'mobx';

class AuthState {
    @observable authState;

    constructor() {
        this.authState = false;
    }
    @computed get isAuth() {
        return this.authState;
    }
    @action setAuth() {
        this.authState = true;
    }
}
const authState = new AuthState();

export default authState;
export { AuthState };