import { connect } from "react-redux";
import { regUser } from "../../redux/authReducer";
import { Registration } from "./Registration";

const mapStateToProps = (state) => {
  return;
};
const mapDispatchToProps = (dispatch) => {
  return { regUser: (email, password) => dispatch(regUser(email, password)) };
};
export const RegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
