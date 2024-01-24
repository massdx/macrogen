import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, ArrowLeftIcon, ArrowRightIcon, InfoIcon } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod";

const PrimerShcema = z.object({
    primer: z.string(),
    type: z.string(),
    sequence: z.string(),
    conc: z.string(),
    direction: z.string(),
})
const basicInfoShema = z.object({
    type: z.string(),
    addtionelService: z.string(),
    productSize: z.string(),
    tubeType: z.string(),
    plateName: z.string(),
    primer: PrimerShcema,

})

export const StepOne = ({ next, previous }: { next: VoidFunction, previous: VoidFunction }) => {

    console.log(previous);
    const form = useForm<z.infer<typeof basicInfoShema>>({
        resolver: zodResolver(basicInfoShema),
        defaultValues: {

        }
    })
    return (
        <>
            <div className='overflow-hidden'>
                <CardHeader className='animate-in  fade-in-5 slide-in-from-right-10 duration-300'>
                    <CardTitle className='space-x-2 '>
                        <span className=' w-10 h-10 bg-primary/10 rounded-xl inline-flex items-center justify-center'>
                            <InfoIcon className='text-primary' size={20} />
                        </span>
                        <span> Information Basic</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="animate-in  fade-in-10 slide-in-from-left-10  duration-300">
                    <Form {...form}>


                        <div className=' space-y-10'>


                            <FormField
                                control={form.control}
                                name='type'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Type simple</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>

                                            <SelectTrigger className="w-[300px] select">
                                                <SelectValue
                                                    placeholder="Type d'Identification Client"
                                                    defaultValue={"NATIONAL_ID"}
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={"Type-1"}>
                                                Type 1
                                            </SelectItem>
                                            <SelectItem value={"Type-2"}>
                                                Type 2
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>}
                            />

                            <FormField
                                control={form.control}
                                name='addtionelService'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Additional Required services</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger className="w-[300px] select">
                                                <SelectValue
                                                    placeholder="choisir"
                                                />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value={"Type-1"}>
                                                Service Additionnel 1
                                            </SelectItem>
                                            <SelectItem value={"Type-2"}>
                                                Service Additionnel 2
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription className='flex gap-2 text-primary'>
                                        <AlertCircle size={15} /> <span>Our Purification will be processed by enzime and will incur  additional cost </span>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                name='productSize'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Product size</FormLabel>
                                    <FormControl>
                                        <div className='grid grid-cols-2 gap-5 w-3/6'>
                                            <div className="space-x-2 flex items-center">
                                                <Checkbox value={field.value} id="over" onClick={() => { }} />
                                                <label
                                                    htmlFor="over"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Over 630 bp
                                                </label>
                                            </div>
                                            <div className="space-x-2 flex items-center">
                                                <Checkbox value={field.value} id="less" onClick={() => { }} />
                                                <label
                                                    htmlFor="less"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Less then 600p
                                                </label>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                name='tubeType'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Tube type</FormLabel>
                                    <FormControl>
                                        <div className='grid grid-cols-2 gap-5 w-3/6'> <div className="space-x-2 flex items-center">
                                            <Checkbox value={field.value} id="tube" onClick={() => { }} />
                                            <label
                                                htmlFor="tube"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Tube
                                            </label>
                                        </div>
                                            <div className="space-x-2 flex items-center">
                                                <Checkbox value={field.value} id="wellPlate" onClick={() => { }} />
                                                <label
                                                    htmlFor="wellPlate"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    96 Well Plate
                                                </label>
                                            </div></div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                name='plateName'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Plate name </FormLabel>
                                    <FormControl>
                                        <Input className="w-[600px] input " placeholder="Plate Name " />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <div>   <FormLabel className='mb-2 inline-block'>Primer</FormLabel>
                                <div className=' grid grid-cols-3 gap-5'>

                                    <FormField
                                        name='primer.primer'
                                        control={form.control}
                                        render={({ field }) => <FormItem>

                                            <Select onValueChange={field.onChange}>
                                                <FormControl>
                                                    <SelectTrigger className=" select ">
                                                        <SelectValue
                                                            placeholder="choisir"
                                                        />
                                                    </SelectTrigger>
                                                </FormControl>

                                                <SelectContent>
                                                    <SelectItem value={"Type-1"}>
                                                        Primer 1
                                                    </SelectItem>
                                                    <SelectItem value={"Type-2"}>
                                                        Primer 2
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>}
                                    />
                                    <FormField
                                        name='primer.type'
                                        control={form.control}
                                        render={({ field }) => <FormItem>

                                            <FormControl>
                                                <Input className="input " placeholder="Type" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>}
                                    />
                                    <FormField
                                        name='primer.sequence'
                                        control={form.control}
                                        render={({ field }) => <FormItem>

                                            <FormControl>
                                                <Input className=" input " placeholder="Séquence " />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>}
                                    />
                                    <FormField
                                        name='primer.conc'
                                        control={form.control}
                                        render={({ field }) => <FormItem>

                                            <FormControl>
                                                <Input className=" input " placeholder="Conc " />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>}
                                    />
                                    <FormField
                                        name='primer.direction'
                                        control={form.control}
                                        render={({ field }) => <FormItem>

                                            <FormControl>
                                                <Input className=" input " placeholder="Direction " />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 flex gap-5 items-center'>
                            <Button variant={"outline"} onClick={() => previous()}>
                                <ArrowLeftIcon size={20} />  Précedant
                            </Button>
                            <Button onClick={() => next()}>
                                Suivant <ArrowRightIcon size={20} />
                            </Button>
                        </div>
                    </Form>
                </CardContent>
            </div>
        </>
    )
}
