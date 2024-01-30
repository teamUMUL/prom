import { AiFillCaretDown, AiFillCaretUp, AiOutlineBook, AiOutlineHome } from "react-icons/ai";
import { SidebarItem } from "../models/SidebarItem";

export const SidebarData: SidebarItem[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Education',
    path: '/education',
    icon: <AiOutlineBook />,
  }
]