import { CustomError } from "../util/custom-error.js";

export const validate = (schema,request) => {
    const {error, value} = schema.parse(request);

    if(error) {
        throw new CustomError(400, error);
    }else {
        return value;
    }
}