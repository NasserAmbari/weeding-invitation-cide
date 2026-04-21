import RevealText from "@/components/ui/RevealText";

const ScrollDown = ({ revealed }: { revealed: boolean }) => {
  return (
    <div>
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        style={{
          opacity: revealed ? 1 : 0,
          transition: "opacity 1s ease 2.6s",
        }}
      >
        <h1 className="text-white/50 text-xs tracking-[0.35em] uppercase font-light">
          <RevealText text={"Scroll"} delay={1.3} duration={0.8} />
        </h1>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full rounded-full bg-white"
            style={{
              height: "40%",
              animation: revealed
                ? "scrollDot 1.8s ease-in-out infinite 2.8s"
                : "none",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(280%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ScrollDown;
