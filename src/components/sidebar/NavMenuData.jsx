import { RxDashboard } from "react-icons/rx";
import { PiHandbag } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

export const NavMenuData = [
    {
        "id": 1,
        "title": "Dashboard",
        "path": "/",
        "icon": <RxDashboard />
      },
      {
        "id": 2,
        "title": "Orders",
        "path": "/orders",
        "icon": <PiHandbag />
      },
      {
        "id": 3,
        "title": "Customers",
        "path": "/customers",
        "icon": <GoPeople />
      },
      {
        "id": 4,
        "title": "Inventories",
        "path": "/inventories",
        "icon": <MdOutlineInventory />
      },
      {
        "id": 5,
        "title": "Converstaions",
        "path": "/conversations",
        "icon": <AiOutlineMessage />
      },
      {
        "id": 6,
        "title": "Settings",
        "path": "/settings",
        "icon": <IoSettingsOutline />
      }
]