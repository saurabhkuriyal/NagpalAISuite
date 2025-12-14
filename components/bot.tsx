
"use client";

export default function Bot() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-64 h-72 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-3xl shadow-2xl flex flex-col items-center pt-6">
        {/* Antenna */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-1.5 h-8 bg-gray-900 rounded-full" />
          <div className="w-4 h-4 bg-red-500 rounded-full mt-1 shadow-lg animate-pulse" />
        </div>

        {/* Head / Face */}
        <div className="w-48 h-40 bg-white/20 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-3 relative">
          <div className="flex items-center gap-6">
            {/* Left eye */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
              <div className="w-7 h-7 bg-black rounded-full animate-pulse" />
            </div>

            {/* Right eye */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
              <div className="w-7 h-7 bg-black rounded-full animate-pulse delay-150" />
            </div>
          </div>

          {/* Mouth / LED bar */}
          <div className="w-32 h-7 bg-black/80 rounded-full flex items-center justify-center overflow-hidden">
            <div className="h-2 bg-green-400 rounded-full w-3/4 animate-pulse" />
          </div>

          {/* Cheek lights */}
          <div className="absolute bottom-3 flex gap-2">
            <span className="w-2 h-2 bg-white/90 rounded-full" />
            <span className="w-2 h-2 bg-white/70 rounded-full" />
            <span className="w-2 h-2 bg-white/50 rounded-full" />
          </div>
        </div>

        {/* Neck / Body panel */}
        <div className="mt-4 w-44 h-14 bg-white/10 rounded-lg flex items-center justify-around px-4">
          <div className="w-10 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-sky-300 rounded-full animate-pulse" />
          </div>
          <div className="w-10 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-rose-300 rounded-full animate-pulse delay-100" />
          </div>
          <div className="w-10 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse delay-200" />
          </div>
        </div>

        {/* Decorative bolts */}
        <div className="absolute left-4 top-20 w-3 h-3 bg-white/40 rounded-full" />
        <div className="absolute right-4 top-20 w-3 h-3 bg-white/40 rounded-full" />

        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl shadow-[0_30px_60px_rgba(2,6,23,0.6)] pointer-events-none" />
      </div>
    </div>
  );
}
