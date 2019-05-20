import {observable, computed, action} from 'mobx';

class AuthState {
    @observable authState = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    @computed get isAuth() {
        return this.authState;
    }
    @action setAuth = authState => {
        this.authState = authState;
    }
}

export default AuthState;