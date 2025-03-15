import authService from "../services/auth-service.js";

const signup = async (req,res,next) => {
    try{
        const result = await authService.signup(req);

        res.status(200).json(result);
    }catch(err) {
        next();
    }
};

export default {
    signup
}