import { GraduationCap } from "lucide-react";
import DiplomasList from "./diplomas/_components/DiplomasList";

export default function Page() {
  return (       
        <section className="p-6">
          <header className="bg-blue-600 text-white p-4 flex items-center gap-4">
            <GraduationCap size={45} strokeWidth={1.2} />
            <h1 className="font-semibold text-3xl align-middle font-inter">Diplomas</h1>
          </header>
          <DiplomasList/>
        </section>
  );
}
