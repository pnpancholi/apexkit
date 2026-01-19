import { ArrowRight, Terminal, LayoutDashboard, Database, Shield, Play, Loader2 } from "lucide-react";

export default function HeroAsset() {
  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto perspective-1000">
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-primary/5 to-secondary/20 blur-[100px] rounded-full mix-blend-screen opacity-50 animate-pulse-slow pointer-events-none"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-transparent to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

        {/* Mian Floating Container - Levitation Effect */}
        <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden animate-float ring-1 ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>

          {/* Browser Header */}
          <div className="relative h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 backdrop-blur-md z-20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm"></div>
            </div>

            <div className="flex-1 flex justify-center ml-4">
              <div className="h-7 w-80 bg-black/20 rounded-md flex items-center justify-center text-xs text-muted-foreground/60 font-mono border border-white/5 shadow-inner">
                <span className="flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  https://apexkit.dev
                </span>
              </div>
            </div>

            <div className="w-16"></div> {/* Spacer balance */}
          </div>

          {/* Main Content Area */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 h-[500px] md:h-[650px] divide-x divide-white/5 bg-background/20">

            {/* Sidebar (Dimmed) */}
            <div className="hidden md:block md:col-span-2 p-4 space-y-6 bg-black/20 backdrop-blur-sm">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-primary/50 rounded-lg shadow-lg shadow-primary/20 mb-8 animate-pulse-slow"></div>
              <div className="space-y-3 opacity-60">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-2 w-full bg-white/10 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="col-span-12 md:col-span-10 p-6 md:p-8 flex flex-col gap-8 bg-gradient-to-b from-transparent to-black/40">

              {/* Header Stats Zone */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Active Users", val: "24.5k", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                  { label: "Requests/s", val: "1.2k", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
                  { label: "Avg Latency", val: "45ms", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" }
                ].map((stat, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${stat.border} ${stat.bg} backdrop-blur-md flex flex-col justify-between group hover:brightness-110 transition-all cursor-default`}>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</span>
                    <span className={`text-2xl font-bold ${stat.color} font-mono mt-1`}>{stat.val}</span>
                  </div>
                ))}
              </div>

              {/* Execution Status Overlay */}
              <div className="absolute bottom-4 right-4 bg-[#1F2430] border border-white/10 rounded-lg p-3 shadow-xl backdrop-blur-md flex items-center gap-3 animate-slide-in-right opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 absolute inset-0 animate-ping"></div>
                </div>
                <div className="text-xs">
                  <div className="text-green-400 font-semibold">Checks Passed</div>
                  <div className="text-muted-foreground">0ms compilation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-cursor-blink {
            animation: cursor-blink 1s step-end infinite;
        }
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </>
  )
}
