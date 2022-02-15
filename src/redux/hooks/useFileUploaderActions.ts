import { bindActionCreators } from "redux"
import { useAppDispatch } from "./useAppDispatch"
import * as fileUploaderActions from '../fileUploaderReducer/fileUploaderActions'
export const useFileUploaderActions= ()=>{
    const dispatch = useAppDispatch()
    return bindActionCreators(fileUploaderActions,dispatch)
}