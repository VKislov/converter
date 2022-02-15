import { bindActionCreators} from 'redux';
import { useAppDispatch } from './useAppDispatch';
import * as authActions from '../authReducer/authActions'
export const useActions=()=>{
    const dispatch = useAppDispatch()
    return bindActionCreators(authActions,dispatch)
}