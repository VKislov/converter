import { connect } from "react-redux";
import { logIn } from "../../redux/authReducer";
import { Auth } from "./Auth";
const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { logIn: (email, password) => dispatch(logIn(email, password)) };
};
export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);
