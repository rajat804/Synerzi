import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Things to Know Before Buying Your Dream Home",
      desc: "Buying a home is a lifetime decision. Here’s a simple checklist to help you avoid costly mistakes.",
      image:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02c8",
      category: "Buying Guide",
      author: "Synerzi Realty",
      date: "Jan 15, 2026",
    },
    {
      id: 2,
      title: "Why Location Is the Real King in Real Estate",
      desc: "A perfect home in the wrong location can ruin everything. Learn why location matters more than price.",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      category: "Investment",
      author: "Property Expert",
      date: "Jan 20, 2026",
    },
    {
      id: 3,
      title: "Home Loan Tips for First-Time Buyers",
      desc: "From EMI planning to interest rates, this guide will help first-time buyers choose the right loan.",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      category: "Finance",
      author: "Finance Desk",
      date: "Jan 28, 2026",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-br from-[#F8FAFC] via-[#EEF2F7] to-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            Insights & Stories
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore expert opinions, real estate trends and practical guides to
            make smarter property decisions.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="inline-block text-xs px-4 py-1 rounded-full bg-cyan-50 text-cyan-600 font-medium">
                    {blog.category}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold text-[#0F172A] leading-snug">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {blog.desc}
                  </p>

                  <div className="flex items-center justify-between mt-6 text-xs text-gray-400">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="mt-6 inline-block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-[#020617] to-[#0F172A]">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Want Real Estate Insights Weekly?
          </h2>
          <p className="mt-3 text-gray-300">
            Subscribe to get curated property tips directly in your inbox.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-xl text-gray-800 w-full sm:w-80 outline-none"
            />
            <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
