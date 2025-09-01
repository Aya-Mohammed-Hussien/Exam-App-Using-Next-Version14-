import Link from "next/link";

export default function CreateAccoutnLink() {
  return (
    <Link
      href="/register"
      className="align-middle font-geist text-sm font-medium leading-[100%] tracking-normal text-blue-600"
    >
      <span className="text-gray-500">Don’t have an account?</span> Create yours
    </Link>
  );
}
