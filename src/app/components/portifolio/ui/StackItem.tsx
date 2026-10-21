export default function StackItem({
  name,
  logo,
  color,
}: {
  name: string;
  logo: string;
  color: string;
}) {
  return (
    <div className="glass-card p-6 flex flex-col items-center justify-center gap-4 group hover:border-white/40 transition-all cursor-default rounded-2xl">
      <img
        src={`https://cdn.simpleicons.org/${logo}/${color}`}
        alt={name}
        className="w-10 h-10 transition-opacity"
      />
      <span
        className="text-[9px] tracking-[0.2em] uppercase transition-colors text-center font-medium"
        style={{ color: `#${color}` }}
      >
        {name}
      </span>
    </div>
  );
}