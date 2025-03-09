import Link from 'next/link'
import Image from 'next/image'

export default function Header() { 
  return (
    <header className="body-font border-b border-neh-cyan/20 bg-black sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <Image src="/next-era-logo-horizontal.png" alt="Next Era Hoops Logo" width={240} height={120} className="h-12 w-auto" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/#about" className="mr-5 hover:text-neh-cyan transition-colors">
            About
          </Link>
          <Link href="/#purpose" className="mr-5 hover:text-neh-cyan transition-colors">
            Purpose
          </Link>
          <Link href="/#philosophy" className="mr-5 hover:text-neh-cyan transition-colors">
            Philosophy
          </Link>
          <Link href="/tournaments" className="mr-5 hover:text-neh-cyan transition-colors">
            Tournaments
          </Link>
          <Link href="/#contact" className="hover:text-neh-cyan transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}