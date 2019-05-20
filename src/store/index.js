import AuthState from './authState';

class RootStore {
    constructor() {
        this.authState = new AuthState(this);
    }
}

const rootStore = new RootStore();

export default rootStore;