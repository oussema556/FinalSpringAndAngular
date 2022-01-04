export class UserSession{
  constructor(
    public token : string,
    public id: string,
    public email: string,
    public roles: string[],
    public fullName: string,
  ){}
}
