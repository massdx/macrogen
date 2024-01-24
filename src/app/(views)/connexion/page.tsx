"use client"

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { fakeLogin, login } from "@/services/auth-services";
import { setLocalUser } from "@/services/local-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeIcon, EyeOff, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const authUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
})
export default function Login(): ReactElement {
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof authUserSchema>>({
        resolver: zodResolver(authUserSchema)
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    const onSubmit = async (data: any) => {

        try {

            setIsLoading(true);

            //const result = await login({ email: data.email, password: data.password });

            const result = await fakeLogin() ;
            console.log(result);
            if (result == null) {
                toast({
                    title: "Probleme de connexion",
                    description: "Identifiant incorrect"
                })
            } else {
            
                setLocalUser(result.token as string);
                router.replace("/");
                toast({
                    title: "Bienvenu",
                    description: "connection reussie"
                });
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }   

    }



    return <div className=" h-screen w-full bg-primary  flex items-center justify-center">
        <Card className="bg-white w-full px-5 md:px-0  md:w-[27rem]  py-3 border shadow-sm">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <h2 className="mt-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                 Macro<span className="text-primary">Gen</span>
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-4" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-1 ">
                            <Input
                                {...register("email")}
                                placeholder="Identifiant ou Email"
                            />
                            {errors.email && <span className="text-xs text-red-500 fade-in-5">Ce champ est requis</span>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            
                        </div>
                        <div className="mt-1 relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                {...register("password")}

                                placeholder="Mot de passe" />
                            {errors.password && <span className="text-xs text-red-500 fade-in-5">Ce champ est requis</span>}
                            {showPassword ? <EyeOffIcon className="absolute top-0 right-0 w-5 h-5  -translate-x-4 translate-y-3" onClick={togglePassword} /> : <EyeIcon className="absolute top-0 right-0 w-5 h-5 text-gray-400 -translate-x-4 translate-y-3" onClick={togglePassword} />}
                        </div>
                    </div>

                    <div>

                        <Button disabled={isLoading} type="submit" className="w-full overflow-hidden mt-3">
                            {isLoading ? <Spinner /> : "Se connection"}
                        </Button>
                        <Button disabled={isLoading} type="submit" variant={"ghost"} className="w-full text-primary overflow-hidden mt-3">
                            {isLoading ? <Spinner /> : "Mot de passe oublié"}
                        </Button>
                    </div>
                </form>

            </div>
        </Card>
    </div>


}