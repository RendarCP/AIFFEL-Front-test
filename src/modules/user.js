const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'user/LOGIN_FAILURE';
const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'user/LOGOUT_FAILURE';

export const login_success = data => ({ type: LOGIN_SUCCESS, data })
export const login_fail = err => ({ type: LOGOUT_FAILURE, err })
export const logout_success = () => ({ type: LOGOUT_SUCCESS })
export const logout_fail = () => ({ type: LOGOUT_FAILURE })

const initialstate = {
  loginLoading: false,
  loginDone: false,
  loginError: false,
  userInfo: {},
  errMsg: '',
  logoutLoading: false,
  logoutError: false,
  logoutDone: false,
};

export default function user(state = initialstate, action){
  switch(action.type){
    case LOGIN_SUCCESS :
      return{
        loginLoading: false,
        loginDone: true,
        userInfo: action.data,
        tocken: "#!!user!!#"
      }
    case LOGIN_FAILURE: 
      return {
        loginLoading: false,
        LoginError: true,
        loginDone: false,
        errMsg: action.error
      }
    case LOGOUT_SUCCESS: 
      return {
        logoutLoading: false,
        logoutDone: true,
      }
    case LOGOUT_FAILURE:
      return {
        logoutLoading: false,
        errMsg: action.error,
      }
    default:
      return state;
  }
}