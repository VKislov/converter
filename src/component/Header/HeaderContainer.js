import { connect } from "react-redux";
import { Header } from "./Header";
const mapStateToProps = (state) => {
  return { isAuth: state.authReducer.isAuth };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
