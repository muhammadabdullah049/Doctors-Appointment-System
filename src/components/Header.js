import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

export default function Header() {
  const session = null;
  return (
    <div className="bg-secondary py-1">
      <div className="flex container mx-auto justify-between p-2">
        <h1 className="font-bold font-mono text-xl">LOGO</h1>
        {session ? (
          <Menubar className={"border-none bg-secondary"}>
            <MenubarMenu>
              <MenubarTrigger
                className={
                  "bg-secondary border-none outline-none overflow-hidden"
                }
              >
                <Avatar className={"cursor-pointer"}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
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
          <Button variant="outline" className={"w-auto text-sm"}>
            <Popover>
              <PopoverTrigger>Login</PopoverTrigger>
              <PopoverContent className={"bg-transparent border-none outline-none shadow-none"}>
                <Button className={"w-full text-sm"}>
                  <b className="text-xl">G</b> Continue with Google
                </Button>
              </PopoverContent>
            </Popover>
          </Button>
        )}
      </div>
    </div>
  );
}
