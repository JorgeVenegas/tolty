import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ImageCardProps {
    title: string
    description: string
    imageSrc: string
}

export function ImageCard({ title, description, imageSrc }: ImageCardProps) {
    return (
        <Card className="overflow-hidden">
            <div className="relative h-48">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}