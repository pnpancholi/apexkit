export default function DatabaseConfigFade() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Code Editor Card */}
      <div className="bg-base-300 rounded-2xl p-6 border border-base-content/10 shadow-xl">
        {/* Window Controls */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-error"></div>
          <div className="w-3 h-3 rounded-full bg-warning"></div>
          <div className="w-3 h-3 rounded-full bg-success"></div>
          <span className="ml-2 text-xs text-base-content/60">.env.local</span>
        </div>

        {/* Code Content */}
        <div className="font-mono text-sm space-y-2">
          {/* Comment Line */}
          <div className="text-base-content/50"># Database Configuration</div>

          {/* DATABASE_URL Line */}
          <div className="flex items-center">
            <span className="text-warning">DATABASE_URL</span>
            <span className="text-base-content">=</span>
            <span className="text-success">&quot;postgresql://user:pass@</span>

            {/* Animated Domain Part */}
            <span className="relative inline-block overflow-hidden">
              <span className="text-success animate-domain-1">db.supabase.co</span>
              <span className="text-success animate-domain-2 absolute left-0 opacity-0">
                ep-cool.neon.tech
              </span>
              <span className="text-success animate-domain-3 absolute left-0 opacity-0">
                quiet-sky.fly.dev
              </span>
            </span>

            <span className="text-success">/mydb&quot;</span>
          </div>

          {/* Static Lines */}
          <div className="text-base-content/70">
            <span className="text-warning">NEXT_PUBLIC_URL</span>
            <span className="text-base-content">=</span>
            <span className="text-success">&quot;http://localhost:3000&quot;</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-out-left {
          0% { opacity: 1; transform: translateX(0); }
          45% { opacity: 1; transform: translateX(0); }
          50% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 0; transform: translateX(-20px); }
        }
        
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(20px); }
          45% { opacity: 0; transform: translateX(20px); }
          50% { opacity: 1; transform: translateX(0); }
          95% { opacity: 1; transform: translateX(0); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-domain-1 {
          animation: fade-out-left 9s ease-in-out infinite;
        }
        
        .animate-domain-2 {
          animation: fade-in-right 9s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .animate-domain-3 {
          animation: fade-in-right 9s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        /* Show domain-2 from 3-6s */
        .animate-domain-2 {
          animation: 
            fade-in-right 3s ease-in-out 0s 1 forwards,
            fade-out-left 3s ease-in-out 3s 1 forwards;
        }
        
        /* Show domain-3 from 6-9s then loop */
        .animate-domain-3 {
          animation: 
            fade-in-right 3s ease-in-out 6s infinite;
        }
      `}</style>
    </div>
  )
}
