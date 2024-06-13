import { pool, query } from "@/app/db/db2";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request, res) {
  const formData = await request.formData();
  const file = formData.get("image");
  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");
  const videos = formData.getAll("videos[]").map(video => JSON.parse(video));
  const categoryId = formData.get("category_id");
  const authorId = formData.get("author_id");

  const image = file.name;
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/uploads/${file.name}`;
  await writeFile(path, buffer);
 console.log(videos)
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const result = await connection.execute(
      "INSERT INTO courses (title, description, price, image, category_id, author_id) VALUES (?, ?, ?, ?, ?, ?)",
      [title, description, price, image, categoryId, authorId]
    );
    const courseId = result[0].insertId;

    const videoQueries = videos.map(video => connection.execute(
      "INSERT INTO videos (course_section_id, videoUrl, videoTitle) VALUES (?, ?, ?)",
      [courseId, video.url, video.title]
    ));
    await Promise.all(videoQueries);

    await connection.commit();

    if (result[0].affectedRows > 0) {
      return NextResponse.json({ message: "Course created successfully" }, { status: 201 });
    } else {
      return new NextResponse("Insertion failed", { status: 500 });
    }
  } catch (error) {
    await connection.rollback();
    console.error("Error during transaction:", error);
    return new NextResponse("Insertion failed", { status: 500 });
  } finally {
    connection.release();
  }
}
