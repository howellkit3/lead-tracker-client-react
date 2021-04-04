import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INTIAL_STATE = {
    isSignedIn: null,
    token: null
  };
  
  export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case SIGN_IN:
        return { ...state, isSignedIn: true, token: action.payload };
      case SIGN_OUT:
        console.log("********* SIGN OUT CALLED");
        return { ...state, isSignedIn: false, token: null };
      default:
        return state;
    }
  };
  