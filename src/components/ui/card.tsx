export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="shadow-xl p-5 rounded-xl">{children}</div>;
}
