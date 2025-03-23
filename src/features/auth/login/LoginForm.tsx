"use client";

import { Input, WeeButton } from "@/components";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setAuth } from "@/redux/features/auth/authSlice";
import { useProfileQuery } from "@/redux/features/user/userApi";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TApiErrorResponse, TAuthUser } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const passwordValidatorRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*]).{8,}$/;

const schema = yup.object().shape({
  email: yup.string().required("Email is required.").email("Invalid email."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      passwordValidatorRegex,
      "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a digit, and a special character."
    ),
});

const LoginForm = ({ callbackPath }: { callbackPath: string }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  const [loggedInSuccessful, setLoggedInSuccessful] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const { data: profileData, isSuccess: isProfileLoadSuccess } =
    useProfileQuery({}, { skip: !loggedInSuccessful });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (isProfileLoadSuccess && profileData?.data) {
      dispatch(setUser(profileData.data));
    }
  }, [isProfileLoadSuccess, profileData, dispatch]);

  const onSubmit = handleSubmit(async (data) => {
    setServerErrorMessages([]);
    try {
      const res = await login(data).unwrap();
      const user = jwtDecode<TAuthUser>(res?.data?.token);
      dispatch(setUser(res?.data?.profile));
      dispatch(
        setAuth({
          user,
          token: res.data.token,
          isLoading: false,
        })
      );
      setLoggedInSuccessful(true);
      router.push(callbackPath);
    } catch (err) {
      const error = err as TApiErrorResponse;
      setServerErrorMessages(error.data.errorMessages.map((e) => e.message));
    }
  });

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-primary text-center">
        Hello again!
      </h3>
      <p className="text-center text-sm">
        Don&apos;t share your password with anybody.
      </p>

      <form onSubmit={onSubmit} className="space-y-5 mt-5">
        {/* Email Input */}
        <div>
          <Input
            {...register("email")}
            placeholder="Email"
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        {/* Password Input */}
        <div
          className={`outline outline-2 ${
            isPasswordFocused ? "outline-primary" : "outline-gray-400"
          } rounded-md overflow-hidden`}
        >
          <div className="flex items-center">
            <Input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              className="flex-grow outline-0 border-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="p-2"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        {/* Forgot Password */}
        <div className="text-right font-semibold text-sm">
          <Link
            href="/auth/forget-password"
            className="text-primary underline text-sm"
          >
            Forgot password?
          </Link>
        </div>

        {/* Server Error Messages */}
        {serverErrorMessages.length > 0 && (
          <ul className="list-disc pl-5">
            {serverErrorMessages.map((message, index) => (
              <li key={index}>
                <ErrorMessage>{message}</ErrorMessage>
              </li>
            ))}
          </ul>
        )}

        {/* Submit Button */}
        <WeeButton
          type="submit"
          loading={isLoading}
          className="w-full"
          loadingClassName="w-full"
          loadingElement="Login..."
        >
          Login
        </WeeButton>
      </form>

      {/* Register Section */}
      <div className="flex justify-center mt-5 font-semibold text-sm">
        <p className="text-gray-700">Don&apos;t have an account yet?</p>
        <Link href="/auth/signup" className="text-primary underline ml-1">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
