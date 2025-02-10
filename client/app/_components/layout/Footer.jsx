import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {link : "About", href: "/about-us"},
    {link: "Privacy Policy", href: "/privacy-policy"},
    {link: "Licensing", href: "/licensing"},
    {link : "Contact", href: "/contact"},
  ]
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <article className="flex items-center">
          <span className="text-mainGold text-sm">
            © {new Date().getFullYear()}
          </span>
          <Image src="/logo.png" alt="propera logo" width={70} height={70} className="w-auto h-12" />
          <span className="text-mainGold italic text-xs">Built By Salah Shaalaan</span>
        </article>
        <ul className="flex flex-wrap gap-6 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {footerLinks.map((link, index) => (
            <li className="text-base hover:underline" key={index}>
              <Link target="_blank" href={link.href} >{link.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
