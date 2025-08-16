import ForgetPasswordForm from "./_components/forget-password-form";

export default function Page() {
  return (
    <section className="py-36">
      <h2 className="auth-heading pb-3">Forgot Password</h2>
      <p className="text-gray-500 font-geist text-base font-normal pb-10 leading-[100%] align-middle tracking-normal">
        Don’t worry, we will help you recover your<span className="block">account.</span>
      </p>
      <ForgetPasswordForm />
    </section>
  );
}
