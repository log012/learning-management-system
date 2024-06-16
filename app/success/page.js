import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-500">Thank You!</h1>
        <p className="mb-6 text-gray-700">Your payment was successful. You can now start your course.</p>
        <Link href="/user/courses" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
         
            Go to Courses
          
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
