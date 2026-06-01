const reviews = [
  {
    quote:
      "Croyez Immigration made our Canada PR journey smooth and stress-free. Their team was professional, responsive and guided me at every step. Highly recommended!",
    name: "Arun Prakash",
    location: "Ontario, Canada",
    rating: 5,
    avatar: "AP",
  },
  {
    quote:
      "Thanks to the expert advice and dedication from Croyez Immigration, I received my PR in just 8 months. Truly a transparent, trustworthy and client-focused team.",
    name: "Sneha Iyer",
    location: "Alberta, Canada",
    rating: 5,
    avatar: "SI",
  },
  {
    quote:
      "Excellent service and very clear guidance throughout the process. From documents to submission, everything was handled perfectly. Thank you, Croyez Immigration!",
    name: "Rishi Verma",
    location: "British Columbia, Canada",
    rating: 5,
    avatar: "RV",
  },
];

const StarRating = ({ count }) => (
  <div
    className="flex items-center gap-0.5"
    aria-label={`${count} out of 5 stars`}
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export const ClientReviews = () => {
  return (
    <section aria-labelledby="reviews-heading" className="py-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="reviews-heading" className="head-text text-gray-900">
            What Our <span className="text-red-600">Clients</span> Say
          </h2>
        </div>

        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <li
              key={review.name}
              className="bg-white rounded-2xl p-6 flex flex-col gap-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-200"
            >
              <svg
                className="w-8 h-8 text-red-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="section-sub text-sm flex-1 text-gray-600 leading-relaxed">
                {review.quote}
              </p>

              <StarRating count={review.rating} />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold tracking-wide">
                    {review.avatar}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {review.location}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
