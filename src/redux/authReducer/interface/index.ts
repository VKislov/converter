export interface IAuthReducerState {
    isAuth: string|null
    bedReq: string|null
}
export enum AuthActionTypes{
    SET_IS_AUTH = "SET-IS-AUTH",
    LOG_OUT = "LOG-OUT",
    SET_BED_REQ = "SET-BED-REQ"
}
interface SET_IS_AUTH {
    type: AuthActionTypes.SET_IS_AUTH
    isAuth: string|null

}
interface LOG_OUT {
    type: AuthActionTypes.LOG_OUT
}
interface SET_BED_REQ {
    type: AuthActionTypes.SET_BED_REQ
    bedReq: string
}

export type TAuthReducerActions = SET_IS_AUTH|LOG_OUT|SET_BED_REQ

