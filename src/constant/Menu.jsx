import { TbAirConditioning } from "react-icons/tb";
import { AiOutlineDatabase , AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { LuKey } from "react-icons/lu";
import { BiCircleThreeQuarter } from "react-icons/bi";



export const navigation = [
  { name: "شرط ها", href: "/", current: false, src: <TbAirConditioning /> },
  { name: "حجم ها", href: "/volume", current: false, src: <BiCircleThreeQuarter /> },
  { name: "داده ها", href: "/data", current: false, src: <AiOutlineDatabase /> },
  { name: "نمودار ها", href: "/chart", current: false, src: <AiOutlineLineChart /> },
  { name: "ساخت باکس جدید", href: "/new-box", current: false, src: <MdOutlineAddBox /> },
  { name: "آدرس", href: "/address", current: false, src: <FiMapPin /> },
  { name: "ایجاد", href: "/create", current: false, src: <GoPlus /> },
  { name: "رمز عبور", href: "/password", current: false, src: <LuKey /> },
];