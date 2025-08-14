import Sidebar from "./sidebar/sidebar";


export default function HomeLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
   <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
