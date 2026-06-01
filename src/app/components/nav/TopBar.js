import Link from "next/link";

const topBarLinks = [
  {
    label: "info@croyezimmigration.com",
    href: "mailto:info@croyezimmigration.com",
    icon: (
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
    ),
  },
];

export const TopBar = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="container py-2">
        <div className="hidden sm:flex items-center justify-between">
          <Link href="/" className="shrink-0 items-center gap-2">
            <span className="text-2xl font-bold text-red-600 tracking-tight">
              Croyez
            </span>
            <span className="text-xs text-gray-500 font-medium leading-tight hidden sm:block">
              Immigration
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              {topBarLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 nav-text text-gray-600 hover:text-red-600 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <a href="/eligibility" className="btn-primary text-sm py-1.5 px-4">
              Free Eligibility Check
            </a>
          </div>
        </div>

        <div className="flex sm:hidden flex-col gap-2">
          <div className="flex flex-col gap-1">
            {topBarLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 nav-text text-gray-600 text-sm"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <a
            href="/eligibility"
            className="btn-primary text-sm py-1.5 px-4 w-fit"
          >
            Free Eligibility Check
          </a>
        </div>
      </div>
    </div>
  );
};
