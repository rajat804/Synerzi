import { useState } from "react";

const faqs = [
  {
    q: "What services does Synerzi provide?",
    a: "Synerzi offers premium real estate solutions including property investment, leasing, sales, and strategic advisory services."
  },
  {
    q: "Do you deal in commercial or residential properties?",
    a: "We work with both commercial and residential properties, offering customized solutions based on client needs."
  },
  {
    q: "How can I list my property with Synerzi?",
    a: "You can list your property by clicking on the Add Listing button or contacting our team through the Contact Us page."
  },
  {
    q: "Is there any consultation fee?",
    a: "Initial consultations are free. Any applicable service charges are discussed transparently in advance."
  },
  {
    q: "Are the property listings verified?",
    a: "Yes, every property is thoroughly verified by our experts for authenticity, legality, and fair pricing."
  },
  {
    q: "Do you provide investment guidance?",
    a: "Absolutely. Our experts analyze ROI, market trends, and future growth potential before suggesting investments."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">
            Clear answers to common questions about Synerzi
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-start p-5 text-left"
              >
                <span className="font-medium text-gray-900 pr-6">
                  {item.q}
                </span>
                <span className="text-2xl text-[#06B6D4] leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
