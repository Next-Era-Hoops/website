import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="body-font border-t border-neh-cyan/20 bg-black">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center">
            <Image src="/next-era-logo.png" alt="Next Era Hoops Logo" width={80} height={40} className="h-8 w-auto" />
          </Link>
          <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-neh-cyan/20 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Next Era Hoops —
            <a
              href="https://instagram.com/nexterahoops"
              className="text-neh-cyan ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @nexterahoops
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="https://instagram.com/nexterahoops" className="ml-3 text-gray-300 hover:text-neh-cyan transition-colors">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
          </span>
        </div>
        <div className="text-xs">Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a> is licensed by CC BY 4.0</div>
      </footer>
    )
}