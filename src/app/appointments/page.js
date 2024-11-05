import { columns } from "@/components/appointmentTable/columns";
import { AppointmentTable } from "@/components/appointmentTable/data-table";
import { appointments } from "@/lib/data";

export default function Appointments() {
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <AppointmentTable columns={columns} data={appointments} />
      </div>
    </div>
  );
}
