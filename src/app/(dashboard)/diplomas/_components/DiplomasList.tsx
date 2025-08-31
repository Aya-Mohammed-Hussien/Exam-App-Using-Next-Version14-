import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getDiplomas } from "@/lib/apis/diplomas.api";
import Image from "next/image";

export default async function DiplomasList() {
  const data = await getDiplomas();
  return (
    <div className="mt-6 grid grid-cols-3 gap-2">
      {data?.map((diploma) => (
        <Card key={diploma._id} className="relative overflow-hidden rounded-none h-[28rem]">
          <Image
            src={diploma.icon}
            alt={diploma.name}
            className="object-cover"
            fill
          />
          <CardHeader className="absolute bg-[rgba(21,93,252,0.5)] backdrop-blur-sm bottom-0 left-0 right-0 m-3 p-0 h-14 flex justify-center">
            <CardTitle className="font-geist text-xl font-semibold text-white text-left leading-[100%] tracking-normal ps-4 py-5">
              {diploma.name}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
