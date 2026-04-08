import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  isVisible: boolean;
  darkMode: boolean;
}

export default function MusicPlayer({ isVisible, darkMode }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);

  // Pure vibing music tracks for your portfolio
  const tracks = [
    {
      name: "Heart Of The Ocean",
      url: "/assets/playlist/Heart-Of-The-Ocean.mp3",
      artist: "Chill Beats",
    },
    // Add more local tracks here as you add them to the playlist folder
    // {
    //   name: "Track Name",
    //   url: "https://www.chosic.com/wp-content/uploads/2025/01/Transcendence-chosic.com_.mp3",
    //   artist: "Artist Name",
    // },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      // Auto-play next track
      setCurrentTrack((prev) => (prev + 1) % tracks.length);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    //   audio.removeEventListener("ended", handleEnded);
    };
  }, [tracks.length]);

  const togglePlay = () => {
    if (audioRef.current) {
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch((err) => {
        console.warn("Playback prevented by browser:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <motion.div
          className={`bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isExpanded ? "w-80 h-60" : "w-16 h-16"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Audio element */}
          <audio
            ref={audioRef}
            src={tracks[currentTrack].url}
            preload="metadata"
            loop
          />

          {/* Collapsed view */}
          {!isExpanded && (
            <motion.div
              className="w-16 h-16 flex items-center justify-center cursor-pointer"
              onClick={() => setIsExpanded(true)}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-4 h-4 text-white"
                    animate={isPlaying ? { rotate: 360 } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {isPlaying ? "⏸️" : "▶️"}
                  </motion.div>
                </div>
                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 w-8 h-8 border-2 border-blue-400/50 rounded-full"
                  animate={
                    isPlaying
                      ? { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}

          {/* Expanded view */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Track info */}
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-sm truncate">
                  {tracks[currentTrack].name}
                </h3>
                <p className="text-white/60 text-xs">
                  {tracks[currentTrack].artist}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleTimeChange}
                  className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 ${
                      (currentTime / (duration || 1)) * 100
                    }%, rgba(255,255,255,0.2) ${
                      (currentTime / (duration || 1)) * 100
                    }%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-white/60 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4 mb-3">
                <button
                  onClick={prevTrack}
                  className="text-white/60 hover:text-white transition-colors p-2"
                >
                  ⏮️
                </button>
                <motion.button
                  onClick={togglePlay}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? "⏸️" : "▶️"}
                </motion.button>
                <button
                  onClick={nextTrack}
                  className="text-white/60 hover:text-white transition-colors p-2"
                >
                  ⏭️
                </button>
              </div>

              {/* Volume control */}
              <div className="flex items-center space-x-2">
                <span className="text-white/60 text-xs">🔊</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 ${
                      volume * 100
                    }%, rgba(255,255,255,0.2) ${volume * 100}%)`,
                  }}
                />
                <span className="text-white/60 text-xs w-8 text-right">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
