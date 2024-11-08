import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/RequestModal";

export async function POST(req) {
  const obj = await req.json();
  try {
    let newRequest = await new RequestModal({ ...obj });
    newRequest = await newRequest.save();

    return Response.json(
      {
        error: false,
        msg: "User Registered successfully",
        user: newRequest,
      },
      { status: 201 }
    );
  } catch {
    return Response.json(
      {
        error: true,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function GET(req) {
  await connectDB();
  const requests = await RequestModal.find();
  return Response.json(
    {
      error: false,
      msg: "User Fetched successfully",
      users,
    },
    { status: 200 }
  );
}

export async function PUT(req) {}
export async function DELETE(req) {}
