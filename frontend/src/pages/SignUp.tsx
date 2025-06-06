import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../components/Input";
import InputError from "../components/InputError";
import { signupSchema, type ISignup } from "../validation/authSignup";
import { signupInputs } from "../utils/signupInputs";
import { Logo } from "../components/Logo";
import { Submit } from "../components/Submit";
import { useUserStore } from "../stores/userStore";
import { use } from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ISignup>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });

  const { signup, token } = useUserStore();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ISignup> = async ({
    email,
    name,
    password,
  }) => {
    const user = { email, name, password };
    const res = await signup(user);
    if (localStorage.getItem("checkingAuth") === "true") {
      navigate("/");
    }
    console.log("Response", res);
    reset();
  };

  const signupInputs = [
    {
      type: "email",
      name: "Email",
      placeholder: "Enter Your Email Address",
      register: register("email"),
      error: errors.email,
    },
    {
      type: "text",
      name: "Full Name",
      placeholder: "Enter Your Full Name",
      register: register("name"),
      error: errors.name,
    },
    {
      type: "password",
      name: "Password",
      placeholder: "Enter Password",
      register: register("password"),
      error: errors.password,
    },
    {
      type: "password",
      name: "Confirm Password",
      placeholder: "Confirm Password",
      register: register("confirmPassword"),
      error: errors.confirmPassword,
    },
  ];

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Logo header="Create Your Account" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            method="POST"
            className="space-y-6"
          >
            {signupInputs.map((input) => (
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

            <Submit text="Sign Up" />
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Is a member{" "}
            <Link
              to={"/signin"}
              className="font-semibold text-indigo-600  hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
