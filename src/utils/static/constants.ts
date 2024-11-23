export default class Constants {
   public  static readonly excludeJwtValidation = ["/onboarding/login","/onboarding/signup","/onboarding/resetpassword"]; 
   public static readonly excludeNavBar  = [...this.excludeJwtValidation,]
}