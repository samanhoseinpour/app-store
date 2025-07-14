import Image from 'next/image';
import Link from 'next/link';

export const navbarLinks = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Apps', href: '/apps' },
  { id: 3, title: 'Community', href: '/community' },
];

const Navbar = () => {
  return (
    <section className="mx-auto container py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Image src="/logo.png" alt="website logo" width={80} height={80} />
          {navbarLinks.map(({ id, href, title }) => (
            <div key={id}>
              <Link key={id} href={href}>
                {title}
              </Link>
            </div>
          ))}
        </div>

        <Link href="/">
          <button className="border px-6 py-1.5 rounded-full">
            Share Apps
          </button>
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
