import { redirect } from "next/navigation";
import ArrowBack from "./_components/arrow-left";
import VerifyForm from "./_components/verify-OTP-form";


export default function Page({searchParams,}: {searchParams: { email?: string };}) {
  const userEmail = searchParams.email??"";
  if (!userEmail) redirect("/forget-password")
  return (
    <section className="w-[28.25rem] pt-72">
      <ArrowBack />
      <h2 className="auth-heading pb-3">Verify OTP</h2>
      <p className="pb-10 align-middle font-geist text-base font-normal leading-[100%] tracking-normal text-gray-500">
        Please enter the 6-digits code we have sent to:
        <span className="inline-block text-black">
          {searchParams.email ?? "user@example.com."}
        </span>
      </p>
      <VerifyForm email= {userEmail} />
    </section>
  );
}
