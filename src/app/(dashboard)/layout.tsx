import Sidebar from "./sidebar/sidebar";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ms-[22.625rem]">

        {/* Breadcrumb */}
        <div className="p-4">
          <span className="font-normal font-geist text-gray-600 text-sm">
            Home
          </span>
        </div>
        
        <main>{children}</main>
      </div>
    </div>
  );
}
