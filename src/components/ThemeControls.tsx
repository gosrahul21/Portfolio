import { useEffect, useState } from "react";

interface ThemeControlsProps {
  threeEnabled: boolean;
  setThreeEnabled: (v: boolean) => void;
  motionIntensity: number;
  setMotionIntensity: (v: number) => void;
}

export default function ThemeControls({
  threeEnabled,
  setThreeEnabled,
  motionIntensity,
  setMotionIntensity,
}: ThemeControlsProps) {
  const [primaryHue, setPrimaryHue] = useState<number>(() => {
    const saved = localStorage.getItem("theme.primaryHue");
    return saved ? Number(saved) : 220; // default blue-ish
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-hue",
      String(primaryHue)
    );
    localStorage.setItem("theme.primaryHue", String(primaryHue));
  }, [primaryHue]);

  useEffect(() => {
    localStorage.setItem("theme.threeEnabled", JSON.stringify(threeEnabled));
  }, [threeEnabled]);

  useEffect(() => {
    localStorage.setItem("theme.motionIntensity", String(motionIntensity));
  }, [motionIntensity]);

  return (
    <div className="fixed right-4 bottom-4 z-50 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-72 text-white">
      <div className="font-semibold mb-3">Customize</div>

      <label className="text-sm text-gray-300">Primary color</label>
      <input
        type="range"
        min={0}
        max={360}
        value={primaryHue}
        onChange={(e) => setPrimaryHue(Number(e.target.value))}
        className="w-full"
      />

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-gray-300">3D Background</span>
        <input
          type="checkbox"
          checked={threeEnabled}
          onChange={(e) => setThreeEnabled(e.target.checked)}
        />
      </div>

      <div className="mt-3">
        <label className="text-sm text-gray-300">Motion intensity</label>
        <input
          type="range"
          min={0.2}
          max={2}
          step={0.1}
          value={motionIntensity}
          onChange={(e) => setMotionIntensity(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
