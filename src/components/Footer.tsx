export default function Footer() {
  return (
    <footer className="py-8 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Aleksa Vlaški
        </p>
        <a
          href="#"
          className="text-muted hover:text-accent transition-colors duration-200 text-sm"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
