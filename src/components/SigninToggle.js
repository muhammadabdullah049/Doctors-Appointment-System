import { redirect } from "next/navigation";
import { auth, signIn } from "../../auth";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default async function SignInToggle() {
    const session = await auth();
    if(session) redirect('')
  return (
    <Button variant="outline" className={"w-auto h-9 text-sm"}>
      <Popover>
        <PopoverTrigger>Login</PopoverTrigger>
        <PopoverContent
          className={"bg-transparent border-none outline-none shadow-none"}
        >
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button className={"w-full text-sm"}>
              <b className="text-xl">G</b> Continue with Google
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </Button>
  );
}
