"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

const SignUpPage = () => {

    const router =useRouter();




  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, image, email, password });

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({data,error})


     if(error){
toast.error( "Signup failed!"+" "+error.message );

};

if(data){
    toast.success('Signup successFull')
    router.push('/')
}

  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-12 text-white">
      <Card className="w-full max-w-md border border-white/10 bg-white/5 p-8 shadow-2xl shadow-pink-500/10 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black">
            Create Account<span className="text-pink-500">.</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Join Artiva and start creating AI artworks.
          </p>
        </div>

        {/* Form */}
        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label className="text-gray-300">Name</Label>
            <Input
              placeholder="Enter your name"
              className="border-white/10 bg-black/40 text-white"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label className="text-gray-300">Image URL</Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="border-white/10 bg-black/40 text-white"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-300">Email</Label>
            <Input
              placeholder="john@example.com"
              className="border-white/10 bg-black/40 text-white"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Password must contain at least one number";
              return null;
            }}
          >
            <Label className="text-gray-300">Password</Label>
            <Input
              placeholder="Enter your password"
              className="border-white/10 bg-black/40 text-white"
            />
            <Description className="text-xs text-gray-500">
              Must be 8+ characters with 1 uppercase and 1 number.
            </Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="mt-2 flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-pink-500 to-violet-600 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
            >
              <Check />
              Sign Up
            </Button>

            <Button
              type="reset"
              variant="bordered"
              className="border-white/15 text-white"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/signin" className="font-semibold text-pink-400">
            Sign In
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default SignUpPage;
