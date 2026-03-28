export default function CasinoBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Subtle gradient overlay */}
        <defs>
          <radialGradient id="glow1" cx="20%" cy="30%" r="40%">
            <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fed7aa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="80%" cy="60%" r="35%">
            <stop offset="0%" stopColor="#fecaca" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#fecaca" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#glow1)" />
        <rect width="1200" height="700" fill="url(#glow2)" />

        {/* Dice - top left */}
        <g transform="translate(80, 60) rotate(-15)" opacity="0.07">
          <rect x="0" y="0" width="70" height="70" rx="12" stroke="#c2410c" strokeWidth="3" fill="none" />
          <circle cx="20" cy="20" r="6" fill="#c2410c" />
          <circle cx="50" cy="20" r="6" fill="#c2410c" />
          <circle cx="35" cy="35" r="6" fill="#c2410c" />
          <circle cx="20" cy="50" r="6" fill="#c2410c" />
          <circle cx="50" cy="50" r="6" fill="#c2410c" />
        </g>

        {/* Dice - bottom right */}
        <g transform="translate(1050, 520) rotate(20)" opacity="0.06">
          <rect x="0" y="0" width="65" height="65" rx="11" stroke="#c2410c" strokeWidth="3" fill="none" />
          <circle cx="32" cy="15" r="5.5" fill="#c2410c" />
          <circle cx="15" cy="50" r="5.5" fill="#c2410c" />
          <circle cx="50" cy="50" r="5.5" fill="#c2410c" />
        </g>

        {/* Playing card - spade, top right */}
        <g transform="translate(1020, 40) rotate(12)" opacity="0.06">
          <rect x="0" y="0" width="55" height="80" rx="8" stroke="#c2410c" strokeWidth="2.5" fill="none" />
          <path d="M27.5 22 C27.5 22 15 35 15 42 C15 48 20 50 24 48 C22 54 20 58 20 58 L35 58 C35 58 33 54 31 48 C35 50 40 48 40 42 C40 35 27.5 22 27.5 22Z" fill="#c2410c" />
        </g>

        {/* Playing card - heart, left */}
        <g transform="translate(30, 400) rotate(-8)" opacity="0.05">
          <rect x="0" y="0" width="50" height="72" rx="7" stroke="#dc2626" strokeWidth="2.5" fill="none" />
          <path d="M25 30 C25 30 12 22 12 16 C12 10 18 8 25 16 C32 8 38 10 38 16 C38 22 25 30 25 30Z" fill="none" stroke="#dc2626" strokeWidth="2" />
        </g>

        {/* Chip - center left */}
        <g transform="translate(160, 500)" opacity="0.06">
          <circle cx="35" cy="35" r="32" stroke="#c2410c" strokeWidth="3" fill="none" />
          <circle cx="35" cy="35" r="22" stroke="#c2410c" strokeWidth="1.5" fill="none" />
          <line x1="35" y1="3" x2="35" y2="13" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="35" y1="57" x2="35" y2="67" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="3" y1="35" x2="13" y2="35" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="57" y1="35" x2="67" y2="35" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="12" y1="12" x2="19" y2="19" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="51" y1="51" x2="58" y2="58" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="58" y1="12" x2="51" y2="19" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="12" y1="58" x2="19" y2="51" stroke="#c2410c" strokeWidth="2.5" />
        </g>

        {/* Chip - top center-right */}
        <g transform="translate(850, 80)" opacity="0.05">
          <circle cx="28" cy="28" r="25" stroke="#ea580c" strokeWidth="2.5" fill="none" />
          <circle cx="28" cy="28" r="17" stroke="#ea580c" strokeWidth="1.5" fill="none" />
          <line x1="28" y1="3" x2="28" y2="11" stroke="#ea580c" strokeWidth="2" />
          <line x1="28" y1="45" x2="28" y2="53" stroke="#ea580c" strokeWidth="2" />
          <line x1="3" y1="28" x2="11" y2="28" stroke="#ea580c" strokeWidth="2" />
          <line x1="45" y1="28" x2="53" y2="28" stroke="#ea580c" strokeWidth="2" />
        </g>

        {/* Roulette wheel hint - right side */}
        <g transform="translate(1080, 300)" opacity="0.05">
          <circle cx="40" cy="40" r="38" stroke="#c2410c" strokeWidth="2.5" fill="none" />
          <circle cx="40" cy="40" r="28" stroke="#c2410c" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="40" r="8" stroke="#c2410c" strokeWidth="1.5" fill="none" />
          <line x1="68" y1="40" x2="78" y2="40" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="64.2" y1="54" x2="72.9" y2="59" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="54" y1="64.2" x2="59" y2="72.9" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="40" y1="68" x2="40" y2="78" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="26" y1="64.2" x2="21" y2="72.9" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="15.8" y1="54" x2="7.1" y2="59" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="12" y1="40" x2="2" y2="40" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="15.8" y1="26" x2="7.1" y2="21" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="26" y1="15.8" x2="21" y2="7.1" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="40" y1="12" x2="40" y2="2" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="54" y1="15.8" x2="59" y2="7.1" stroke="#c2410c" strokeWidth="1.5" />
          <line x1="64.2" y1="26" x2="72.9" y2="21" stroke="#c2410c" strokeWidth="1.5" />
        </g>

        {/* Slot 7 - bottom center */}
        <g transform="translate(550, 580) rotate(5)" opacity="0.06">
          <text x="0" y="0" fontSize="72" fontWeight="bold" fontFamily="serif" fill="#c2410c">7</text>
        </g>

        {/* Small diamond suit - scattered */}
        <g transform="translate(400, 100) rotate(10)" opacity="0.04">
          <path d="M20 0 L40 25 L20 50 L0 25Z" stroke="#ea580c" strokeWidth="2.5" fill="none" />
        </g>

        <g transform="translate(700, 550) rotate(-5)" opacity="0.04">
          <path d="M15 0 L30 20 L15 40 L0 20Z" stroke="#ea580c" strokeWidth="2" fill="none" />
        </g>

        {/* Club suit - top */}
        <g transform="translate(550, 30)" opacity="0.04">
          <circle cx="20" cy="12" r="10" stroke="#c2410c" strokeWidth="2" fill="none" />
          <circle cx="10" cy="26" r="10" stroke="#c2410c" strokeWidth="2" fill="none" />
          <circle cx="30" cy="26" r="10" stroke="#c2410c" strokeWidth="2" fill="none" />
          <line x1="20" y1="30" x2="20" y2="48" stroke="#c2410c" strokeWidth="2.5" />
        </g>

        {/* Stars / sparkles scattered */}
        {[
          { x: 300, y: 200, s: 8 },
          { x: 900, y: 400, s: 6 },
          { x: 500, y: 450, s: 7 },
          { x: 750, y: 150, s: 5 },
          { x: 200, y: 300, s: 6 },
          { x: 950, y: 250, s: 7 },
        ].map((star, i) => (
          <g key={i} transform={`translate(${star.x}, ${star.y})`} opacity="0.06">
            <line x1={-star.s} y1="0" x2={star.s} y2="0" stroke="#ea580c" strokeWidth="1.5" />
            <line x1="0" y1={-star.s} x2="0" y2={star.s} stroke="#ea580c" strokeWidth="1.5" />
            <line x1={-star.s * 0.6} y1={-star.s * 0.6} x2={star.s * 0.6} y2={star.s * 0.6} stroke="#ea580c" strokeWidth="1" />
            <line x1={star.s * 0.6} y1={-star.s * 0.6} x2={-star.s * 0.6} y2={star.s * 0.6} stroke="#ea580c" strokeWidth="1" />
          </g>
        ))}

        {/* Coin circles scattered */}
        <circle cx="350" cy="550" r="18" stroke="#ea580c" strokeWidth="2" fill="none" opacity="0.05" />
        <text x="344" y="556" fontSize="16" fontWeight="bold" fill="#ea580c" opacity="0.05" fontFamily="serif">€</text>

        <circle cx="820" cy="480" r="14" stroke="#ea580c" strokeWidth="1.5" fill="none" opacity="0.04" />
        <text x="815" y="485" fontSize="12" fontWeight="bold" fill="#ea580c" opacity="0.04" fontFamily="serif">€</text>
      </svg>
    </div>
  );
}
