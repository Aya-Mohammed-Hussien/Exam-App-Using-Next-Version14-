import Image from "next/image";
import { FolderCode} from "lucide-react";
import NavigationLinks from "./_components/navigation-links";


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
        />
        {/* App Name */}
        <div className="flex items-center gap-3">
          <FolderCode className="w-8 h-8 text-blue-600" />
          <span className="font-semibold text-blue-600 text-xl">Exam App</span>
        </div>
      </div>

      {/* Navigation */}
      <NavigationLinks/>
    </aside>
  );
}
