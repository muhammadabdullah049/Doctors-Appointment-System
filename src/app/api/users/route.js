import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/UserModal";

export async function POST(req) {
  const obj = await req.json();
  try {
    let newUser = await new UserModal({ ...obj });
    newUser = await newUser.save();

    return Response.json(
      {
        error: false,
        msg: "User Registered successfully",
        user: newUser,
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
  const users = await UserModal.find();
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
