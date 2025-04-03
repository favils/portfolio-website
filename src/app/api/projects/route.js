import { connectDB } from "../../../lib/db";
import { ProjectModel } from "../../../lib/models/Project";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const project = new ProjectModel(body);
    await project.save();
    return new Response(JSON.stringify({ success: true, project }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  await connectDB();

  try {
    const projects = await ProjectModel.find({});
    return new Response(JSON.stringify({ success: true, projects }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
