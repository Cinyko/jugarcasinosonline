/* ===== Image-based section backgrounds ===== */

function ImageBackground({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
      />
    </div>
  );
}

export function WorldMapDecoration() {
  return <ImageBackground src="/img/backgrounds/paises.png" alt="" />;
}

export function RouletteDecoration() {
  return <ImageBackground src="/img/backgrounds/ruleta.png" alt="" />;
}

export function BlackjackDecoration() {
  return <ImageBackground src="/img/backgrounds/blackjack.png" alt="" />;
}

export function StreamerDecoration() {
  return <ImageBackground src="/img/backgrounds/streamers.png" alt="" />;
}

export function BalanceDecoration() {
  return <ImageBackground src="/img/backgrounds/comparativa.png" alt="" />;
}

export function SlotMachineDecoration() {
  return <ImageBackground src="/img/backgrounds/slots.png" alt="" />;
}

export function BitcoinDecoration() {
  return <ImageBackground src="/img/backgrounds/cripto.png" alt="" />;
}

/* ===== Coins rain (SVG animated) for Bonos Sin Depósito ===== */

function CoinSVG({ symbol, size }: { symbol: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="22" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
      <circle cx="25" cy="25" r="17" stroke="white" strokeWidth="0.5" opacity="0.5" />
      <text x="25" y="32" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">{symbol}</text>
    </svg>
  );
}

function BitcoinCoinSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="22" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.06" />
      <circle cx="25" cy="25" r="17" stroke="white" strokeWidth="0.5" opacity="0.5" />
      <path
        d="M20 16 L20 34 M20 16 L28 16 Q33 16 33 21 Q33 25 28 25 L20 25 M20 25 L29 25 Q34 25 34 29.5 Q34 34 29 34 L20 34"
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      <line x1="22" y1="14" x2="22" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="14" x2="27" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="34" x2="22" y2="36" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="34" x2="27" y2="36" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BanknoteSVG({ symbol, width }: { symbol: string; width: number }) {
  const height = width * 0.5;
  return (
    <svg width={width} height={height} viewBox="0 0 120 60" fill="none">
      <rect x="2" y="2" width="116" height="56" rx="6" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.03" />
      <rect x="8" y="8" width="104" height="44" rx="3" stroke="white" strokeWidth="0.5" opacity="0.4" strokeDasharray="3,3" />
      <circle cx="60" cy="30" r="16" stroke="white" strokeWidth="0.8" opacity="0.4" />
      <text x="60" y="36" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">{symbol}</text>
      <circle cx="18" cy="18" r="4" stroke="white" strokeWidth="0.5" opacity="0.3" />
      <circle cx="102" cy="18" r="4" stroke="white" strokeWidth="0.5" opacity="0.3" />
      <circle cx="18" cy="42" r="4" stroke="white" strokeWidth="0.5" opacity="0.3" />
      <circle cx="102" cy="42" r="4" stroke="white" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

type FallingItem = {
  left: string;
  delay: string;
  duration: string;
  size: number;
  type: "coin" | "bitcoin" | "banknote";
  symbol: string;
  spinDuration: string;
  opacity: number;
};

const fallingItems: FallingItem[] = [
  { left: "3%", delay: "0s", duration: "10s", size: 48, type: "coin", symbol: "$", spinDuration: "2s", opacity: 0.08 },
  { left: "18%", delay: "3.5s", duration: "12s", size: 36, type: "coin", symbol: "$", spinDuration: "2.5s", opacity: 0.06 },
  { left: "52%", delay: "1s", duration: "9s", size: 42, type: "coin", symbol: "$", spinDuration: "1.8s", opacity: 0.07 },
  { left: "88%", delay: "6s", duration: "11s", size: 34, type: "coin", symbol: "$", spinDuration: "2.2s", opacity: 0.06 },
  { left: "12%", delay: "2s", duration: "11s", size: 40, type: "coin", symbol: "\u20AC", spinDuration: "2.3s", opacity: 0.07 },
  { left: "42%", delay: "7s", duration: "10s", size: 32, type: "coin", symbol: "\u20AC", spinDuration: "1.9s", opacity: 0.06 },
  { left: "72%", delay: "4.5s", duration: "13s", size: 44, type: "coin", symbol: "\u20AC", spinDuration: "2.7s", opacity: 0.07 },
  { left: "28%", delay: "1.5s", duration: "9.5s", size: 38, type: "coin", symbol: "MX$", spinDuration: "2.1s", opacity: 0.06 },
  { left: "62%", delay: "5s", duration: "12.5s", size: 46, type: "coin", symbol: "S/", spinDuration: "2.4s", opacity: 0.07 },
  { left: "95%", delay: "3s", duration: "10.5s", size: 34, type: "coin", symbol: "AR$", spinDuration: "2s", opacity: 0.06 },
  { left: "8%", delay: "4s", duration: "13s", size: 50, type: "bitcoin", symbol: "", spinDuration: "3s", opacity: 0.08 },
  { left: "48%", delay: "8s", duration: "11s", size: 38, type: "bitcoin", symbol: "", spinDuration: "2.5s", opacity: 0.07 },
  { left: "78%", delay: "2.5s", duration: "10s", size: 42, type: "bitcoin", symbol: "", spinDuration: "2.8s", opacity: 0.07 },
  { left: "35%", delay: "6.5s", duration: "9s", size: 30, type: "coin", symbol: "$", spinDuration: "1.6s", opacity: 0.05 },
  { left: "58%", delay: "0.5s", duration: "14s", size: 28, type: "coin", symbol: "\u20AC", spinDuration: "2s", opacity: 0.05 },
  { left: "82%", delay: "9s", duration: "10s", size: 36, type: "coin", symbol: "$", spinDuration: "2.3s", opacity: 0.06 },
  { left: "22%", delay: "7.5s", duration: "11.5s", size: 32, type: "coin", symbol: "CL$", spinDuration: "2.1s", opacity: 0.06 },
  { left: "68%", delay: "3s", duration: "8.5s", size: 40, type: "coin", symbol: "$", spinDuration: "1.7s", opacity: 0.07 },
  { left: "6%", delay: "5s", duration: "14s", size: 90, type: "banknote", symbol: "$", spinDuration: "4s", opacity: 0.06 },
  { left: "30%", delay: "0s", duration: "16s", size: 80, type: "banknote", symbol: "\u20AC", spinDuration: "5s", opacity: 0.05 },
  { left: "55%", delay: "8s", duration: "15s", size: 85, type: "banknote", symbol: "S/", spinDuration: "4.5s", opacity: 0.05 },
  { left: "75%", delay: "3s", duration: "13s", size: 75, type: "banknote", symbol: "$", spinDuration: "3.5s", opacity: 0.06 },
  { left: "92%", delay: "10s", duration: "14.5s", size: 70, type: "banknote", symbol: "MX$", spinDuration: "4.2s", opacity: 0.05 },
  { left: "15%", delay: "9.5s", duration: "8s", size: 24, type: "coin", symbol: "$", spinDuration: "1.5s", opacity: 0.04 },
  { left: "45%", delay: "4s", duration: "9s", size: 26, type: "coin", symbol: "\u20AC", spinDuration: "1.8s", opacity: 0.04 },
  { left: "85%", delay: "1s", duration: "10s", size: 22, type: "coin", symbol: "$", spinDuration: "1.4s", opacity: 0.04 },
  { left: "38%", delay: "11s", duration: "9.5s", size: 28, type: "bitcoin", symbol: "", spinDuration: "2s", opacity: 0.05 },
];

export function CoinsDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {fallingItems.map((item, i) => (
        <div
          key={i}
          className="absolute -top-16"
          style={{
            left: item.left,
            animation: `coin-fall ${item.duration} linear ${item.delay} infinite`,
            opacity: item.opacity,
          }}
        >
          <div style={{ animation: `${item.type === "banknote" ? "bill-flutter" : "coin-spin-3d"} ${item.spinDuration} ease-in-out infinite` }}>
            {item.type === "coin" && <CoinSVG symbol={item.symbol} size={item.size} />}
            {item.type === "bitcoin" && <BitcoinCoinSVG size={item.size} />}
            {item.type === "banknote" && <BanknoteSVG symbol={item.symbol} width={item.size} />}
          </div>
        </div>
      ))}
    </div>
  );
}
