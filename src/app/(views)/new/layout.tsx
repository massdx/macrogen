import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Nouvel commande',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="bg-gray-100">
            <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto min-h-screen flex items-center justify-center">
                {children}
            </div>
        </section>
       );
}
