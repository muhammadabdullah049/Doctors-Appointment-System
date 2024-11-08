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
import { auth } from "../../auth";
import SignInToggle from "./SigninToggle";
import Image from "next/image";

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
                    src={session?.user?.image}
                    height={30}
                    width={30}
                    className="rounded-full cursor-pointer"
                  />
                </MenubarTrigger>
                <MenubarContent>
                  <Link href={"/profile"}>
                    <MenubarItem>Profile</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href={"/appointments"}>
                    <MenubarItem>My Appointments</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <MenubarItem>Logout</MenubarItem>
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
