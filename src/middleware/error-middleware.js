import { CustomError } from "../util/custom-error";

export const errorMiddleware = async (err,req,res,next) => {
    if(!err) {
        next();
        return;
    }

    if(err instanceof CustomError) {
        res.status(err.status).json({
            error: err.message,
        }).end();
    }else {
        res.status(500).json({
            error: err,
        }).end()
    }
}