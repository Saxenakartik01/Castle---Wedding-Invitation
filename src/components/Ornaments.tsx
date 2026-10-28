/* Decorative, guaranteed-transparent SVG frames */

export function OvalFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 210"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3d27a" />
          <stop offset="0.45" stopColor="#b9872f" />
          <stop offset="0.7" stopColor="#8a5f1d" />
          <stop offset="1" stopColor="#d9b25c" />
        </linearGradient>
      </defs>

      {/* outer band */}
      <ellipse cx="80" cy="110" rx="58" ry="78" stroke="url(#gold)" strokeWidth="7" />
      <ellipse cx="80" cy="110" rx="50" ry="70" stroke="#5e3f12" strokeWidth="1.2" opacity="0.6" />
      <ellipse cx="80" cy="110" rx="63" ry="83" stroke="url(#gold)" strokeWidth="1.5" opacity="0.8" />

      {/* beading */}
      {Array.from({ length: 28 }).map((_, i) => {
        const a = (i / 28) * Math.PI * 2;
        const x = 80 + Math.cos(a) * 60.5;
        const y = 110 + Math.sin(a) * 80.5;
        return <circle key={i} cx={x} cy={y} r="1.3" fill="url(#gold)" />;
      })}

      {/* top crown flourish */}
      <path
        d="M80 20 C72 30 66 28 62 34 C70 32 76 34 80 40 C84 34 90 32 98 34 C94 28 88 30 80 20 Z"
        fill="url(#gold)"
      />
      <circle cx="80" cy="18" r="3" fill="url(#gold)" />

      {/* bottom flourish */}
      <path
        d="M80 200 C73 192 66 194 60 190 C68 198 74 198 80 204 C86 198 92 198 100 190 C94 194 87 192 80 200 Z"
        fill="url(#gold)"
      />
      {/* side scrolls */}
      <path d="M18 110 C26 100 26 120 18 110" stroke="url(#gold)" strokeWidth="2.5" />
      <path d="M142 110 C134 100 134 120 142 110" stroke="url(#gold)" strokeWidth="2.5" />
    </svg>
  );
}

export function MirrorFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f5f7" />
          <stop offset="0.4" stopColor="#b9bec6" />
          <stop offset="0.65" stopColor="#8b919b" />
          <stop offset="1" stopColor="#dfe3e8" />
        </linearGradient>
      </defs>

      {/* main oval band */}
      <ellipse cx="100" cy="165" rx="70" ry="110" stroke="url(#silver)" strokeWidth="11" />
      <ellipse cx="100" cy="165" rx="60" ry="100" stroke="#6c727c" strokeWidth="1.4" opacity="0.5" />
      <ellipse cx="100" cy="165" rx="77" ry="117" stroke="url(#silver)" strokeWidth="2" opacity="0.8" />

      {/* beading */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i / 36) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 73;
        const y = 165 + Math.sin(a) * 113;
        return <circle key={i} cx={x} cy={y} r="1.6" fill="url(#silver)" />;
      })}

      {/* top crown */}
      <path
        d="M100 16 C90 34 78 30 70 40 C84 36 92 42 100 56 C108 42 116 36 130 40 C122 30 110 34 100 16 Z"
        fill="url(#silver)"
      />
      <circle cx="100" cy="12" r="4" fill="url(#silver)" />
      <path d="M60 52 C74 46 82 54 86 64" stroke="url(#silver)" strokeWidth="3" />
      <path d="M140 52 C126 46 118 54 114 64" stroke="url(#silver)" strokeWidth="3" />

      {/* side scrollwork */}
      <path d="M23 150 C40 135 38 185 23 170 C34 165 32 155 23 150 Z" fill="url(#silver)" />
      <path d="M177 150 C160 135 162 185 177 170 C166 165 168 155 177 150 Z" fill="url(#silver)" />

      {/* bottom crest */}
      <path
        d="M100 286 C88 300 76 296 66 306 C82 302 92 308 100 318 C108 308 118 302 134 306 C124 296 112 300 100 286 Z"
        fill="url(#silver)"
      />
    </svg>
  );
}
