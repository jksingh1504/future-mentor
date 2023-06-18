module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }
    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }
    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Token invalid or expired' });
    }
    if(err.name === 'TypeError'){
        // invalid request
        return res.status(400).json({ message: 'invalid request',error:err.message });
    }
    if(err.message.includes("E11000 duplicate key error collection")){
        // duplicate insertion of any document
        return res.status(400).json({ message: err.message , warnning : "can not add duplicate fields!" });
    }
    // default to 500 server error
    return res.status(500).json({ message: "internal server error "+err.message });
}