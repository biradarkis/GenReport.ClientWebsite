export default class Constants {
   public  static readonly excludeJwtValidation = ["login","signup"]; 
   public static readonly excludeHeaderBar  = [...this.excludeJwtValidation,]
}