import Link from "next/link";
import { countries } from "@/data/countries";

interface CountryGridProps {
  title: string;
  description: string;
  pathSuffix: string;
  variant?: "dark" | "darker";
}

export default function CountryGrid({ title, description, pathSuffix, variant = "dark" }: CountryGridProps) {
  const bgClass = variant === "darker" ? "bg-navy-light" : "bg-navy";

  return (
    <section className={`${bgClass} py-16 sm:py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3">
            {title}
          </h2>
          <p className="text-text-muted max-w-2xl">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/${country.slug}/${pathSuffix}/`}
              className="group relative rounded-xl bg-surface border border-surface-border p-6 transition-all duration-200 hover:border-primary/50 hover:bg-surface-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="text-4xl mb-3 block">{country.flag}</span>
              <h3 className="font-semibold text-text mb-1 group-hover:text-primary transition-colors">
                {country.name}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {country.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                Ver más
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
