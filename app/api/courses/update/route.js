
import { query } from "@/app/db/db";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

// const storage=multer.diskStorage({
//   destination:(request,file,cb)=>{
//     cb(null,'./public/uploads')
//   },
//   filename:(req,file,cb)=>{
//     cb(null,file.originalname)
//   }
// })
// const upload = multer({ storage });
// const uploadMiddleware = upload.single('image');

// Promisify the upload middleware
// const uploadAsync = promisify(uploadMiddleware);
export async function POST(request,res) {

   
 
    const formData = await request.formData();
    const file = formData.get('image');
    const title=formData.get('title');
    const description=formData.get('description');
    const price=formData.get('price');
    const video=formData.get('video');
    const categoryId=formData.get('category_id');
    const authorId=formData.get('author_id');
    const id=formData.get('id');
    console.log("form data", formData, file);
    console.log(title);
    console.log(description);
    console.log(price);
    console.log(video);
    console.log(categoryId);
    console.log(authorId);
    console.log(id);
    const image=file.name;
    console.log(image);
    const byteData=await file.arrayBuffer();
    const buffer =Buffer.from(byteData);
    const path=`./public/uploads/${file.name}`;
    await writeFile(path,buffer);
   
    console.log(id);
    const result=await query({
      query: 'UPDATE  courses SET title=?, description=?, price=?, image=?, video=?, category_id=?, author_id=? where id=?',
      values: [title,description,price,image,video,categoryId,authorId,id],
    });
    console.log('Query result:', result);

    if (result.affectedRows > 0) {
        return NextResponse.json({ message: 'Course created successfully' }, { status: 201 });
    } else {
        return new NextResponse('Insertion failed', { status: 500 });
    }
    
  }


