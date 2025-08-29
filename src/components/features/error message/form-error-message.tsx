import { CircleX } from "lucide-react";

type FormErrorMessageProps = {
error? : {message : string} | null;
}
export default function FormErrorMessage({ error} : FormErrorMessageProps) {
  return(
  <>
    {error && (
      <div className="relative mb-9 flex w-full items-center justify-center border-[0.0625rem] border-red-600 bg-red-50 py-3">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white text-red-600">
          <CircleX size={18} />
        </div>
        <p className="text-center font-geist text-sm font-normal text-red-600">
          {error.message}
        </p>
      </div>
    )}
  </>
  )

}
