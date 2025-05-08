import {getAllNav} from "@/app/lib/models";
import {navFilter} from "@/app/types";
import NavFilter from "@/app/components/navFilter/NavFilter";

export default async function GetNavFilter() {
    const navData: navFilter[] =  await getAllNav();
    return <NavFilter navData={navData} />
}