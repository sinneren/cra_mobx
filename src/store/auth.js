import {observable, computed, action} from 'mobx';

class Auth {
    @observable auth;

    constructor() {
        this.auth = false;
    }
    @computed get isAuth() {
        return this.auth;
    }
    @action setAuth() {
        this.auth = true;
    }
}
const auth = new Auth();

export default auth;
export { Auth };