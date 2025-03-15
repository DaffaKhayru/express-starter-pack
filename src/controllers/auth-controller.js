import authService from "../services/auth-service";

const signup = async (req,res,next) => {
    try{
        const result = authService.signup(req);

        res.status(200).json(result);
    }catch(err) {
        next();
    }
};

export default {
    signup
}