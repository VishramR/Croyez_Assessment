const reasons = [
  {
    title: "Personalized Strategy",
    description:
      "We analyze your profile and recommend the most suitable immigration pathways tailored just for you.",
    icon: (
      <svg
        className="w-7 h-7 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Experienced Consultants",
    description:
      "Our team stays updated with the latest immigration policies to provide accurate guidance.",
    icon: (
      <svg
        className="w-7 h-7 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    description:
      "From assessment to post-landing support, we are with you at every step of your journey.",
    icon: (
      <svg
        className="w-7 h-7 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Transparent Process",
    description:
      "We maintain complete clarity regarding documentation, timelines and fees at every stage.",
    icon: (
      <svg
        className="w-7 h-7 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We provide dedicated and personalised support at every stage.",
    icon: (
      <svg
        className="w-7 h-7 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export const WhyChoose = () => {
  return (
    <section aria-labelledby="why-choose-heading" className="py-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="why-choose-heading" className="head-text text-gray-900">
            Why Choose <span className="text-red-600">Croyez Immigration?</span>
          </h2>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-full flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  {reason.icon}
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 text-base leading-snug">
                {reason.title}
              </h3>

              <p className="section-sub text-sm">{reason.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
