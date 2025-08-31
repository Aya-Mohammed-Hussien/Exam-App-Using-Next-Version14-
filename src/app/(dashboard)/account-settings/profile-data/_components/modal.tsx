"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoaderCircle, TriangleAlert } from "lucide-react";
import UseDeleteAccount from "../_hooks/use-delete";
import { signOut } from "next-auth/react";

export default function DeleteModal() {
  // Mutations
  const { isPending, error, deleteAccount } = UseDeleteAccount();

  // Function
  const deleteUser = async () => {
    try {
      await deleteAccount(); 
      signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-full bg-red-50 align-middle font-geist text-sm font-medium text-red-600"
        >
          Delete My Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-red-50">
            <DialogTitle>
              <TriangleAlert size={50} color="#DC2626" strokeWidth={1.2} />
            </DialogTitle>
          </div>
          <DialogDescription>
            Are you sure you want to delete your account?
          </DialogDescription>
          <span className="mb-9 mt-3 font-geist text-sm font-normal text-gray-500">
            This action is permanent and cannot be undone.
          </span>
        </DialogHeader>
        {/* Footer */}
        <DialogFooter>
          {/* Cancel Button */}
          <DialogClose asChild>
            <Button
              type="button"
              className="w-full bg-gray-200 font-geist text-sm font-medium text-gray-800"
            >
              Cancel
            </Button>
          </DialogClose>

          {/* Delete Button */}
          <Button
            disabled={isPending}
            onClick={deleteUser}
            type="submit"
            className="w-full bg-red-600 font-geist text-sm font-medium text-white"
          >
            {isPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Yes, delete"
            )}
          </Button>
        </DialogFooter>
        {/* error */}{" "}
        {error && (
          <p className="mx-auto mb-2 w-[90%] bg-red-100 text-center text-sm text-red-600">
            {error.message}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
