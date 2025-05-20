import Link from 'next/link';

type BreadcrumbLink = {
  name: string;
  href: string;
  current?: boolean;
};

type BreadcrumbProps = {
  links: BreadcrumbLink[];
};

export default function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <div className="bg-gray-100 py-2 px-4">
      <div className="container mx-auto">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            {links.map((link, index) => (
              <li key={link.href} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-500">/</span>}
                {link.current ? (
                  <span className="text-gray-600">{link.name}</span>
                ) : (
                  <Link href={link.href} className="text-blue-600 hover:text-blue-800">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
} 