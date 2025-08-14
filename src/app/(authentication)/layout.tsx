import AuthHeader from "@/components/shared/auth-header";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-row justify-center items-center">
        <AuthHeader />
        {children}
      </body>
    </html>
  );
}
