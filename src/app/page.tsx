import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="ms-[22.625rem]">
      <div className="p-4">
        <h4 className="font-normal font-geist text-gray-400 text-sm align-middle">Home</h4>
      </div>
      <div className="p-6">
        <header className="bg-blue-600 text-white p-4 flex items-center gap-4">
          <GraduationCap size={45} strokeWidth={1.2} />
          <h1 className="font-semibold text-3xl align-middle font-inter">Diplomas</h1>
        </header>
      </div>
    </main>
  );
}
