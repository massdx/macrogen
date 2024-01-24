"use client";
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
import { useEffect, useState } from "react";

export default function Home() {
  const [userToken, setUserToken] = useState<string | null>();
  const router = useRouter();
  useEffect(() => {
    const token: string | null | undefined = getLocalUser();
    if (token != undefined) setUserToken(token);

    if (userToken == null) {
      router.push("/connexion");
    } else {
      router.push("/dashboard");
    }
  }, [userToken]);

  return <></>;
}
