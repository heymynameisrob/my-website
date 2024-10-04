export const NowPlayingIcon = () => (
  <div className="grid items-center">
    <span className="relative flex items-center justify-between w-3 h-3 gap-px">
      <span className="w-1 h-full bg-[#1db954] animate-[nowPlayingAnimation_2.2s_ease_infinite_alternate] origin-bottom"></span>
      <span className="w-1 h-full bg-[#1db954] animate-[nowPlayingAnimation_2.2s_ease_infinite_-2.2s_alternate] origin-bottom"></span>
      <span className="w-1 h-full bg-[#1db954] animate-[nowPlayingAnimation_2.2s_ease_infinite_-3.7s_alternate] origin-bottom"></span>
    </span>
  </div>
);
