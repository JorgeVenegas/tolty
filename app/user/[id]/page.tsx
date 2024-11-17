import { auth } from "@/auth"
import { ImageCard } from "@/components/ImageCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { client } from "@/sanity/lib/client"
import { USER_BY_ID_QUERY } from "@/sanity/lib/queries"
import { Mail, MapPin, LinkIcon } from 'lucide-react'

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id

    const session = await auth();

    const user = await client.fetch(USER_BY_ID_QUERY, { id })

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
            <div className="max-w-6xl mx-auto space-y-8">
                <Card className="w-full">
                    <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
                        <Avatar className="w-24 h-24">
                            <AvatarImage src={user?.image as string} alt="User's profile picture" />
                        </Avatar>
                        <div className="space-y-1 text-center sm:text-left">
                            <CardTitle className="text-2xl">{user?.name}</CardTitle>
                            <CardDescription>{user?.username && `@${user.username}`}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                                <span>{user?.email}</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio">Biography</Label>
                            <p>
                                {user?.bio}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ImageCard
                            title="Project Alpha"
                            description="A revolutionary app for task management"
                            imageSrc="/placeholder.svg?height=200&width=300"
                        />
                        <ImageCard
                            title="Project Beta"
                            description="An AI-powered personal assistant"
                            imageSrc="/placeholder.svg?height=200&width=300"
                        />
                        <ImageCard
                            title="Project Gamma"
                            description="A social platform for book lovers"
                            imageSrc="/placeholder.svg?height=200&width=300"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}