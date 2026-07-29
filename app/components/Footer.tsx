import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-500 dark:bg-gray-900 text-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Organization */}
          <div>
            <h2 className="text-xl font-bold">Dev Collaboration Hub</h2>
            <p className="mt-3 text-sm text-gray-200">
              Building real-world open-source software while helping developers
              learn, collaborate, and gain practical experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>

            <nav
              aria-label="Footer Navigation"
              className="flex flex-col gap-2"
            >
              <Link href="/home" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
              <Link href="/contribution" className="hover:text-gray-300 transition-colors" >Contributors</Link>
              <Link href="/contribution-guide" className="hover:text-gray-300 transition-colors">
                Contribution Guide
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Community</h3>

            <a
              href="https://github.com/dev-collaboration-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Organization
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Dev Collaboration Hub. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;