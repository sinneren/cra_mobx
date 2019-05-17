import {observable, computed} from 'mobx';

class Auth {
    @observable auth;

    constructor() {
        this.auth = false;
    }
    @computed get isAuth() {
        return this.auth;
    }
}
const auth = new Auth();

export default auth;
export { Auth };