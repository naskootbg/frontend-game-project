import { defineStore } from 'pinia';
import { getCurrentUser, doLogin, doLogout } from '../api/login';



export const useUserStore = defineStore('userStore', {
  state() {
    return {
      user: null,
      token: null,
      userLoged: false
    };
  },
  getters: {
    isUserLogged: state => state.userLoged,
  },
  actions: {
    async onLogin(loginData) {
      const theToken = await doLogin(loginData);
      if (theToken.length > 10){
        localStorage.setItem('token', theToken);
        this.token = theToken;
        this.userLoged = true;
        const profile = await getCurrentUser(theToken);
        this.user = profile;
        this.userLoged = true;
      }
       
      
      
    },
    async reAuthUser() {
      const persistedUserToken = localStorage.getItem('token');
      if (!persistedUserToken)       
        return false;
      
      console.log('token', persistedUserToken);
      this.token = persistedUserToken;
      const profile = await getCurrentUser(persistedUserToken);
      console.log('profile', profile);
      if (profile) {
        this.user = profile;
        this.userLoged = true;
        
        return true;
      }
       
      
    },
    async letLogout() {
      this.userLoged = false;
      const theToken = await doLogout();
      localStorage.removeItem('token');
    },
  },
  
});
