import { redirect } from "next/navigation";
import { getRequest } from "@/actions/request";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaRegHospital } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { auth } from "../../../../auth";
import { doctors } from "@/lib/data";
import Image from "next/image";
import { Eye } from "lucide-react";

import DoctorDetailSheet from "@/components/DoctorDetailSheet";
import RequestSection from "@/components/RequestSection";
export default async function Requests() {
  const session = await auth();
  if (!session && session?.user?.role != "admin") redirect("/");

  const { requests } = await getRequest();
  console.log("SeeRequester=>", requests);
  console.log("session=>", session);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-3">{`Doctor's`} Requests</h1>
      <RequestSection session={session} requests={requests} />
    </div>
  );
}
