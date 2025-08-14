import AuthHeader from "@/components/shared/auth-header";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-row">
        <div className="flex flex-1">
          <AuthHeader />
        </div>

        <main className="flex flex-1 justify-center">{children}</main>
      </body>
    </html>
  );
}
