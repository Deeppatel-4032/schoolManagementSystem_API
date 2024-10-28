import jwt from "jsonwebtoken";

const veryfayToken = (roles) => {

    return (req, res, next) => {
        
        try {
            const token = req.header("Authorization");

            if(!token) {
                res.json({
                    status : 404,
                    message: "Please valid token enter"
                });
            }

            const tokenData = token.split(" ")[1];
            console.log("tokenData >>>", tokenData);

            const decoded = jwt.verify(tokenData, "secret");
            console.log("decoded >>>", decoded);

            if(roles.includes(decoded.role)) {
                res.json({
                    status : 200,
                    message: "Authorized",
                    data: decoded
                });
                next();
            }
            else {
                res.json({
                    status : 404,
                    message: "Unauthorized"
                });
            }
            
        } catch (error) {
            res.json({
                status : 404,
                message: "Please valid token enter"
            });
        }
    }
}


export default veryfayToken;