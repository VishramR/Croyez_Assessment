const steps = [
  {
    step: "01",
    title: "Eligibility Assessment",
    description:
      "We evaluate your profile across all PR programs to find the best pathway suited for you.",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Document Collection",
    description:
      "We guide you in gathering accurate and complete documentation required for your application.",
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
          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Profile Creation & Submission",
    description:
      "We create a strong profile and submit your application with care and precision.",
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
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Follow-up & Support",
    description:
      "We track your application and provide timely updates so you are never left in the dark.",
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
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Receive Your Canada PR",
    description:
      "Celebrate a new chapter as we help you land in Canada and begin your new life.",
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
          d="M5 3l14 9-14 9V3z"
        />
      </svg>
    ),
  },
];

export const Steps = () => {
  return (
    <section aria-labelledby="steps-heading" className="py-4 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="steps-heading" className="head-text text-gray-900">
            Our <span className="text-red-600">5-Step</span> Canada PR Process
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-px border-t-2 border-dashed border-red-200 z-0"
          />

          <ol
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10"
          >
            {steps.map((step, index) => (
              <li
                key={step.step}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-gray-100 flex items-center justify-center">
                    {step.icon}
                  </div>

                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-base leading-snug">
                  {step.title}
                </h3>

                <p className="section-sub text-sm">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
