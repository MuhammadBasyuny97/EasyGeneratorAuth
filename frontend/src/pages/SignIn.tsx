import { Link, useNavigate } from "react-router-dom";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../components/Input";
import InputError from "../components/InputError";
import { signinSchema, type ISignin } from "../validation/authSignin";
import { Logo } from "../components/Logo";
import { Submit } from "../components/Submit";
import { useUserStore } from "../stores/userStore";

export default function SignIn() {
  const { signin } = useUserStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ISignin>({
    mode: "onChange",
    resolver: zodResolver(signinSchema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ISignin> = async ({ email, password }) => {
    const user = { email, password };
    const res = await signin(user);
    reset();
    console.log("Response from Login", res);

    if (localStorage.getItem("checkingAuth") === "true") {
      navigate("/");
    }
    console.log("Response", res);
  };

  const signinInputs = [
    {
      type: "email",
      name: "Email",
      placeholder: "Enter Your Email Address",
      register: register("email"),
      error: errors.email,
    },

    {
      type: "password",
      name: "Password",
      placeholder: "Enter Password",
      register: register("password"),
      error: errors.password,
    },
  ];
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Logo header={"Sign in to your account"} />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {signinInputs.map((input) => (
              <div key={input.name}>
                <Input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  register={input.register}
                />
                <InputError error={input.error} />
              </div>
            ))}

            <div className="text-sm flex justify-end">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <Submit text={"Sign in"} />
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to={"/signup"}
              className="font-semibold text-indigo-600 cursor-pointer hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
