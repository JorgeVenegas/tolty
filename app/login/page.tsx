import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HandIcon as HandWaving, Github, AtSign, Lock } from 'lucide-react'
import { signIn } from '@/auth'

export default function LoginPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 flex items-center justify-center">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8">
                {/* Header */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="bg-gray-900 text-white p-2 rounded-lg">
                        <HandWaving className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">Tolty</span>
                </div>

                {/* Welcome Message */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold mb-2">Welcome Back</h1>
                    <p className="text-gray-500">
                        Sign in to your account to continue
                    </p>
                </div>

                {/* Login Form */}
                <form className="space-y-4 mb-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="pl-10"
                                value={""}
                                required
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="pl-10"
                                value={""}
                                required
                                readOnly
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500">
                        Sign In
                    </Button>
                </form>

                {/* GitHub Login */}
                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                </div>

                <form action={async () => {
                    "use server";

                    await signIn("github", { redirectTo: "/" })
                }}>
                    <Button variant="outline" size="sm" className="w-full" type="submit">
                        <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
                    </Button>
                </form>


                {/* Sign Up Link */}
                <p className="text-center mt-6 text-sm text-gray-500">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-orange-400 hover:underline">
                        Sign up
                    </a>
                </p>
            </Card>
        </div>
    )
}