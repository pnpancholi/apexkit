export default function FingerprintScan() {
	return (
		<div className="w-full max-w-sm mx-auto">
			<div className="relative">
				{/* Fingerprint Container */}
				<div className="relative w-64 h-64 mx-auto bg-base-200 rounded-3xl flex items-center justify-center shadow-xl border border-base-content/10 overflow-hidden">
					{/* Fingerprint SVG */}
					<svg
						className="w-40 h-40 text-primary"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					>
						<path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>

					{/* Scanning Line */}
					<div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent shadow-lg shadow-accent/50 animate-scan" />

					{/* Success Checkmark - appears after scan */}
					<svg
						className="absolute w-16 h-16 text-success opacity-0 animate-checkmark-appear"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
					>
						<path
							className="animate-checkmark-draw"
							d="M5 13l4 4L19 7"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>

				{/* Status Text */}
				<div className="text-center mt-6">
					<p className="text-sm font-mono text-base-content/70 animate-status-text"></p>
				</div>
			</div>

			<style jsx>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          45% { opacity: 1; }
          50% { top: 100%; opacity: 0; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes checkmark-appear {
          0%, 46% { opacity: 0; }
          50% { opacity: 1; }
          95% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes checkmark-draw {
          0%, 46% { stroke-dashoffset: 100; }
          50% { stroke-dashoffset: 100; }
          70% { stroke-dashoffset: 0; }
          95% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes status-text {
          0%, 46% { 
            content: 'Scanning...';
            color: hsl(var(--bc) / 0.7);
          }
          50%, 95% { 
            content: 'Verified ✓';
            color: hsl(var(--su));
          }
          100% {
            content: 'Scanning...';
            color: hsl(var(--bc) / 0.7);
          }
        }
        
        .animate-scan {
          animation: scan 6s ease-in-out infinite;
        }
        
        .animate-checkmark-appear {
          animation: checkmark-appear 6s ease-out infinite;
        }
        
        .animate-checkmark-draw {
          stroke-dasharray: 100;
          animation: checkmark-draw 6s ease-out infinite;
        }
        
        .animate-status-text::after {
          content: 'Scanning...';
          animation: status-text 6s infinite;
        }
      `}</style>
		</div>
	);
}
