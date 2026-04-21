export default function CodeToUI() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* SVG Code Editor */}
      <div className="relative">
        <svg
          width="100%"
          height="280"
          viewBox="0 0 800 280"
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {/* Editor background */}
          <rect width="800" height="280" rx="12" fill="#1f2937" />

          {/* Editor header */}
          <rect x="0" y="0" width="800" height="40" fill="#111827" />

          {/* Window controls */}
          <circle cx="20" cy="20" r="6" fill="#ef4444" />
          <circle cx="40" cy="20" r="6" fill="#f59e0b" />
          <circle cx="60" cy="20" r="6" fill="#10b981" />

          {/* File name */}
          <text x="90" y="25" fill="#9ca3af" fontSize="14" fontFamily="mono">
            Button.jsx
          </text>

          {/* Line numbers */}
          <text x="30" y="70" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            1
          </text>
          <text x="30" y="95" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            2
          </text>
          <text x="30" y="120" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            3
          </text>
          <text x="30" y="145" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            4
          </text>
          <text x="30" y="170" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            5
          </text>
          <text x="30" y="195" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            6
          </text>
          <text x="30" y="220" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            7
          </text>
          <text x="30" y="245" fill="#4b5563" fontSize="14" fontFamily="mono" opacity="0.6">
            8
          </text>

          {/* Code lines with animation */}
          {/* Line 1 */}
          <text
            x="50"
            y="70"
            fill="#d8b4fe"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-1"
          >
            export default function
          </text>
          <text
            x="180"
            y="70"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-1"
          >
            {' '}
          </text>
          <text
            x="187"
            y="70"
            fill="#22d3ee"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-1"
          >
            Button
          </text>
          <text
            x="225"
            y="70"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-1"
          >
            ()
          </text>
          <text
            x="240"
            y="70"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-1"
          >
            {' '}
          </text>
          <text
            x="247"
            y="70"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-1"
          >
            {`{`}
          </text>

          {/* Line 2 */}
          <text
            x="70"
            y="95"
            fill="#d8b4fe"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-2"
          >
            return
          </text>
          <text
            x="120"
            y="95"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-2"
          >
            {' '}
          </text>
          <text
            x="127"
            y="95"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-2"
          >
            (
          </text>

          {/* Line 3 */}
          <text
            x="90"
            y="120"
            fill="#4ade80"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-3"
          >
            &lt;button
          </text>

          {/* Line 4 */}
          <text
            x="110"
            y="145"
            fill="#fbbf24"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-4"
          >
            className
          </text>
          <text
            x="175"
            y="145"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-4"
          >
            =
          </text>
          <text
            x="185"
            y="145"
            fill="#34d399"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-4"
          >
            "px-6 py-3 rounded-lg font-medium"
          </text>

          {/* Line 5 */}
          <text
            x="90"
            y="170"
            fill="#4ade80"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-5"
          >
            &gt;
          </text>

          {/* Line 6 */}
          <text
            x="110"
            y="195"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-6"
          >
            Click me
          </text>

          {/* Line 7 */}
          <text
            x="90"
            y="220"
            fill="#4ade80"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-7"
          >
            &lt;/button&gt;
          </text>

          {/* Line 8 */}
          <text
            x="50"
            y="245"
            fill="#ffffff"
            fontSize="14"
            fontFamily="mono"
            className="animate-line-8"
          >
            {`}`}
          </text>

          {/* Cursor */}
          <rect x="68" y="258" width="2" height="16" fill="#22d3ee" className="animate-pulse" />

          {/* Status bar */}
          <rect x="0" y="260" width="800" height="20" fill="#111827" />
          <text x="20" y="275" fill="#6b7280" fontSize="11" fontFamily="mono">
            TypeScript React
          </text>
          <text x="680" y="275" fill="#6b7280" fontSize="11" fontFamily="mono">
            Live editing...
          </text>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-line-1 { opacity: 0; animation: fadeIn 0.3s ease-out 0.1s forwards; }
        .animate-line-2 { opacity: 0; animation: fadeIn 0.3s ease-out 0.4s forwards; }
        .animate-line-3 { opacity: 0; animation: fadeIn 0.3s ease-out 0.7s forwards; }
        .animate-line-4 { opacity: 0; animation: fadeIn 0.3s ease-out 1.0s forwards; }
        .animate-line-5 { opacity: 0; animation: fadeIn 0.3s ease-out 1.3s forwards; }
        .animate-line-6 { opacity: 0; animation: fadeIn 0.3s ease-out 1.6s forwards; }
        .animate-line-7 { opacity: 0; animation: fadeIn 0.3s ease-out 1.9s forwards; }
        .animate-line-8 { opacity: 0; animation: fadeIn 0.3s ease-out 2.2s forwards; }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
