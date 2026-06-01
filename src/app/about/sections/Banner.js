import Image from "next/image";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Happy Clients" },
  { value: "99%", label: "Success Rate" },
  { value: "Regulated & Ethical", label: "Consultation" },
];

export const Banner = () => {
  return (
    <section
      aria-labelledby="banner-heading"
      className="relative bg-gray-50 overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[520px] py-16">
          <div className="flex flex-col gap-6">
            <span className="text-red-600 text-sm uppercase font-semibold tracking-wide">
              About Us
            </span>

            <h1 id="banner-heading" className="banner-text text-gray-900">
              Your Trusted Partner for{" "}
              <span className="text-red-600">Canada PR</span> Success
            </h1>

            <p className="section-sub max-w-lg">
              At Croyez Immigration, we help aspiring individuals and families
              achieve their Canadian dream with expert guidance, transparent
              process, and personalized support.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-red-600 leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-500 mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                  {index < stats.length - 1 && (
                    <div aria-hidden="true" className="w-px h-8 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md hidden lg:block">
            <Image
              src="/immigration.jpg"
              alt="Couple celebrating their Canada PR approval"
              width={500}
              height={520}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
