// Simplified on purpose: the parallax effect now lives in the content
// (headline lines, section headers, cards) rather than the background.
// This is just a single static dot-grid texture behind everything - no
// scroll listeners, no motion.
const dotGrid = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><circle cx='2' cy='2' r='1.5' fill='hsl(175, 36%, 36%)' fill-opacity='0.5'/></svg>`
);

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,${dotGrid}")`,
        backgroundSize: "36px 36px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
