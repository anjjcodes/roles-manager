import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen p-3">
      <div className="w-full h-full flex flex-col items-center justify-center py-2 border gap-3">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-7xl font-bold">Roles Manager</h1>
          <p className="text-xl text-gray-600">
            Manage user roles and permissions
          </p>
        </div>
        <Link href={"/sigin"}>
          <Button>Let&apos;s Go</Button>
        </Link>
      </div>
    </div>
  );
}
