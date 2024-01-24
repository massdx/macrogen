"use client"
import { CheckIcon } from 'lucide-react'
import { Metadata } from 'next'
import React, { useState } from 'react'
import { StepOne } from './components/step-one';
import { StepTwo } from './components/step-two';
import { Card } from '@/components/ui/card';

export type StepperItem = {
    id: number;
    name: string;
    component: React.FC<any>;
}

type Stepper = StepperItem[];

const stepperForm: Stepper = [
    {
        id: 1,
        name: "Info Basic",
        component: StepOne
    },
    {
        id: 2,
        name: "Info de paiement",
        component: StepTwo
    }
]
export default function New() {
    const [active, setActive] = useState(1);

    const ActiveComponent = stepperForm[active - 1]?.component as React.FC<any> | undefined;

    return (
        <div className='grid grid-cols-8 p-5 w-full min-h-screen'>
            <div className='col-span-2 flex flex-col  justify-start pt-20 animate-in  fade-in-10 slide-in-from-left-20 '>
                {stepperForm.map((form, index) => <div key={index}>
                    <div className=' h-[6rem] space-y-2  my-1 '>

                        <div className=' flex gap-5 cursor-pointer' onClick={() => setActive(index +1 )}>
                            <span className={`step   ${active == index +1 && 'active'} ${active > index +1 && 'complete'} `}>
                                {active > index + 1 ? <CheckIcon size={"20"} className='' /> : index + 1}
                            </span>
                            <span className='inline-block'>
                                <div className='text-[0.5rem] text-gray-600'>STEP {index + 1}</div>
                                <div className='font-medium'>{form.name}</div>
                            </span>
                        </div>
                        {stepperForm.length > index + 1 &&   <div className={`h-[3rem] translate-x-[18px] w-[2.4px]  ${active == index +1 ?  'bg-primary' : ''} ${active > index +1 && 'bg-green-500'}`}></div> }
                      
                    </div>
                </div>)}


            </div>
            <Card className='col-span-6  animate-in border border-gray-600  fade-in-5  slide-in-from-left-3/4'>
                {ActiveComponent && <ActiveComponent previous={ () =>  setActive(active - 1 )}   next={() =>{ setActive(active + 1 ) }}/>}
            </Card>

        </div>
    )
}
