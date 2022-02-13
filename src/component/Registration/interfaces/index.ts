// IRegistrationProps
export interface IRegistrationProps {
    bedReq:string|null,
    regUser(email:string,password:string):void,
    setBedReqAC():void,
}

// IRegistrationFormProps
export interface IRegistrationFormProps {
    regUser(email:string,password:string): void
    bedReq:null|string
    setBedReqAC():void
}

export interface IErrors {
    email?:string
    password?:string
    confirmPassword?:string
}
export interface IValues{
    email?:string
    password?:string
    confirmPassword?:string
}


//RegistrationContainer
export interface IRegistrationContainerProps{
    bedReq:string|null
}
export interface IRegistrationContainerDispatch{
    regUser(email:string,password:string): void
    setBedReqAC():void
}