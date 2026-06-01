const bullets = [
  "Transparent communication",
  "End-to-end assistance",
  "Timely updates and support",
  "Ethical and regulated consultation",
  "Result-oriented immigration strategies",
];

const cards = [
  {
    title: "Our Mission",
    icon: (
      <svg
        className="w-6 h-6 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    description:
      "To provide trustworthy, transparent, and personalized immigration solutions that empower individuals and families to successfully settle in Canada.",
  },
  {
    title: "Our Vision",
    icon: (
      <svg
        className="w-6 h-6 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    description:
      "To become one of the most trusted and client-focused immigration consultancies by delivering exceptional service, ethical guidance, and successful immigration outcomes.",
  },
];

export const WhoWeAre = () => {
  return (
    <section aria-labelledby="who-we-are-heading" className="py-6 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <p className="head-text">Who We Are</p>
              <p className="section-sub">
                Croyez Immigration is a professional immigration consultancy
                dedicated to helping individuals and families build a better
                future in Canada. Our experienced consultants provide customized
                solutions tailored to your profile and goals.
              </p>
            </div>

            <ul role="list" className="flex flex-col gap-3">
              {bullets.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="nav-text text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {cards.map((card) => (
            <div
              key={card.title}
              className="h-full lg:col-span-1 rounded-2xl border border-gray-100 bg-gray-50 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <h3 className="section-heading text-gray-900">{card.title}</h3>
              </div>

              <div className="w-10 h-0.5 bg-red-600 rounded-full" />

              <p className="section-sub flex-1">{card.description}</p>

              <p>icon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
