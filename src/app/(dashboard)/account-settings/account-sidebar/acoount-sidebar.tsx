import AccountSettingsNavigationLinks from "./_components/account-navigation-links";
import LogoutButton from "@/components/shared/logout-button";

export default function AccountSidebar() {
  return (
    /* Account Settings Sidebar */
    <aside className="flex flex-col ml-6 p-6 bg-white min-h-screen mb-6 justify-between w-72">
       <AccountSettingsNavigationLinks/>
       <LogoutButton size={24} className="bg-red-50 px-4 py-3 text-base"/> 
    </aside>
  );
}
