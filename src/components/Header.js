import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import { auth, signOut } from "../../auth";
import SignInToggle from "./SigninToggle";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdLogout } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

export default async function Header() {
  const session = await auth();
  console.log("session in header=>", session);
  return (
    <div className="bg-secondary dark:bg-primary-foreground py-1">
      <div className="flex container mx-auto justify-between p-2">
        <h1 className="flex items-center font-bold font-mono text-xl">LOGO</h1>
        <div className="flex justify-center items-center gap-2">
          {session ? (
            <Menubar
              className={"border-none bg-secondary dark:bg-primary-foreground"}
            >
              <MenubarMenu>
                <MenubarTrigger
                  className={
                    "bg-secondary dark:bg-primary-foreground border-none outline-none overflow-hidden"
                  }
                >
                  <Image
                    alt="image"
                    src={session?.user?.image}
                    height={30}
                    width={30}
                    className="rounded-full cursor-pointer"
                  />
                </MenubarTrigger>
                <MenubarContent>
                  <Link href={"/profile"}>
                    <Button variant="outline" className="border-none w-full">
                      Profile
                      <CgProfile />
                    </Button>
                  </Link>
                  <MenubarSeparator />
                  <Link href={"/appointments"}>
                    <Button variant="outline" className="border-none w-full">
                      My Appointments
                      <GiNotebook />
                    </Button>
                  </Link>
                  <MenubarSeparator />
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <Button variant="outline" className="border-none w-full">
                      Logout
                      <MdLogout />
                    </Button>
                  </form>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ) : (
            <SignInToggle />
          )}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
