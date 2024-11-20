// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Button } from "./ui/button";

// export default function DoctorRequests({ requests }) {
//   console.log("requester=>", requests);
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {requests.map((request) => {
//         <Card key={request._id}>
//           <CardHeader className={"flex flex-row px-4"}>
//             <Avatar className={"self-center h-10 w-10"}>
//               <AvatarImage src={request.user.image} />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <div className="pl-3">
//               <CardTitle>{request.user.name}</CardTitle>
//               <CardDescription>{request.status}</CardDescription>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="flex justify-between items-center my-1">
//               <div className="flex items-center gap-1">
//                 <span>{doctor.genderIcon}</span>
//                 <h1 className="font-semibold text-[13px]">Gender</h1>
//               </div>
//               <h1 className="text-sm">{request.gender}</h1>
//             </div>
//             <div className="flex justify-between items-center my-1">
//               <div className="flex items-center gap-1">
//                 <span>{<FaRegHospital />}</span>
//                 <h1 className="font-semibold text-[13px]">Hospital</h1>
//               </div>
//               <h1 className="text-sm">{request.hospital}</h1>
//             </div>
//             <div className="flex justify-between items-center my-1">
//               <div className="flex items-center gap-1">
//                 <span>{<IoMdTime />}</span>
//                 <h1 className="font-semibold text-[13px]">Appointment Time</h1>
//               </div>
//               <h1 className="text-sm">{request.appointmentTime}</h1>
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Link href={`/doctors/${doctor.id}`}>
//               <Button className={"h-auto w-auto text-xs"}>See Details</Button>
//             </Link>
//           </CardFooter>
//         </Card>;
//       })}
//     </div>
//   );
// }
