import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound(){
  return (
     <div className="flex h-screen flex-col items-center justify-center text-center font-geist bg-blue-50">
      <h1 className="text-4xl font-bold">404 – Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="mt-6">
        <Button variant={"outline"}>Go Back Home</Button>
      </Link>
    </div>
  )
}
