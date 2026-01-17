import { ArrowRight, Terminal, LayoutDashboard, Database, Shield, Play } from "lucide-react";
export default function HeroAsset() {
  return (
    <>
      {/* Product Preview / Dashboard Mockup */}
      <div className="relative w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur opacity-30"></div>
        <div className="relative rounded-xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Browser Header */}
          <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="h-6 w-64 bg-white/5 rounded-full flex items-center justify-center text-xs text-muted-foreground font-mono">
                yourcompany.com
              </div>
            </div>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10 h-[400px] md:h-[600px]">
            {/* Sidebar */}
            <div className="hidden md:block md:col-span-2 p-4 space-y-4 bg-white/2">
              <div className="h-8 w-8 bg-primary/20 rounded mb-8"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-full bg-white/5 rounded hover:bg-white/10 transition-colors"></div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-10 p-6 md:p-8 bg-background/50">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="h-8 w-48 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 w-32 bg-white/5 rounded"></div>
                </div>
                <div className="h-10 w-32 bg-primary/20 rounded"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Shield, color: "text-primary", label: "Auth Users" },
                  { icon: Database, color: "text-secondary", label: "Database Query" },
                  { icon: LayoutDashboard, color: "text-accent", label: "API Requests" }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-lg border border-white/5 bg-white/5">
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                    <div className="h-6 w-24 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 w-16 bg-white/5 rounded"></div>
                  </div>
                ))}
              </div>

              {/* Code Preview Section */}
              <div className="rounded-lg border border-white/10 bg-[#0D1117] p-4 font-mono text-sm overflow-hidden relative">
                <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Terminal className="w-3 h-3" /> tsx
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <div className="flex"><span className="text-primary">import </span> {"{"} auth {"}"} <span className="text-primary"> from </span> <span className="text-green-300"> "@/lib/auth"</span>;</div>
                  <div className="flex"><span className="text-primary">import</span> {"{"} db {"}"} <span className="text-primary">from</span> <span className="text-green-300">"@/db"</span>;</div>
                  <div className="h-2"></div>
                  <div className="flex"><span className="text-primary">export</span> <span className="text-secondary">async</span> <span className="text-primary">function</span> <span className="text-yellow-300">signup</span>(formData: FormData) {"{"}</div>
                  <div className="pl-4 flex"><span className="text-muted-foreground">// 1. Type-safe validation & auth</span></div>
                  <div className="pl-4 flex"><span className="text-primary">const</span> session = <span className="text-primary">await</span> auth.<span className="text-blue-400">validateRequest</span>();</div>
                  <div className="pl-4 flex"><span className="text-primary">if</span> (!session) <span className="text-primary">throw</span> <span className="text-primary">new</span> <span className="text-yellow-300">Error</span>(<span className="text-green-300">"Unauthorized"</span>);</div>
                  <div className="h-2"></div>
                  <div className="pl-4 flex"><span className="text-muted-foreground">// 2. Create user with full type safety</span></div>
                  <div className="pl-4 flex"><span className="text-primary">const</span> user = <span className="text-primary">await</span> db.<span className="text-blue-400">user</span>.<span className="text-blue-400">create</span>({"{"}</div>
                  <div className="pl-8 flex">email: formData.<span className="text-blue-400">get</span>(<span className="text-green-300">"email"</span>),</div>
                  <div className="pl-8 flex">role: <span className="text-green-300">"admin"</span>,</div>
                  <div className="pl-4 flex">{"}"});</div>
                  <div className="h-2"></div>
                  <div className="pl-4 flex"><span className="text-primary">return</span> redirect(<span className="text-green-300">"/dashboard"</span>);</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
