import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Homepage
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
