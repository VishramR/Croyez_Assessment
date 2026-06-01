import Link from "next/link";

const footerLinks = [
  {
    heading: "Our Services",
    links: [
      { label: "Express Entry", href: "/services/express-entry" },
      { label: "Canada PR", href: "/services/canada-pr" },
      { label: "PNP Programs", href: "/services/pnp" },
      { label: "Family Sponsorship", href: "/services/family-sponsorship" },
      { label: "Work Permits", href: "/services/work-permits" },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Contact Us",
    links: [],
  },
];

const contactDetails = [
  {
    label: "info@croyezimmigration.com",
    href: "mailto:info@croyezimmigration.com",
    icon: (
      <svg
        className="w-4 h-4 shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: (
      <svg
        className="w-4 h-4 shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label:
      "2nd Floor, Aishwarya Tech Park, Opp. Wajir Circle, Thane (W) - 400604, Maharashtra, India",
    href: "https://maps.google.com",
    icon: (
      <svg
        className="w-4 h-4 shrink-0 mt-0.5"
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
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Happy Clients" },
  { value: "99%", label: "Success Rate" },
  { value: "IRCC", label: "Regulated & Ethical" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-950 py-12">
        <div className="container flex flex-col items-center text-center gap-6">
          <div>
            <h2 className="head-text text-white">
              Ready to Start Your{" "}
              <span className="text-red-500">Canada PR</span> Journey?
            </h2>

            <p className="section-sub text-red-100 mt-2">
              Take the first step towards your future in Canada.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/eligibility"
              className="inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              Check My Eligibility
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 border-2 bg-white border-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 text-gray-300 border-t border-gray-200 pt-14 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-5 lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-white">Croyez</span>

                <span className="text-red-500 text-2xl font-bold">
                  {" "}
                  Immigration
                </span>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for Canada PR and a better future.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm tracking-widest">
                Our Services
              </h3>

              <ul role="list" className="flex flex-col gap-2.5">
                {footerLinks[0].links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <svg
                        className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>

                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm tracking-widest">
                Useful Links
              </h3>

              <ul role="list" className="flex flex-col gap-2.5">
                {footerLinks[1].links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <svg
                        className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>

                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm tracking-widest">
                Contact Us
              </h3>

              <ul role="list" className="flex flex-col gap-4">
                {contactDetails.map((detail) => (
                  <li key={detail.label}>
                    <a
                      href={detail.href}
                      target={
                        detail.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        detail.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-2.5 text-gray-400 text-sm hover:text-red-400 transition-colors duration-200"
                    >
                      <span className="text-red-500 mt-0.5">{detail.icon}</span>

                      <span className="leading-relaxed">{detail.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 border-t border-white-800">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Croyez Immigration. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-gray-500 text-sm hover:text-red-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="text-gray-700">|</span>

            <Link
              href="/terms"
              className="text-gray-500 text-sm hover:text-red-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
