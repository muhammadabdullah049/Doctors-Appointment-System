import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/RequestModal";

export async function POST(req) {
  await connectDB();
  try {
    const obj = await req.json();

    const isUserRequestedBefore = await RequestModal.findOne({
      user: obj.user,
    });
    if (isUserRequestedBefore) {
      return Response.json(
        {
          error: true,
          msg: "You had already applied as a doctor",
        },
        { status: 403 }
      );
    }
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
      requests,
    },
    { status: 200 }
  );
}

export async function PUT(req) {
  await connectDB();
  try {
    const obj = await req.json();
    let { id, status } = obj;
    const updated = RequestModal.findOneAndUpdate(
      {
        _id: id,
      },
      { status: status }
    ).exec();
    return Response.json(
      {
        error: false,
        msg: "Request updated Successfully",
        requests: updated,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        error: true,
        msg: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {}
