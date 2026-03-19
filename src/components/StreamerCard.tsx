import Link from "next/link";
import { Streamer } from "@/types";

const platformColors: Record<string, string> = {
  Kick: "bg-success/20 text-success",
  Twitch: "bg-[#9146FF]/20 text-[#9146FF]",
  YouTube: "bg-primary/20 text-primary",
};

const categoryLabels: Record<string, string> = {
  LATAM: "LATAM",
  Internacional: "Internacional",
  Nicho: "En Ascenso",
};

export default function StreamerCard({ streamer }: { streamer: Streamer }) {
  return (
    <Link
      href={`/streamers/${streamer.slug}/`}
      className="group rounded-xl bg-surface border border-surface-border p-6 transition-all duration-200 hover:border-primary/50 hover:bg-surface-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Top row: badges */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${platformColors[streamer.platform]}`}>
          {streamer.platform}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-accent/20 text-accent">
          {categoryLabels[streamer.category]}
        </span>
      </div>

      {/* Name and country */}
      <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-1">
        {streamer.name}
      </h3>
      <p className="text-xs text-text-muted mb-3">{streamer.country}</p>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed">
        {streamer.description}
      </p>

      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
        Ver perfil
        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
