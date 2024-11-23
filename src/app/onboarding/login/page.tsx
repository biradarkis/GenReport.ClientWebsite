import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ApiClient from "@/utils/services/api-client";

export default async function LoginPage() {
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[1000px] flex h-[400px] max-md:flex-col max-md:h-screen">
        <CardHeader className="w-1/2 h-1/2 flex flex-col justify-center text-center mt-[30px] px-6 max-md:w-full max-md:h-fit">
          <CardTitle className="text-3xl font-bold mb-4">
            GENREPORT
          </CardTitle>
          <CardDescription className="text-lg">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <div className="w-1/2 self-center">
          <CardContent className="pt-6 px-6">
            <form>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="px-3 py-2"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="px-3 py-2"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm">Remember me</span>
                  </label>
                  <a
                    href="/reset-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 px-6">
            <Button className="w-full">Login</Button>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
