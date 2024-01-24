import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircle2Icon, InfoIcon, ReceiptEuro } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod";

const billingAdressSchema = z.object({
    name: z.string(),
    road: z.string(),
    region: z.string(),
    city: z.string(),
    code: z.string(),
})
const billinginformationSchema = z.object({
    blastService: z.string(),
    strogredPeriod: z.string(),
    orderBy: z.string(),
    orderContact: z.string(),
    email: z.string(),
    additionEmail: z.string(),
    comment: z.string(),
    institution: z.string(),
    number: z.coerce.number(),
    contry: z.string(),
    billingAdress: billingAdressSchema,
    poNumber: z.coerce.number(),
    attn: z.string(),
    coupon: z.string(),
    promotionCode: z.string(),
    requestonPayment: z.string(),


})

export const StepTwo = ({ next, previous }: { next: VoidFunction, previous: VoidFunction }) => {


    const router = useRouter();
    const form = useForm<z.infer<typeof billinginformationSchema>>({
        resolver: zodResolver(billinginformationSchema),
        defaultValues: {

        }
    })
    return (
        <>
            <div className='overflow-hidden'>
                <CardHeader className='animate-in  fade-in-5 slide-in-from-right-10 duration-300'>
                    <CardTitle className='space-x-2 '>
                        <span className=' w-10 h-10 bg-primary/10 rounded-xl inline-flex items-center justify-center'>
                            <ReceiptEuro className='text-primary' size={20} />
                        </span>
                        <span> Billing information </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="animate-in  fade-in-10 slide-in-from-left-10  duration-300">
                    <Form {...form}>


                        <div className='  grid grid-cols-2 gap-x-10 gap-y-5 '>

                            <FormField
                                name='blastService'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Type simple</FormLabel>
                                    <FormControl>
                                        <div className='grid grid-cols-2 gap-5 w-3/6'>
                                            <div className="space-x-2 flex items-center">
                                                <Checkbox id="over" onClick={() => { }} />
                                                <label
                                                    htmlFor="over"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="space-x-2 flex items-center">
                                                <Checkbox id="less" onClick={() => { }} />
                                                <label
                                                    htmlFor="less"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                name='strogredPeriod'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Strogred Period</FormLabel>
                                    <FormControl>
                                        <div className='grid grid-cols-2 gap-5 w-3/6'>
                                            <div className="space-x-2 flex items-center">
                                                <Checkbox id="over" onClick={() => { }} />
                                                <label
                                                    htmlFor="over"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="space-x-2 flex items-center">
                                                <Checkbox id="less" onClick={() => { }} />
                                                <label
                                                    htmlFor="less"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='orderBy'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Order by </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='orderContact'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Actual Order contact </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />

                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Primary Email</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='additionEmail'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Additional Required services</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='comment'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Comment</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='institution'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Instution for billing</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='number'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Instution for billing</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='contry'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Country</FormLabel>
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
                                                Benin
                                            </SelectItem>
                                            <SelectItem value={"Type-2"}>
                                                Ghana
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>}
                            />


                            <FormField
                                name='poNumber'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>PO Number</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />

                            <FormField
                                name='coupon'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Coupon</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                name='promotionCode'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Promotion  code </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                name='requestonPayment'
                                control={form.control}
                                render={({ field }) => <FormItem>
                                    <FormLabel>Request on payement</FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />


                            <FormField
                                control={form.control}
                                name='billingAdress.name'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Billing Address Name </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='billingAdress.region'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Billing Address Region </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='billingAdress.city'
                                render={({ field }) => <FormItem>
                                       <FormLabel>Billing Address City </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='billingAdress.code'
                                render={({ field }) => <FormItem>  <FormLabel>Billing Address Code </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />
                            <FormField
                                control={form.control}
                                name='billingAdress.road'
                                render={({ field }) => <FormItem>
                                    <FormLabel>Billing Address Road </FormLabel>
                                    <FormControl>
                                        <Input className="input" placeholder="" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>}
                            />

                        </div>
                        <div className='mt-10 flex gap-5 items-center'>
                            <Button variant={"outline"} onClick={() => previous()}>
                                <ArrowLeftIcon size={20} />  Précedant
                            </Button>
                            <Button onClick={() => next()}>
                                Suivant <ArrowRightIcon size={20} />
                            </Button>
                            <Dialog>
                                <DialogTrigger>
                                    <Button className='bg-green-500 hover:bg-green-500/90'>
                                        Soumettre
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className='p-0'>
                                    <Confirmation />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </Form>
                </CardContent>
            </div>
        </>
    )
}


export const Confirmation = ({ }) => {

    return <div>
        <CardHeader className=''>
            <CardTitle className='space-y-5 '>
                <CheckCircle2Icon size={50} className='text-green-500' />
                <div>Votre commande à été soumis avec succes</div>
            </CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
            <div className='px-6 py-8 '>Votre commande à été soumis avec succes</div>

            <div className='bg-primary/10 px-6 py-5  '>
                <div className='text-sm pb-4 '>
                    Imprimer la barcode de commande pour envoyé au laboratoir d'Amsterdam
                </div>
                <div className='space-x-2'>
                    <Button variant={"outline"} >
                        DHL
                    </Button>
                    <Button variant={"outline"} >
                        Fedex
                    </Button>
                    <Button variant={"outline"} >
                        UPS
                    </Button>
                    <Button  >
                        Imprimer la barCode
                    </Button>
                </div>
            </div>
        </CardContent>

    </div>
}