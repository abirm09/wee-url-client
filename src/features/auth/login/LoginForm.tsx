"use client";
import { Input, WeeButton } from "@/components";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setAuth } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  TApiErrorMessage,
  TApiErrorResponse,
  TApiSuccessResponse,
  TAuthUser,
} from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useRouter } from "next/navigation";

const passwordValidatorRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*]).{8,}$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid email.")
    .min(5, "Email must be 5 character or long.")
    .max(50, "Email can't be greater than 50 character."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      passwordValidatorRegex,
      "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a digit, and a special character (@, #, $, %, &, *)."
    ),
});

const LoginForm = ({ callBackPath }: { callBackPath: string }) => {
  const router = useRouter();
  const passwordElemRef = useRef<HTMLDivElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [serverErrorMessages, setServerErrorMessages] = useState<
    TApiErrorMessage[]
  >([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    setServerErrorMessages([]);
    try {
      const res = (await login(data).unwrap()) as TApiSuccessResponse<{
        token: string;
      }>;
      const user = jwtDecode(res.data.token) as TAuthUser;
      dispatch(
        setAuth({ user: user, isLoading: false, token: res.data.token })
      );

      router.push(callBackPath);
    } catch (err) {
      const error = err as TApiErrorResponse;
      setServerErrorMessages(error.data.errorMessages);
    }
  });
  const handlePasswordFieldFocus = () => {
    if (passwordElemRef.current) {
      passwordElemRef.current.classList.add("outline-primary-subtle");
      passwordElemRef.current.classList.remove("outline-gray-400");
    }
  };
  const handlePasswordFieldBlur = () => {
    if (passwordElemRef.current) {
      passwordElemRef.current.classList.remove("outline-primary-subtle");
      passwordElemRef.current.classList.add("outline-gray-400");
    }
    setShowPassword(false);
  };
  return (
    <>
      <div className="max-w-md mx-auto ">
        <div>
          <h3 className="text-2xl font-semibold text-primary bg-info-subtle text-center">
            Hello again!
          </h3>
          <p className="text-center text-sm">
            Don&lsquo;t share your password with anybody.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-5 w-full mt-5">
          <div>
            <Input
              {...register("email")}
              placeholder="Email"
              autoComplete="email"
              id="login-email-input"
            />
            {errors.email ? (
              <>
                <ErrorMessage className="ml-2">
                  {errors.email.message}
                </ErrorMessage>
              </>
            ) : null}
          </div>
          <div>
            <div
              className="outline outline-2 outline-gray-400 rounded-md overflow-hidden grid grid-cols-10 mb-[2px]"
              ref={passwordElemRef}
            >
              <Input
                {...register("password")}
                type={`${showPassword ? "text" : "password"}`}
                id="login-password-input"
                placeholder="Password"
                className="focus-visible:outline-0 outline-0 border-0 ring-0 shadow-none col-span-9 mt-[-1px]"
                onFocus={handlePasswordFieldFocus}
                onBlur={handlePasswordFieldBlur}
              />
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            {errors.password ? (
              <>
                <ErrorMessage className="ml-2">
                  {errors.password.message}
                </ErrorMessage>
              </>
            ) : null}
          </div>
          <div className="text-right">
            <Link
              href={`/forget-password`}
              className="underline text-primary hover:text-primary-subtle font-semibold"
            >
              Forget password
            </Link>
          </div>
          {serverErrorMessages ? (
            <>
              <ul className="list-disc">
                {serverErrorMessages.map((serverErrorMessage) => (
                  <li
                    key={serverErrorMessage.message}
                    className="error-message ml-5"
                  >
                    <ErrorMessage>{serverErrorMessage.message}</ErrorMessage>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <WeeButton
            type="submit"
            className="w-full"
            loading={isLoading}
            loadingClassName="w-full"
            loadingElement="Login..."
          >
            Login
          </WeeButton>
        </form>
        <div className="flex gap-2 justify-center mt-5">
          <p className="text-gray-700">Don&apos;t have an account yet?</p>
          <Link
            href={`/auth/signup`}
            className="underline text-primary hover:text-primary-subtle font-semibold"
          >
            Register now
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
