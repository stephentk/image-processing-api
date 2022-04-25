import express from "express";



const logger = (
    req: express.Request, 
    res: express.Response, 
    next: Function
): void => {
console.log('website was visited');
next()
};

export default logger;

