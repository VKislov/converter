import { bindActionCreators } from 'redux';
import { useAppDispatch } from "./useAppDispatch"
import * as imageHistoryActions from '../imageHistoryReducer/imageHistoryActions'
export const useImageHistoryActions = ()=>{
    const dispatch= useAppDispatch()
    return bindActionCreators(imageHistoryActions,dispatch)
}