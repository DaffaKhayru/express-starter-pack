import { CustomError } from "../util/custom-error.js";

export const validate = (schema,request) => {
    const {error, value} = schema.validate(request);

    if(error) {
        throw new CustomError(400, error.message);
    }else {
        return value;
    }
}