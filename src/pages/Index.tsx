
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        {/* Page content goes here */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to ExamPrep</h1>
          <p className="text-xl text-gray-600">Start your learning journey today!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
