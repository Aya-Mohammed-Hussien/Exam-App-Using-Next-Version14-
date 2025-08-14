import { ChevronsLeftRight, FolderCode } from "lucide-react";


export default function ExamAppName() {
  return (
        <div className="flex items-center gap-3">
           <div className="relative">
            <FolderCode size={30} className=" fill-blue-600 text-transparent" />
            <ChevronsLeftRight className="absolute w-4 h-4 inset-0 top-[8%] m-auto text-white" />
           </div> 
          <span className="font-semibold text-blue-600 text-xl font-geist align-middle">Exam App</span>
        </div>
  )
}
