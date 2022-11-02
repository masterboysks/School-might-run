import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowLongLeftIcon, ArrowLongRightIcon, } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useEffect } from "react";
export default function Pagination({ pagination, setPage }) {
    const [isLastPage, setIsLastPage] = useState(false);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const noOfItems = 5;
    let show;
    pagination?.last_page !== undefined && pagination?.last_page !== 1
        ? (show = true)
        : (show = false);
    const handlePageNumber = (e) => {
        setPage(e.target.innerText);
    };
    useEffect(() => {
        pagination?.last_page === pagination?.current_page
            ? setIsLastPage(true)
            : setIsLastPage(false);
        1 === pagination?.current_page
            ? setIsFirstPage(true)
            : setIsFirstPage(false);
    }, [pagination]);
    if (show) {
        return (_jsxs("nav", { className: "flex items-center justify-between border-t border-gray-200 px-4 sm:px-0", children: [_jsx("div", { className: "-mt-px flex w-0 flex-1", children: _jsxs("div", { onClick: () => {
                            setPage(pagination?.current_page - 1);
                        }, className: `inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${isFirstPage && "pointer-events-none opacity-60"}`, children: [_jsx(ArrowLongLeftIcon, { className: "mr-3 h-5 w-5 ", "aria-hidden": "true" }), "Previous"] }) }), _jsx("div", { children: _jsx("ul", { className: "hidden md:-mt-px md:flex  space-x-3", children: noOfItems < pagination?.last_page
                            ? Array(noOfItems)
                                .fill(true)
                                .map((c, i) => pagination?.current_page < 3 ? (_jsx("li", { className: `inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${pagination?.current_page === i + 1 &&
                                    "border-primary-base text-primary-base"}`, onClick: handlePageNumber, children: i + 1 }, `pagination${i}`)) : pagination?.last_page - pagination?.current_page < 3 ? (_jsx("li", { className: `inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${pagination?.current_page ===
                                    pagination?.last_page - 4 + i &&
                                    "border-primary-base text-primary-base"}`, onClick: handlePageNumber, children: pagination?.last_page - 4 + i }, `pagination${i}`)) : (_jsx("li", { className: `inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${pagination?.current_page ===
                                    i - 2 + pagination?.current_page &&
                                    "border-primary-base text-primary-base"}`, onClick: handlePageNumber, children: i - 2 + pagination?.current_page }, `pagination${i}`)))
                            : Array(pagination?.last_page)
                                .fill(true)
                                .map((c, i) => (_jsx("li", { onClick: handlePageNumber, className: `inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${pagination?.current_page === i + 1 &&
                                    "border-primary-base text-primary-base"}`, children: i + 1 }, `pagination${i}`))) }) }), _jsx("div", { className: "-mt-px flex w-0 flex-1 justify-end", children: _jsxs("div", { onClick: () => {
                            setPage(pagination?.current_page + 1);
                        }, className: `inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${isLastPage && "pointer-events-none opacity-60"}`, children: ["Next", _jsx(ArrowLongRightIcon, { className: "ml-3 h-5 w-5 ", "aria-hidden": "true" })] }) })] }));
    }
    return _jsx(_Fragment, {});
}
