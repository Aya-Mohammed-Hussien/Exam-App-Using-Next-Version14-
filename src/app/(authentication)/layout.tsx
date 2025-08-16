import AuthHeader from "@/components/shared/auth-header";

export default function AuthLayout({children,}: Readonly<{ children: React.ReactNode }>) {return (
      <div className="flex flex-row">
        <aside className="w-1/2">
          <AuthHeader />
        </aside>
        <main className="flex w-1/2 justify-center">{children}</main>
      </div>
  );
}
