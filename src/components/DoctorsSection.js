import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, doctors } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegHospital } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export default function DoctorsSection({ isHome }) {
  const filter = isHome ? doctors.slice(0, 6) : doctors;
  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Doctors You Need</h1>
        {isHome ? (
          <Link href={"/doctors"}>
            <Button className={"h-auto w-auto text-xs"}>See All</Button>
          </Link>
        ) : (
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">
        {filter.map((doctor, ind) => (
          <Card key={doctor.name}>
            <CardHeader className={"flex flex-row px-4"}>
              <Avatar className={"self-center h-10 w-10"}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="pl-3">
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.category}</CardDescription>
              </div>
            </CardHeader>
            {!isHome && (
              <CardContent>
                <div className="flex justify-between items-center my-1">
                  <div className="flex items-center gap-1">
                    <span>{doctor.genderIcon}</span>
                    <h1 className="font-semibold text-[13px]">Gender</h1>
                  </div>
                  <h1 className="text-sm">{doctor.gender}</h1>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div className="flex items-center gap-1">
                    <span>{<FaRegHospital />}</span>
                    <h1 className="font-semibold text-[13px]">Hospital</h1>
                  </div>
                  <h1 className="text-sm">{doctor.hospital}</h1>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div className="flex items-center gap-1">
                    <span>{<IoMdTime />}</span>
                    <h1 className="font-semibold text-[13px]">
                      Appointment Time
                    </h1>
                  </div>
                  <h1 className="text-sm">{doctor.appointmentTime}</h1>
                </div>
              </CardContent>
            )}

            <CardFooter>
              {isHome ? (
                <Link href={"/doctors"}>
                  <Button className={"h-auto w-auto text-xs"}>
                    See Details
                  </Button>
                </Link>
              ) : (
                <Link href={`/doctors/${doctor.id}`}>
                  <Button className={"h-auto w-auto text-xs"}>
                    Book Appointment
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
