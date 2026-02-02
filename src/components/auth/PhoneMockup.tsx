import { useEffect, useState } from "react";

const reelImages = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=600&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=600&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=600&fit=crop",
];

const feedImages = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=150&h=150&fit=crop",
];

const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reelImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative hidden lg:block w-[380px] h-[580px]">
      {/* Back Phone (Left - Feed) */}
      <div className="absolute left-0 top-8 w-[200px] h-[420px] bg-foreground rounded-[28px] border-[8px] border-foreground shadow-2xl overflow-hidden z-10">
        {/* Camera notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-foreground rounded-full z-30 flex items-center justify-center gap-1">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
          <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        </div>
        {/* Feed Grid - Full screen images */}
        <div className="grid grid-cols-3 gap-0.5 w-full h-full pt-6">
          {feedImages.map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={src}
                alt={`Feed ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Front Phone (Right - Reels Camera) */}
      <div className="absolute right-0 top-0 w-[220px] h-[460px] bg-foreground rounded-[36px] border-[10px] border-foreground shadow-2xl overflow-hidden z-20">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl z-30" />
        
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-1 text-background text-[10px] relative z-20">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 bg-background rounded-full"/>
              <div className="w-1 h-1 bg-background rounded-full"/>
              <div className="w-1 h-1 bg-background rounded-full"/>
              <div className="w-1 h-1 bg-background/50 rounded-full"/>
            </div>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4"/></svg>
          </div>
        </div>

        {/* Reel Content */}
        <div className="absolute inset-0 top-6">
          {reelImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Reel ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
          ))}
        </div>

        {/* Top Controls */}
        <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-4 z-20">
          <svg className="w-6 h-6 text-background drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg className="w-6 h-6 text-background drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3zM5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/>
          </svg>
          <svg className="w-6 h-6 text-background drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </div>

        {/* Left Side Controls */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-background text-[10px] font-bold">Aa</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-background text-xs font-bold">1x</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-background" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
            </svg>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 pb-4 z-20">
          {/* Record Button */}
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 rounded-full border-4 border-background flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
              <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex justify-center gap-6 text-background text-xs font-medium">
            <span className="opacity-60">STORY</span>
            <span className="border-b-2 border-background pb-0.5">REELS</span>
            <span className="opacity-60">LIVE</span>
          </div>
        </div>

        {/* Bottom Right - Camera flip */}
        <div className="absolute bottom-20 right-4 z-20">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-background">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
