'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with Appwrite and create plaid token

      if (type === "sign-up") {
        router.push("/");
      }

      if (type === "sign-in") {
        router.push("/");
      }

     
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form max-w-md mx-auto mt-10 px-4 sm:px-6 md:px-8">
      <header className="flex flex-col items-center gap-8 mb-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={40}
            height={40}
            alt="Kharcha logo"
          />
          <h1 className="text-3xl font-bold text-gray-900 font-ibm-plex-serif">
            Kharcha
          </h1>
        </Link>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
            {user ? "Link Account" : type === "sign-in" ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-gray-600">
            {user
              ? "Link your account to get started"
              : type === "sign-in"
              ? "Please enter your details to sign in"
              : "Fill in the information below to create your account"}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {type === "sign-up" && (
                <CustomInput
                  control={form.control}
                  name="name"
                  label="Name"
                  placeholder="Enter your full name"
                />
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email address"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />

              <Button
                className="w-full py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </Form>

          <footer className="mt-8 text-center">
            <p className="text-gray-600">
              {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
              <Link
                href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                className="text-primary font-semibold ml-1 hover:underline"
              >
                {type === "sign-in" ? "Sign Up" : "Sign In"}
              </Link>
            </p>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;