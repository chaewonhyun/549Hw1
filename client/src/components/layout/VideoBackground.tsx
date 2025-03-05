import { useEffect, useRef } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video more for subtlety
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[3px] z-10" />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover opacity-75"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}