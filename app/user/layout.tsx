import "@/app/globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                <div className="pt-12">
                    {children}
                </div>
            </body>
        </html>
    );
}
