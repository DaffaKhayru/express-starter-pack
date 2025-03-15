import { CustomError } from "../util/custom-error.js";

export const validate = (schema,request) => {
    const result = schema.validate(request);

    if(result.error) {
        throw new CustomError(400, result.error.message);
    }else {
        return result.value;
    }
}