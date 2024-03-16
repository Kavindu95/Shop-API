import jwt from 'jsonwebtoken'
export const authMiddlware = (req,res,next) => {
    const token = req.header('auth-token');

    if(!token){
        return res.status(401).json('Unauthorized');
    }

    try {
        const decoded = jwt.verify(token,process.env.AUTH_SECRET_KEY);
        
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({msg:'Token is not Valid'});
        
    }

}
