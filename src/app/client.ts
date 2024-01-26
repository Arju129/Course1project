export class Client {
    clientName:String="";
    Email:String="";
    Address:String="";
    Password:String="";
    RepeatPassword:String="";

    constructor(clientName:String,Email:String,Address:String,Password:String,RepeatPassword:String){
         this.clientName=clientName;
         this.Email=Email;
         this.Address=Address;
         this.Password=Password;
         this.RepeatPassword=RepeatPassword;

    }
}
