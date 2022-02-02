import { connect } from "react-redux";
import { regUser, setBedReqAC } from "../../redux/authReducer";
import { Registration } from "./Registration";

const mapStateToProps = (state) => {
  return { bedReq: state.authReducer.bedReq };
};
const mapDispatchToProps = (dispatch) => {
  return {
    regUser: (email, password) => dispatch(regUser(email, password)),
    setBedReqAC: () => dispatch(setBedReqAC(null)),
  };
};
export const RegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
