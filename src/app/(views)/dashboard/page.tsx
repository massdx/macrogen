
"use client";
import React from 'react'
import Navbar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLocalUser, getUserCookie } from "@/services/local-service";
import { hasCookie } from "cookies-next";
import {
    BarChart3Icon,
    InfoIcon,
    MicroscopeIcon,
    MoreHorizontalIcon,
    PackageIcon,
    PlusIcon,
    User2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
export default function Dashboard() {
    const router = useRouter();
    return (
        <>
            <Navbar />
            <section className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto h-screen flex items-center justify-center ">
                <div></div>
                <section className=" w-full h-8/12  ">
                    <div className="space-x-5 flex mb-10 flex-wrap w-full justify-center ">
                        <div className="flex flex-col gap-2 text-sm text-center  animate-in  ">
                            <Button
                                onClick={() => router.push("/new")}
                                size={"xl"}
                                className="bg-primary  m-0   shadow-blue-300/50 shadow-lg text-white"
                            >
                                <PlusIcon size={"25"} />
                            </Button>
                            commande
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-center animate-in  ">
                            <Button
                                size={"xl"}
                                className="bg-green-500 hover:bg-green-500/90 m-0   shadow-green-300/50 shadow-lg text-white"
                            >
                                <BarChart3Icon size={"25"} />
                            </Button>
                            Status
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-center ">
                            <Button
                                size={"xl"}
                                className="bg-orange-500  m-0  hover:bg-orange-500/90 shadow-orange-300/50 shadow-lg text-white"
                            >
                                <BarChart3Icon size={"25"} />
                            </Button>
                            Historique
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-center ">
                            <Button
                                size={"xl"}
                                className="bg-zinc-500 hover:bg-green-500/90 m-0   shadow-black-zinc-300/50 shadow-lg text-white"
                            >
                                <User2Icon size={"25"} />
                            </Button>
                            Compte
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-center ">
                            <Button
                                size={"xl"}
                                className="bg-transparent hover:bg-white  border border-gray-300   m-0    text-gray-500"
                            >
                                <MoreHorizontalIcon size={"25"} />
                            </Button>
                            Autres
                        </div>
                    </div>
                    <div>
                        <Card className="animate-in slide-in-from-top-14 duration-300 h-[35rem]">
                            <CardHeader>
                                <CardTitle className="space-x-2 ">
                                    <span className=" w-10 h-10 bg-primary/10 rounded-xl inline-flex items-center justify-center">
                                        <PackageIcon className="text-gray-600" size={20} />
                                    </span>
                                    <span>
                                        {" "}
                                        Encours de livraison <span className="">...</span>{" "}
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <span className=" p-3 bg-gray-100 rounded-md text-gray-500  ">
                                    Tableau de la liste des commande ici{" "}
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </section>
        </>
    )
}
