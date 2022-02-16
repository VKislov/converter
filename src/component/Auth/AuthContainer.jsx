import { connect } from "react-redux";
import { logIn, setBedReqAC } from "../../redux/authReducer/authActions";
import { Auth } from "./Auth";
const mapStateToProps = (state) => {
  return { bedReq: state.authReducer.bedReq };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (email, password) => dispatch(logIn(email, password)),
    setBedReqAC: () => dispatch(setBedReqAC(null)),
  };
};
export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);
