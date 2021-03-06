// AuthForm
export interface IAuth {
    logIn:(email:string,password:string)=>void
    setBedReqAC:(a:null)=>void
    bedReq: string|null
}
export interface IAuthFormProps {
    logIn:(email:string,password:string)=>void
    bedReq:string|null
    toggleShowModal:()=>void
    setBedReqAC: (a:null)=>void
}
export interface IErrors {
    email?:string
    password?:string
}
export interface IValues{
    email?:string
    password?:string
}

// AuthModal
export interface AuthModalProps{
    showAuthModal():void
    logIn(email:string,password:string):void
    setBedReqAC(a:null):void
    bedReq:string| null
}
