import Image from "next/image";
import {ChevronsLeftRight,  FolderCode} from "lucide-react";
import NavigationLinks from "./_components/navigation-links";
import DropDownMenu from "./_components/dropdown-menu";



export default function Sidebar() {
 
  return (
    /* Sidebar */
    <aside className="flex flex-col bg-blue-50 w-[22.625rem] p-10 gap-[3.75rem] min-h-screen fixed top-0 left-0">
      {/* Logo */}
      <div className="flex flex-col gap-3">
        <Image
          src="/assets/images/logo.png"
          alt="Elevate Exam App Logo"
          width={192}
          height={37}
          className= "brightness-[0.3]"
        />

        {/* App Name */}
        <div className="flex items-center gap-3">
           <div className="relative">
            <FolderCode size={30} className=" fill-blue-600 text-white" />
            <ChevronsLeftRight className="absolute w-4 h-4 inset-0 top-[8%] m-auto text-white" />
           </div> 
          <span className="font-semibold text-blue-600 text-xl font-geist align-middle">Exam App</span>
        </div>
      </div>

       {/* Navigation & UserData */}
      <div className="flex flex-col justify-between flex-1">
        {/* Navigation */}
        <NavigationLinks/>

        {/* User Data / DropDown Menu */}
        <div className="flex flex-row items-center justify-between">
          <Image
          src="/assets/images/cb9358d489b7d9a2fbcfd109b058718b5287b696.jpg"
          alt="Elevate Exam App Profile Picture"
          width={54}
          height={54}
          className="border-2 border-blue-600 w-14 h-14 object-cover"
        />

        {/* Username & Email */}
        <div className="flex flex-col">
          <span className="font-geist text-base font-medium align-middle text-blue-600">Firstname</span>
          <span className="font-geist text-sm font-normal align-middle text-gray-500">user-email@example.com</span>
        </div>
        
        {/* DropDown Menu */}
        <DropDownMenu/>
        </div>
      </div>
    </aside>
  );
}




          