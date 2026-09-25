// Remounts on navigation, so each page's content eases in instead of swapping abruptly.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-enter [--i:1]">{children}</div>
}
