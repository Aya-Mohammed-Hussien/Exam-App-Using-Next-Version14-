import Link from "next/link";
import AccountSidebar from "./account-sidebar/acoount-sidebar";
import { ChevronLeft, UserRound } from "lucide-react";

export default function AccountSettingsLayout({
  children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-50">
      <section className="p-6 flex gap-3">
        <Link
          href="/"
          className="flex justify-center items-center border-blue-600 border-2">
          <ChevronLeft color="#2563eb" size={24} />
        </Link>
        <header className="bg-blue-600 text-white p-4 flex items-center gap-4 flex-1">
          <UserRound size={45} strokeWidth={1.2} />
          <h1 className="font-semibold text-3xl align-middle font-inter">
            Account Settings
          </h1>
        </header>
      </section>

      <div className="flex min-h-screen">
        <AccountSidebar />
        {children}
      </div>
    </div>
  );
}
