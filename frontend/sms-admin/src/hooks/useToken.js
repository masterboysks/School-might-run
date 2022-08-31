import { useCookies } from "react-cookie";

export default function useToken() {
  const [cookie] = useCookies(["token"]);
  if (!cookie.cc) return undefined;
  return `${cookie.bc}.${localStorage.getItem("bd")}.${cookie.cc}`;
}
