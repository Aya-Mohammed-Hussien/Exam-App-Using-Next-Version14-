import { getServerSession } from "next-auth";
import ProfileForm from "./_components/profile-form";
import { authOptions } from "@/auth";

export default async function Page() {
  const session = await getServerSession(authOptions)
  return (
    <div> 
      <ProfileForm userData={session}/>
    </div>
  )
}
