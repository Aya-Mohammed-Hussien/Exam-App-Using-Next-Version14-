import { redirect } from "next/navigation";
import ArrowBack from "../_components/arrow-left";
import UpdatePasswordForm from "./_components/new-password-form";

export default function Page({searchParams,}: {searchParams: { email?: string };}) {
  const userEmail = searchParams.email??"";
  if (!userEmail) redirect("/forget-password")
  return (
    <section className="pt-72">
       <ArrowBack/>
      <h2 className="auth-heading pb-3">Create a New Password</h2>
      <p className="text-gray-500 font-geist text-base font-normal pb-10 leading-[100%] align-middle tracking-normal">
        Create a new strong password for your account.
      </p>
      <UpdatePasswordForm email ={userEmail}/>
    </section>
  );
}
