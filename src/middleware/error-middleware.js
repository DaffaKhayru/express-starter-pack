import { CustomError } from "../util/custom-error.js";

export const errorMiddleware = async (err,req,res,next) => {
    if(!err) {
        next();
        return;
    }

    if(err instanceof CustomError) {
        res.status(err.status).json({
            error: err.message,
        })
    }else {
        res.status(500).json({
            error: err,
        })
    }
}