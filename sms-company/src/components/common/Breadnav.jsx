import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";

const Breadnav = ({ pages }) => {
  return (
    <>
      <div className="breadNav">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className=" flex items-center">
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  {pages.indexOf(page) === 0 ? (
                    <Link
                      to={page.href}
                      className={` lg:text-base text-xs hidden md:block ${
                        page.current ? "base font-medium" : "sm font-normal"
                      }  text-primary-grey-600`}
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </Link>
                  ) : (
                    <>
                      <ChevronRightIcon
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Link
                        to={page.href}
                        className={`ml-2  lg:text-base text-xs ${
                          page.current ? " font-medium" : " font-normal"
                        }  text-primary-grey-600`}
                        aria-current={page.current ? "page" : undefined}
                      >
                        {page.name}
                      </Link>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadnav;
