"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot, WeeButton } from "@/components";
import CommonModal from "@/components/CommonModel/CommonModal";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import {
  useEmailVerifyRequestMutation,
  useVerifyOtpMutation,
} from "@/redux/features/auth/authApi";
import { TApiErrorMessage, TApiErrorResponse } from "@/types";
import { useState } from "react";

const VerifyEmail = () => {
  const [verifyEmailRequestFN, { isLoading }] = useEmailVerifyRequestMutation();
  const [verifyEmailFn, { isLoading: submissionLoading }] =
    useVerifyOtpMutation();

  const [otpInput, setOtpInput] = useState("");
  const [errors, setErrors] = useState<TApiErrorMessage[] | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(false);
  };
  const handleEmailVerifyReq = async () => {
    setOpen(true);
    try {
      await verifyEmailRequestFN({}).unwrap();
    } catch (err) {
      const error = err as TApiErrorResponse;
      setErrors(error?.data?.errorMessages);
    }
  };

  const handleOtpSubmission = async () => {
    setErrors(null);
    if (otpInput.length !== 6)
      return setErrors([{ path: "", message: "Provide valid otp" }]);

    try {
      await verifyEmailFn({ otp: otpInput }).unwrap();
      setOpen(false);
    } catch (err) {
      const error = err as TApiErrorResponse;
      setErrors(error?.data?.errorMessages);
    }
  };

  return (
    <div>
      <h4 className="font-semibold text-center">
        Please verify your email to enjoy full features!
        <WeeButton onClick={() => handleEmailVerifyReq()} variant={"link"}>
          Click to verify
        </WeeButton>
      </h4>
      <CommonModal
        open={open}
        handleOpen={handleOpen}
        modalTitle="Verify your email"
        isCloseOnOutsideClick={true}
      >
        {isLoading ? (
          <>Sending email...</>
        ) : (
          <>
            <h4 className="text-sm">
              Please check your inbox and provide the otp
            </h4>
            <div className="flex justify-center">
              <InputOTP maxLength={6} onChange={(e) => setOtpInput(e)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {errors?.length ? (
              <>
                <ul className="list-disc error-message ml-5">
                  {errors.map((error) => (
                    <li key={error.message}>
                      <ErrorMessage>{error?.message}</ErrorMessage>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <></>
            )}

            <div className="flex justify-center">
              <WeeButton
                onClick={handleOtpSubmission}
                loading={submissionLoading}
              >
                Submit
              </WeeButton>
            </div>
          </>
        )}
      </CommonModal>
    </div>
  );
};

export default VerifyEmail;
