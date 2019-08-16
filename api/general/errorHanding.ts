import { ErrorRequestHandler } from "express";

export const aipErrorHandler:ErrorRequestHandler = (err,req,res,next)=>{
  switch(req.app.get('env')){
    case 'development':
      console.log(err)
      return res.status(err.status).json(err)
    case 'production':
      return res.status(err.status).json(err.publicVersion)
  }
}