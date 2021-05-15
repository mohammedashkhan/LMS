import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token  = req.headers.authorization.split(" ")[1];
        
        let decodedData;

        if(token){
             decodedData = jwt.verify(token, 'learningmangementsystem6%$&*#()#&');
             req.userId = decodedData.id;
            //  req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData.sub;
            // req.userId = decodedData?.sub;
        }

        next();
        //if all above condition are true then next is for ok 
        // they above is true now can proceed to next;  is all about next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;