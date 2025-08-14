import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";
import ExamAppName from "./exam-app-name";

export default function AuthHeader() {
  return (
    <header className="relative overflow-hidden p-28 flex flex-col justify-center items-start gap-[8.5rem]">
     
     {/* First Circle */}
      <div className="absolute top-14 -right-10 w-96 h-96 bg-blue-200 rounded-full opacity-75 blur-3xl z-0"></div>
    
     {/* Second Circle */}
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-75 blur-3xl z-0"></div>
      
      <ExamAppName />
      <section className="flex flex-col justify-center items-start gap-16 relative z-10 h-[47rem]">
        <h2 className="font-inter font-bold text-3xl align-middle text-gray-800">
          Empower your learning journey with our smart exam platform.
        </h2>
        <ul className="flex flex-col gap-9">

          <li className="flex gap-5 ">
            {/* Icon 1  */}
            <div className="border-2 border-blue-600 w-9 h-9 items-center justify-center flex">
              <Brain size={24} color="#2563eb"/>
            </div>

            {/* Description1  */}
            <div className="flex flex-col gap-2">
              <span className="auth-hero">Tailored Diplomas</span>
              <p className="auth-hero-description">
                Choose from specialized tracks like Frontend, Backend, and
                Mobile Development.
              </p>
            </div>
          </li>

          <li className="flex gap-5 ">
            {/* Icon 2  */}
            <div className="border-2 border-blue-600 w-9 h-9 items-center justify-center flex">
              <BookOpenCheck size={24} color="#2563eb" />
            </div>

            {/* Description2  */}
            <div className="flex flex-col gap-2">
              <span className="auth-hero">Focused Exams</span>
              <p className="auth-hero-description">
                Access topic-specific tests including HTML, CSS, JavaScript, and more.
              </p>
            </div>
          </li>

          <li className="flex gap-5 ">
            {/* Icon 3  */}
            <div className="border-2 border-blue-600 w-9 h-9 items-center justify-center flex">
              <RectangleEllipsis size={24} color="#2563eb"/>
            </div>

            {/* Description3  */}
            <div className="flex flex-col gap-2">
              <span className="auth-hero">Smart Multi-Step Forms</span>
              <p className="auth-hero-description">
                Choose from specialized tracks like Frontend, Backend, and Mobile Development.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </header>
  );
}
