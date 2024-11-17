import React from 'react'

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link"
import { auth, signIn, signOut } from '@/auth'
import NavSheet from "@/components/NavSheet"
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const PromptMenu = async () => {

    const session = await auth();

    return (
        <div className="flex gap-4 items-center">
            {session && session?.user ? (
                <>
                    <form action={async () => {
                        await signOut({ redirectTo: "/" })
                    }}>
                        <Button variant="outline" size="sm" className="w-full" type="submit">
                            Log out
                        </Button>
                        <LogOut className='size-6 sm:hidden text-red-500' />
                    </form>
                    <Link href={`user/${session?.id}`}>
                        <Avatar className='size-10'>
                            <AvatarImage
                                src={session.user.image || ""}
                                alt={session.user.name || ""}
                            />
                        </Avatar>
                    </Link>
                </>
            ) : (
                <form action={async () => {

                    await signIn("github")
                }}>
                    <Button variant="outline" size="sm" className="w-full" type="submit">
                        Log in
                    </Button>
                </form>
            )}
            <NavSheet />
        </div>
    )
}

export default PromptMenu