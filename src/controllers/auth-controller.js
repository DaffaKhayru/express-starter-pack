import authService from "../services/auth-service.js";

const signup = async (req,res,next) => {
    try{
        const result = await authService.signup(req.body);

        res.status(200).json(result);
    }catch(err) {
        next(err);
    }
};

const login = async (req,res,next) => {
    try{
        const result = await authService.login(req.body);

        res.status(200).json(result);
    }catch(err) {
        next(err);
    }
};

const signout = async (req,res,next) => {
    try{
        const result = await authService.signout(req.body);

        res.status(200).json(result);
    }catch(err) {
        next();
    }
};

export default {
    signup,
    login,
    signout
}