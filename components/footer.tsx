export function Footer() {
  return (
    <footer className="py-16 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-neutral-900 mb-2">Fernando Miranda</p>
            <p className="text-sm text-neutral-400">fernando.miranda282003@gmail.com</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Fmiranda28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-miranda-7217722b8?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>

          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-100">
          <p className="text-xs text-neutral-400">
            {new Date().getFullYear()} Fernando Miranda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
