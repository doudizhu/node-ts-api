import { Request,Response } from "express";
import { NextFunction } from "connect";
export interface CumtomRequest extends Request{
  user?: string
}

export interface CumtomResponse extends Response{}

export type CustomRequestHandler = (req:CumtomRequest,res:CumtomResponse,next:NextFunction) => any;