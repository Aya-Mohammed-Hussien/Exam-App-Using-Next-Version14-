import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "mt-2 flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-4 align-middle font-geist text-sm font-normal leading-[100%] text-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:border-blue-600 focus:text-black focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          error && "border-red-600 focus:border-red-600",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
