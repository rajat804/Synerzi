const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];

export default function CompanyLogos() {
  return (
    <div className="mt-14 overflow-hidden bg-white py-6">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
        Trusted by SRM
      </h2>

      <div className="flex gap-12 animate-scroll px-6">
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
