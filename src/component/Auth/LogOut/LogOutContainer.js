import { connect } from "react-redux";
import { logOut } from "../../../redux/authReducer";
import { LogOut } from "./LogOut";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(logOut()) };
};
export const LogOutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
