import Layout from "@/app/components/UserLayout";

const Courses = () => {
    const enrolledCourses = [
      {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming with this beginner course.',
        progress: 80,
        lastAccessed: 'June 14, 2024',
      },
      {
        id: 2,
        title: 'Advanced JavaScript',
        description: 'Deep dive into advanced JavaScript concepts and techniques.',
        progress: 60,
        lastAccessed: 'June 10, 2024',
      },
      {
        id: 3,
        title: 'Web Development with React',
        description: 'Build modern web applications using React and Next.js.',
        progress: 50,
        lastAccessed: 'June 12, 2024',
      },
    ];
  
    return (
        <>
        
        
       <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Enrolled Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="mb-4">
                <p className="font-medium">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{course.progress}% complete</p>
              </div>
              <p className="text-sm text-gray-600">Last accessed: {course.lastAccessed}</p>
            </div>
          ))}
        </div>
      </div>
      </Layout>
       </>
    );
  };
  
  export default Courses;
  