import { ReactNode } from "react";
import {  FieldError, FieldErrors, FieldErrorsImpl, FieldValues, Merge, Message, MultipleFieldErrors, Ref, UseFormRegisterReturn } from "react-hook-form";

interface error {    
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;    }


interface errorMessage {
    pattern?: string
    required?: string
    minLength?: string
    maxLength?: string
    valueAsDate?: string
}    

export interface UiDateProps {
    register: UseFormRegisterReturn<string>
    errors:  Merge<FieldError, FieldErrorsImpl<error>> | undefined
    label: string,
    id: string
    errorMessage?: errorMessage
}
