import { getServerSession } from "next-auth";
import ProfileForm from "./profile-data/_components/profile-form";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("session from server side", session);
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <ProfileForm userData={session} />
    </div>
  );
}
