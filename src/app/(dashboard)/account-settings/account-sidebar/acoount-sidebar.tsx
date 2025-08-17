
import AccountSettingsNavigationLinks from "./_components/account-navigation-links";
import { LogOut } from "lucide-react";

export default function AccountSidebar() {
  return (
    /* Account Settings Sidebar */
    <aside className="flex flex-col ml-6 p-6 bg-white min-h-screen mb-6 justify-between w-72">
       <AccountSettingsNavigationLinks/>
        <button className=" text-red-600 items-center gap-2 bg-red-50 px-4 py-3 flex justify-start">
            <LogOut size={24} style={{ transform: "rotate(180deg)" }} strokeWidth={1.2} />
             <span className="font-geist text-base font-normal align-middle">Logout</span>
          </button>
    </aside>
  );
}
