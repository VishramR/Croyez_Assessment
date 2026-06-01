const services = [
  {
    title: "Canada PR",
    description:
      "Navigate the permanent residency process with expert guidance tailored to your profile and eligibility.",
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
          d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7M3 7l9-4 9 4"
        />
      </svg>
    ),
  },
  {
    title: "Express Entry Assistance",
    description:
      "Maximize your CRS score and get expert help managing your Express Entry profile end to end.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Provincial Nominee Program (PNP)",
    description:
      "Explore province-specific immigration streams that align with your skills and work experience.",
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Family Sponsorship",
    description:
      "Reunite with your loved ones in Canada through our hassle-free family sponsorship services.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Work Permits",
    description:
      "Get assistance securing open or employer-specific work permits to kick-start your Canadian career.",
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
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "PR Consultation & Documentation",
    description:
      "From profile evaluation to document preparation, we ensure every step is accurate and complete.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export const Services = () => {
  return (
    <section aria-labelledby="services-heading" className="py-4 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="head-text text-gray-900">
            Our <span className="text-red-600">Services</span>
          </h2>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {services.map((service) => (
            <li
              key={service.title}
              className="group bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-full flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors duration-200">
                  {service.icon}
                </div>
              </div>

              <h3 className="font-semibold text-center text-gray-900 text-base leading-snug">
                {service.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
