import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";

interface CountryGridProps {
  title: string;
  description: string;
  pathSuffix: string;
  variant?: "default" | "alt";
}

export default function CountryGrid({ title, description, pathSuffix, variant = "default" }: CountryGridProps) {
  const bgClass = variant === "alt" ? "bg-[#0e0e0e]" : "bg-[#0a0a0a]";

  return (
    <section className={`${bgClass} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent" />
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight">
              {title}
            </h2>
          </div>
          <p className="text-[#9ca3af] max-w-2xl ml-5 text-base leading-relaxed">{description}</p>
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/${country.slug}/${pathSuffix}/`}
              className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              style={{
                boxShadow: `0 0 0 1px ${country.color}15, 0 4px 20px rgba(0,0,0,0.3)`,
              }}
            >
              {/* Background flag image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/${country.flagCode}.svg`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.22] transition-opacity duration-500 pointer-events-none"
              />

              {/* Dark overlay to keep text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-[#141414]/60" />

              {/* Color gradient overlay */}
              <div
                className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${country.color} 0%, transparent 60%)`,
                }}
              />

              {/* Left accent border */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all duration-300 z-10"
                style={{ backgroundColor: country.color }}
              />

              <div className="relative z-10 p-7 flex flex-col flex-1">
                {/* Flag icon + Country name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-9 h-7 rounded overflow-hidden shadow-md shrink-0" style={{ boxShadow: `0 2px 8px ${country.color}30` }}>
                    <Image
                      src={`https://flagcdn.com/${country.flagCode}.svg`}
                      alt={`Bandera de ${country.name}`}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-white transition-colors duration-200">
                    <span
                      className="group-hover:text-[var(--hover-color)] transition-colors duration-200"
                      style={{ ["--hover-color" as string]: country.color }}
                    >
                      {country.name}
                    </span>
                  </h3>
                </div>

                <p className="text-sm text-[#9ca3af] leading-relaxed flex-1">
                  {country.description}
                </p>

                <div
                  className="flex items-center gap-2 text-sm font-bold transition-colors duration-200 mt-6"
                  style={{ color: country.color }}
                >
                  Ver casinos
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 30px ${country.color}20, 0 0 60px ${country.color}10, inset 0 0 30px ${country.color}05`,
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
