/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HcDOzG3yspQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-slate py-8 md:py-12">
            <div className="container mx-auto max-w-5xl px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="flex flex-col items-start gap-2">
                        <Link href="#" className="flex items-center gap-2" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-lg font-semibold">Acme Inc</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Beautifully designed components that you can copy and paste into your apps.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-sm font-semibold">Quick Links</h4>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Features
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Pricing
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-sm font-semibold">Resources</h4>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Documentation
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Blog
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Support
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Community
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-sm font-semibold">Legal</h4>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Cookie Policy
                        </Link>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
                    <p>&copy; 2024 Acme Inc. All rights reserved.</p>
                    <nav className="flex gap-4">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}