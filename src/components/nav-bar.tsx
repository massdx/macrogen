"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { usePathname, useRouter } from "next/navigation";
import { deleteLocalUser } from "@/services/local-service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BellIcon, BotIcon, CalendarDaysIcon, HistoryIcon, LayoutDashboardIcon, ListOrderedIcon, MapPinIcon, SettingsIcon } from "lucide-react";



const Navbar = () => {
    const [search, setSearch] = useState<string>("");
    const [scrolling, setScrolling] = useState(false);
    const links = [
        {
            name: "Dashboard",
            link: "/",
            icon: <LayoutDashboardIcon size={20} />,
        },
        {
            name: " Commandes",
            link: "/",
            icon: <ListOrderedIcon  size={20} />,
        },
        {
            name: "Historique",
            link: "/",
            icon: <HistoryIcon size={20} />,
        },
    ];
    const router = useRouter();
    const pathname = usePathname();
    const handleLogOut = () => {
        deleteLocalUser()
            .then(() => router.replace("/"))
            .catch((e) => console.error(e));
    };

    const handleScroll = () => {
        setScrolling(window.scrollY > 100);
    };

    useEffect(() => {
        document.addEventListener("scroll", () => handleScroll());
    });
    return (
        <header
            className={` backdrop-blur-lg fixed w-full z-50 border-b ${scrolling ? "bg-purple-100/90  " : "bg-white/80 "
                }`}
        >
            <div className="md:w-[80%]  w-11/12  mx-auto  h-14 flex justify-between items-center ">
               
                    <div className="flex items-baseline space-x-4">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.link}
                                className={`${pathname == link.link
                                    ? "text-gray-900 font-medium "
                                    : "text-gray-600"
                                    } 0  flex items-center gap-1  hover:text-gray-900 rounded-md px-3 py-2 text-sm font-normal`}
                            >
                                <span> {link.icon}</span>
                                <span> {link.name}</span>
                            </Link>
                        ))}

                    </div>
                  
                    <div className="flex items-center">

                        <div className="space-x-3 mx-2  flex ">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1">
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className=" rounded-full hover:bg-gray-200"
                                    >
                                        <SettingsIcon className="w-5 h-auto " />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem className="flex items-center gap-1">
                                        <Link
                                            href={"/destination"}
                                            passHref
                                            className={`${pathname == "/destination"
                                                ? " font-medium text-gray-900"
                                                : "text-gray-600"
                                                }  flex items-center gap-1`}
                                        >
                                            <span>
                                                <MapPinIcon className="w-4 h-4 " />
                                            </span>
                                            Destination
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-1">
                                        <span>
                                            <CalendarDaysIcon />
                                        </span>
                                        Template de voyage
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="">
                                        <Link
                                            href={"/bus"}
                                            passHref
                                            className={`${pathname == "/bus"
                                                ? " font-medium text-gray-900"
                                                : "text-gray-600"
                                                }  flex items-center gap-1`}
                                        >
                                            <span>
                                                <SettingsIcon />
                                            </span>
                                            Bus
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-1">
                                        <Link
                                            href={"/agence"}
                                            passHref
                                            className={`${pathname == "/agence"
                                                ? " font-medium text-gray-900"
                                                : "text-gray-600"
                                                }  flex items-center gap-1`}
                                        >
                                            <span>
                                                <BotIcon className="w-4 h-4 " />
                                            </span>
                                            Agence
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                                variant={"ghost"}
                                size={"icon"}
                                className=" rounded-full hover:bg-gray-200"
                            >
                                <BellIcon className="w-5 h-auto" />
                            </Button>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>jxs@gmail.com</DropdownMenuItem>

                                    <DropdownMenuItem>Parametres</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-500" onClick={handleLogOut}>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                
            </div>
        </header>
    );
};

export default Navbar;

