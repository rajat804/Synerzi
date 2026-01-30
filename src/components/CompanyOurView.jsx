const CompanyOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black">
            Company Overview
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Learn more about our company, vision, and the services we provide
            through the videos below.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Video 1 */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
              title="Company Overview Video 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
              title="Company Overview Video 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
