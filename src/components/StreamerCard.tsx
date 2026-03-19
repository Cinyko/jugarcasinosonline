import Link from "next/link";
import { Streamer } from "@/types";

const platformStyles: Record<string, { color: string; bg: string; border: string }> = {
  Kick: { color: "#22c55e", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.15)" },
  Twitch: { color: "#a855f7", bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.15)" },
  YouTube: { color: "#ef4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.15)" },
};

const categoryLabels: Record<string, string> = {
  LATAM: "LATAM",
  Internacional: "Internacional",
  Nicho: "En Ascenso",
};

export default function StreamerCard({ streamer }: { streamer: Streamer }) {
  const style = platformStyles[streamer.platform];

  return (
    <Link
      href={`/streamers/${streamer.slug}/`}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
      style={{
        boxShadow: `0 0 0 1px ${style.border}, 0 4px 20px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, ${style.color} 0%, transparent 50%)` }}
      />

      {/* Left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all duration-300"
        style={{ backgroundColor: style.color }}
      />

      <div className="relative bg-[#141414] p-6 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider"
            style={{ color: style.color, backgroundColor: style.bg, border: `1px solid ${style.border}` }}
          >
            {streamer.platform}
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-black text-accent uppercase tracking-wider bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.15)]">
            {categoryLabels[streamer.category]}
          </span>
        </div>

        {/* Name and country */}
        <h3 className="text-xl font-black text-white mb-1 transition-colors duration-200">
          <span className="group-hover:text-white">{streamer.name}</span>
        </h3>
        <p className="text-xs font-bold text-[#71717a] mb-4 uppercase tracking-widest">{streamer.country}</p>

        {/* Description */}
        <p className="text-sm text-[#9ca3af] leading-relaxed flex-1">
          {streamer.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-bold" style={{ color: style.color }}>
          Ver perfil
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `0 0 30px ${style.color}15, 0 0 60px ${style.color}08` }}
      />
    </Link>
  );
}
