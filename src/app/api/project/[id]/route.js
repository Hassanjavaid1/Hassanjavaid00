import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const query = `
  *[_type=="post" && _id == $id][0]{
    _id,
    title,
    overview,
    "Images": previewImages[].asset->url,
    problem,
    solution,
    techHighlight[],
    keyFeatures[],
    technologies[],
    demo,
    github
  }
`;
    const project = await client.fetch(query, { id });
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json(err);
  }
}
