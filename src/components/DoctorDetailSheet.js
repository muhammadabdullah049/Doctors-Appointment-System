import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import {
  Briefcase,
  Clock4,
  DollarSign,
  EyeIcon,
  GraduationCap,
  HospitalIcon,
  MapPin,
  Phone,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function DoctorDetailSheet({ session, requests }) {
  return (
    <Sheet>
      <SheetTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <EyeIcon className="h-5 w-5" />
            </TooltipTrigger>
            <TooltipContent className={"w-auto h-auto"}>
              <p>See Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Doctor {"'"} s Details</SheetTitle>
          <SheetDescription>
            <div className="flex items-center justify-center">
              <Avatar className={"h-14 w-14"}>
                <Image fill={true} src={session.user.image} alt="User Image" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="flex items-center justify-center font-semibold text-xl mt-1">
              {session.user.name}
            </h1>
          </SheetDescription>
          <hr className="h-[0.5px] bg-[#e2e2e2] border-none" />
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Specialization :{" "}
              </span>
              {requests.specialization}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Degree :{" "}
              </span>
              {requests.degree}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Experience :{" "}
              </span>
              {requests.experience}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <HospitalIcon className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Hospital :{" "}
              </span>
              {requests.hospital}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Address :{" "}
              </span>
              {requests.address}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Number :{" "}
              </span>
              {requests.number}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock4 className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                AppointmentTime :{" "}
              </span>
              {requests.appointmentTime}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Fees :{" "}
              </span>
              {requests.fees}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-gray-500" />
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Status :{" "}
              </span>
              {requests.status}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
              <span className="font-semibold text-black dark:text-white">
                Bio :{" "}
              </span>
              {requests.bio}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
