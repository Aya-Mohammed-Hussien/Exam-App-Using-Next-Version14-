
import AccountSettingsNavigationLinks from "./_components/account-navigation-links";
import { LogOut } from "lucide-react";

export default function AccountSidebar() {
  return (
    /* Account Settings Sidebar */
    <aside className="flex flex-col fixed top-44 left-96 p-6 bg-white h-[calc(100vh-12.5rem)] justify-between">
       <AccountSettingsNavigationLinks/>
        <button className=" text-red-600 items-center gap-2 bg-red-50 px-4 py-3 flex justify-start">
            <LogOut size={24} style={{ transform: "rotate(180deg)" }} strokeWidth={1.2} />
             <span className="font-geist text-base font-normal align-middle">Logout</span>
          </button>
    </aside>
  );
}
