import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import StaffGeneralDetailsView from "../../../../../../contex/admin/staff/StaffGeneralDetailsView";
const pages = [
    { name: "Staff", href: "#", current: false },
    {
        name: "Staff Information",
        href: "/admin/dashboard/staff/staff-information",
        current: false,
    },
    {
        name: "View",
        href: "#",
        current: true,
    },
];
export default function ViewStaff() {
    const { id } = useParams();
    const generalDetails = useContext(StaffGeneralDetailsView);
    const data = generalDetails.data?.personal;
    useEffect(() => {
        (async () => {
            try {
                const personal = await staffAPI.personalGet(id);
                const address = await staffAPI.addressGet(id);
                const office = await staffAPI.officialGet(id);
                generalDetails.setData({
                    personal: personal?.data?.data,
                    address: address?.data?.data,
                    office: office?.data?.data,
                });
            }
            catch (e) {
                console.log(e);
            }
        })();
        return generalDetails.setData({});
    }, []);
    return (_jsxs("div", { className: "my-6", children: [_jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "rounded-full overflow-hidden object-cover h-24 w-24 border", children: _jsx("img", { src: data?.profile_picture, alt: data?.first_name }) }), _jsxs("div", { className: "", children: [_jsxs("div", { className: "text-lg text-primary-grey-700 font-medium tracking-wide ", children: [_jsx("span", { className: "capitalize", children: data?.first_name }), "  ", data?.last_name] }), _jsx("div", { className: "", children: data?.email })] })] }), _jsx(Outlet, {})] }));
}
