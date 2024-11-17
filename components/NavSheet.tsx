import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { MenuIcon, MountainIcon, HomeIcon, LayoutGridIcon, UsersIcon, ActivityIcon } from "lucide-react"
import Link from "next/link"


const NavSheet = async () => {

    const session = await auth();

    return (
        < Sheet >
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                    <MenuIcon className="h-12 w-12" />
                    <span className="sr-only">Toggle navigation</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
                <SheetTitle>Menu</SheetTitle>
                <div className="flex h-full flex-col justify-between py-6">
                    <div className="space-y-6">
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
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavSheet