import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

export default function Breadnav({ pages }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a
              href="#"
              className="text-primary-grey/80 hover:text-primary-grey"
            >
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className={` ${
                  page.current
                    ? "text-primary-grey font-medium "
                    : "text-primary-grey/80 hover:text-primary-grey"
                } ml-4 text-sm `}
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
