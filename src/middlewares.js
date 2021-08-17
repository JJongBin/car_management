

export const localsMiddleware = (req, res, next) => {
    
    res.locals.path = __dirname;
    console.log(res.locals.path)

    next();
}




