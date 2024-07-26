export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="card max-w-full min-w-[280px]">{children}</div>;
}
