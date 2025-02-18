
import { Volume2, Play, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, className }: { icon: any, title: string, className: string }) => (
  <div className={`${className} p-6 rounded-lg shadow-md transition-transform hover:scale-105`}>
    <div className="flex flex-col items-center text-center space-y-4">
      <Icon className="w-16 h-16" />
      <h3 className="text-sm font-semibold leading-tight">{title}</h3>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="bg-[#99A7EE] min-h-[600px] pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Column */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              COVER ALL PREVIOUS YEAR QUESTIONS WITH A STRUCTURED STUDY PLAN.
            </h1>
            <Link
              to="/select-exam"
              className="inline-block bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors shadow-lg"
            >
              SELECT EXAM
            </Link>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/95c93f45-59c4-46a3-9218-f8073a3c2ab4.png" 
                alt="Student studying" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                  <Volume2 className="w-5 h-5 text-primary" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                  <Play className="w-5 h-5 text-primary" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                  <Settings className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <h2 className="text-white text-xl font-bold">
                SEE HOW IT<br />WORKS
              </h2>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <FeatureCard
            icon={() => (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="#FFE4C4"/>
                <path d="M32 16L40 24H24L32 16Z" fill="#FF6B4A"/>
                <rect x="28" y="24" width="8" height="24" fill="#FF6B4A"/>
              </svg>
            )}
            title="STRUCTURED PLAN TO MASTER PREVIOUS YEAR QUESTIONS EFFECTIVELY."
            className="bg-[#FFF3E0]"
          />
          <FeatureCard
            icon={() => (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="#F8E6FF"/>
                <path d="M24 24H40V40H24V24Z" fill="#9B87F5"/>
                <path d="M28 28H36V36H28V28Z" fill="#6B86E5"/>
              </svg>
            )}
            title="CHAPTER-WISE AND TYPE-WISE CATEGORIZATION OF QUESTIONS"
            className="bg-[#FCE7FF]"
          />
          <FeatureCard
            icon={() => (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="#E5E0FF"/>
                <circle cx="32" cy="28" r="8" fill="#6B86E5"/>
                <path d="M24 40C24 36.6863 27.5817 34 32 34C36.4183 34 40 36.6863 40 40" fill="#9B87F5"/>
              </svg>
            )}
            title="CHOOSE THE TEACHER WHOSE SOLUTION SUITS YOU"
            className="bg-[#EEE9FF]"
          />
          <FeatureCard
            icon={() => (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="#E0FFF4"/>
                <path d="M24 40L30 34L36 37L40 24" stroke="#4CAF50" strokeWidth="2"/>
              </svg>
            )}
            title="EFFICIENTLY TRACK YOUR PREVIOUS YEAR QUESTIONS PROGRESS"
            className="bg-[#E8FFF4]"
          />
          <FeatureCard
            icon={() => (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="#FFE0E0"/>
                <path d="M32 24V40" stroke="#FF6B4A" strokeWidth="2"/>
                <path d="M24 32H40" stroke="#FF6B4A" strokeWidth="2"/>
              </svg>
            )}
            title="TRACK THE SPEED AT WHICH YOU SOLVE QUESTIONS"
            className="bg-[#FFE8E8]"
          />
          <FeatureCard
            icon={() => (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="#FFF9E0"/>
                <rect x="24" y="24" width="16" height="20" rx="2" fill="#FFD700"/>
                <path d="M28 28H36" stroke="white" strokeWidth="2"/>
                <path d="M28 32H36" stroke="white" strokeWidth="2"/>
                <path d="M28 36H36" stroke="white" strokeWidth="2"/>
              </svg>
            )}
            title="COMPLETE PREVIOUS YEAR QUESTIONS FOR ALL SUBJECTS AT ONE PLACE"
            className="bg-[#FFFBE8]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
