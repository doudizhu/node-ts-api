export class APIError extends Error{
  constructor(name:string,message:string,public status:number){
    super();
    this.name = name;
    this.message = message;
  }
}

export class PublicInfo{
  constructor(message:string,public status:number, public properties?:any){
    
  }
}