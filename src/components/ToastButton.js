"use client";

import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { Button } from "./ui/button";

export default function ToastButton() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          variant: "destructive",
          title: "You can't Apply as Doctor",
          description: "To Apply as Doctor please login your account first",
        });
      }}
    >
      Apply as Doctor
    </Button>
  );
}
