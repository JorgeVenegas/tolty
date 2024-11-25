/**
 * v0 by Vercel.
 * @see https://v0.dev/t/65s08PdDe0f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { auth, signIn } from '@/auth'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import NavSheet from "@/components/NavSheet";
import { BuildingIcon } from "lucide-react";


export default async function NavBar() {

    const session = await auth();

    return (
        <div className="fixed top-0 flex w-full z-50">
            <div className="hidden">
                <div className="flex h-full flex-col justify-between py-6 px-4">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 font-bold" prefetch={false}>
                            <BuildingIcon className="h-6 w-6" />
                            <span className="text-lg">Tolty</span>
                        </Link>
                        <nav className="space-y-1">
                            <Link
                                href="/"
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <HomeIcon className="h-5 w-5" />
                                Home
                            </Link>
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <LayoutGridIcon className="h-5 w-5" />
                                Dashboard
                            </Link>
                            <Link
                                href={`/user/${session?.id}`}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <UsersIcon className="h-5 w-5" />
                                Profile
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        {session && session?.user ? (
                            <Link href={`user/${session?.id}`}>
                                <Avatar className='size-10'>
                                    <AvatarImage
                                        src={session.user.image || ""}
                                        alt={session.user.name || ""}
                                    />
                                </Avatar>
                            </Link>
                        ) : (
                            <form action={async () => {
                                "use server";

                                await signIn("github")
                            }}>
                                <Button variant="outline" size="sm" className="w-full" type="submit">
                                    Log in
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 font-bold" prefetch={false}>
                            <BuildingIcon className="h-6 w-6" />
                            <span className="text-lg">Tolty</span>
                        </Link>
                        <NavSheet />
                    </div>
                </header>
            </div>
        </div>
    )
}

function ActivityIcon(props) {
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
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
        </svg>
    )
}


function GlobeIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}


function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LayoutGridIcon(props) {
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
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    )
}


function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
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


function UsersIcon(props) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}