import AuthHeader from "@/components/shared/auth-header";

export default function AuthLayout({children,}: Readonly<{ children: React.ReactNode }>) {return (
      <div className="flex flex-row">
        <aside className="flex flex-1">
          <AuthHeader />
        </aside>
        <main className="flex flex-1 justify-center">{children}</main>
      </div>
  );
}
