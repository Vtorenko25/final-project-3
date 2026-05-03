import {PasswordValidationResult} from "@/app/models/IPasswordValidator";


export const validatePassword = (password: string): PasswordValidationResult => {
    const errors: string[] = [];

    if (password.length < 4) errors.push("Wrong email or password");


    return {
        valid: errors.length === 0,
        errors,
    };
};