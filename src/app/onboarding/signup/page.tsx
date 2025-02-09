"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, Formik, useFormik } from "formik"
import * as Yup from "yup"
import { userSchema } from "@/utils/validations/user-signup-validation"
import {container} from "@/utils/di/inversify.config"
import { HttpResponse } from "@/utils/models/shared/http-response"
import ApiClient from "@/utils/services/api-client"

//const [formData, setFormData] = useState({name: "", email: "", password: "",confirmPassword: ""});



export default  function SignupPage() {
  
  const client  = container.get(ApiClient);
  const {values, touched, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""},
    validationSchema: userSchema,
    onSubmit: async function(){
      
      console.log(errors)
      let res =  await client.sendHttpPost<HttpResponse<any>>(values,'signup')
      console.log(res)
    }
  });

  console.log(errors);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-[450px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Sign up to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-6">
              <div className="flex gap-2">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                  <Input id="firstName" type="text" placeholder="John" className={errors.firstName && touched.firstName ? "input-field-error" : ""} value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.firstName && touched.firstName && <p className="error-text">{errors.firstName}</p>}
                </div>
                <div className="flex flex-col space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Doe" className={errors.lastName && touched.lastName ? "input-field-error" : ""} value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                {errors.lastName && touched.lastName && <p className="error-text">{errors.lastName}</p>}
              </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.com" className={errors.email && touched.email ? "input-field-error" : ""} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                {errors.email && touched.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input id="password" type="password" placeholder="Abcd@123" className={errors.password && touched.password ? "input-field-error" : ""} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Abcd@123" className={errors.confirmPassword && touched.confirmPassword ? "input-field-error" : ""} value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
                {errors.confirmPassword && touched.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="form-checkbox mr-2" />
                <label htmlFor="terms" className="text-sm">I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a></label>
              </div>
              
          <Button className="w-full" type="submit">Sign Up</Button>
            </div>
            
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <p className="text-sm text-center">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}