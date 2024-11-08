import ApplyForm from "@/components/ApplyForm";
import { auth } from "../../../../auth";

export default function ApplyAsDoctor() {
  const session = auth();
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mt-10">
        Apply as a Doctor in our Platform
      </h1>
      <p className="text-secondary-foreground my-5">
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform
        Apply as a Doctor in our Platform{" "}
      </p>

      <ApplyForm session={session} />
    </div>
  );
}
