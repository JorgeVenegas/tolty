'use client'

import React, { Suspense } from 'react';
//const Spline = React.lazy(() => import('@splinetool/react-spline'));
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HandIcon, LayoutDashboard, Users, FileText, Settings, Bell, Search, Menu, TrendingUp, DollarSign, ShoppingCart, ChevronLeft, ChevronRight, Banknote, Star, ThermometerSun, CalendarIcon, AlertCircle } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Pie, PieChart, Cell } from 'recharts'
import { Cloud, Target, Compass, Footprints, Zap, Recycle } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Clipboard, MapPin, Briefcase, Square, Calendar } from 'lucide-react'
import { ImageCard } from '@/components/ImageCard';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface MaterialData {
    id: number
    name: string
    description: string
    image: string
    price: number
    quality: number
    carbonFootprint: number
    thermalEfficiency: number
}


// Material comparison data
const materialData = [
    { subject: 'Durability', A: 120, B: 90, C: 100 },
    { subject: 'Cost Efficiency', A: 98, B: 130, C: 110 },
    { subject: 'Eco-friendliness', A: 86, B: 130, C: 140 },
    { subject: 'Local Availability', A: 99, B: 100, C: 90 },
    { subject: 'Installation Ease', A: 85, B: 90, C: 100 },
    { subject: 'Maintenance', A: 65, B: 85, C: 90 },
    { subject: 'Weather Resistance', A: 90, B: 100, C: 120 },
    { subject: 'Fire Safety', A: 70, B: 95, C: 110 },
]

const materials = [
    { id: 'A', name: 'Recycled Steel', color: '#6366f1' },
    { id: 'B', name: 'Bamboo Composite', color: '#f43f5e' },
    { id: 'C', name: 'Smart Glass', color: '#fbbf24' },
]

const productData = [
    {
        title: "Solar Panel Systems",
        image: "/placeholder.svg?height=200&width=400",
        description: "High-efficiency solar panels designed for optimal energy generation in urban environments.",
        tag: "Energy"
    },
    {
        title: "Smart HVAC Solution",
        image: "/placeholder.svg?height=200&width=400",
        description: "AI-powered climate control system that automatically adjusts to occupancy patterns.",
        tag: "Climate"
    },
    {
        title: "Green Building Materials",
        image: "/placeholder.svg?height=200&width=400",
        description: "Sustainable construction materials made from recycled content.",
        tag: "Materials"
    },
    {
        title: "Water Management System",
        image: "/placeholder.svg?height=200&width=400",
        description: "Smart water recycling and management solution for sustainable buildings.",
        tag: "Water"
    }
]

const projectSummary = {
    name: "Eco-Friendly Office Complex",
    location: "San Francisco, CA",
    type: "Commercial",
    squareMeters: 10000,
    estimatedBudget: "$15,000,000",
    startDate: "2023-09-01",
    endDate: "2025-03-31"
}

const radarData = [
    { subject: 'Durability', A: 120, B: 110, C: 100, fullMark: 150 },
    { subject: 'Cost', A: 98, B: 130, C: 110, fullMark: 150 },
    { subject: 'Eco-friendliness', A: 86, B: 130, C: 140, fullMark: 150 },
    { subject: 'Availability', A: 99, B: 100, C: 90, fullMark: 150 },
    { subject: 'Aesthetics', A: 85, B: 90, C: 100, fullMark: 150 },
    { subject: 'Maintenance', A: 65, B: 85, C: 90, fullMark: 150 },
    { subject: 'Energy Efficiency', A: 90, B: 100, C: 120, fullMark: 150 },
    { subject: 'Local Sourcing', A: 70, B: 95, C: 110, fullMark: 150 },
]

const donutData = [
    { name: 'Carbon Footprint', value: 400 },
    { name: 'Offset', value: 300 },
]

const energyData = [
    { name: 'Renewable', value: 70 },
    { name: 'Non-renewable', value: 30 },
]

const materialsData = [
    { name: 'Eco-friendly', value: 80 },
    { name: 'Standard', value: 20 },
]

const revenueData = [
    { name: 'Jan', value: 1000000 },
    { name: 'Feb', value: 1200000 },
    { name: 'Mar', value: 900000 },
    { name: 'Apr', value: 1500000 },
    { name: 'May', value: 2000000 },
    { name: 'Jun', value: 1800000 },
]

const startDate = new Date("2023-06-01")
const earliestEndDate = new Date("2024-03-01")
const latestEndDate = new Date("2024-06-30")
const today = new Date()

const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
}

const totalDays = latestEndDate.getTime() - startDate.getTime()
const daysPassed = today.getTime() - startDate.getTime()
const progressPercentage = Math.min(Math.max((daysPassed / totalDays) * 100, 0), 100)


const materials2: MaterialData[] = [
    {
        id: 1,
        name: "Eco-Concrete",
        description: "A sustainable concrete mix with reduced carbon emissions and improved durability.",
        image: "/placeholder.svg?height=200&width=300&text=Eco-Concrete",
        price: 85,
        quality: 90,
        carbonFootprint: 30,
        thermalEfficiency: 75,
    },
    {
        id: 2,
        name: "Bamboo Flooring",
        description: "Renewable and durable bamboo flooring with natural aesthetics.",
        image: "/placeholder.svg?height=200&width=300&text=Bamboo+Flooring",
        price: 70,
        quality: 85,
        carbonFootprint: 15,
        thermalEfficiency: 60,
    },
    {
        id: 3,
        name: "Recycled Steel",
        description: "High-strength steel made from recycled materials, reducing environmental impact.",
        image: "/placeholder.svg?height=200&width=300&text=Recycled+Steel",
        price: 90,
        quality: 95,
        carbonFootprint: 40,
        thermalEfficiency: 50,
    },
    {
        id: 4,
        name: "Hemp Insulation",
        description: "Natural, non-toxic insulation material with excellent thermal and acoustic properties.",
        image: "/placeholder.svg?height=200&width=300&text=Hemp+Insulation",
        price: 65,
        quality: 80,
        carbonFootprint: 10,
        thermalEfficiency: 90,
    },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Charts() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [currentProductIndex, setCurrentProductIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    // Agrega 'selectedMaterials' al estado
    const [selectedMaterials, setSelectedMaterials] = useState(
        new Set(materials.map(m => m.id))
    )

    // Función para alternar la selección de materiales
    const toggleMaterial = (materialId: string) => {
        const newSelected = new Set(selectedMaterials)
        if (newSelected.has(materialId)) {
            if (newSelected.size > 1) {
                newSelected.delete(materialId)
            }
        } else {
            newSelected.add(materialId)
        }
        setSelectedMaterials(newSelected)
    }

    const nextProduct = () => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % productData.length)
    }

    const prevProduct = () => {
        setCurrentProductIndex((prevIndex) => (prevIndex - 1 + productData.length) % productData.length)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex">

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">

                <h1 className="text-3xl font-bold text-center mb-4">This is some kind of valuable information! </h1>
                {/* Project Summary */}
                <Card className="bg-white/80 backdrop-blur-sm shadow-md mb-8">
                    <CardHeader>
                        <CardTitle>Project Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Project Name */}
                            <div className="flex items-start space-x-4">
                                <Clipboard className="h-6 w-6 text-gray-600" />
                                <div>
                                    <h3 className="text-lg font-bold text-black">Project Name</h3>
                                    <p className="text-gray-500">{projectSummary.name}</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start space-x-4">
                                <MapPin className="h-6 w-6 text-gray-600" />
                                <div>
                                    <h3 className="text-lg font-bold text-black">Location</h3>
                                    <p className="text-gray-500">{projectSummary.location}</p>
                                </div>
                            </div>

                            {/* Type */}
                            <div className="flex items-start space-x-4">
                                <Briefcase className="h-6 w-6 text-gray-600" />
                                <div>
                                    <h3 className="text-lg font-bold text-black">Type</h3>
                                    <p className="text-gray-500">{projectSummary.type}</p>
                                </div>
                            </div>

                            {/* Square Meters */}
                            <div className="flex items-start space-x-4">
                                <Square className="h-6 w-6 text-gray-600" />
                                <div>
                                    <h3 className="text-lg font-bold text-black">Square Meters</h3>
                                    <p className="text-gray-500"><strong>{projectSummary.squareMeters}</strong></p>
                                </div>
                            </div>

                            {/* Estimated Budget */}
                            <div className="flex items-start space-x-4">
                                <DollarSign className="h-6 w-6 text-gray-600" />
                                <div>
                                    <h3 className="text-lg font-bold text-black">Estimated Budget</h3>
                                    <p className="text-gray-500"><strong>{projectSummary.estimatedBudget}</strong></p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="flex items-start space-x-4">
                                <Calendar className="h-6 w-6 text-gray-600" />
                                <div>
                                    <h3 className="text-lg font-bold text-black">Timeline</h3>
                                    <p className="text-gray-500">{projectSummary.startDate} to {projectSummary.endDate}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Main Characteristics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-600">Weather Zone</span>
                            <Cloud className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Mediterranean</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <span>Mild winters, dry summers</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-600">Objectives</span>
                            <Target className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">3 Key Goals</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <span>Environmental, Efficiency, Sustainability</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-600">Scope</span>
                            <Compass className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">10 Stories</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <span>Including parking and rooftop facilities</span>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 mb-8 shadow-lg">
                    <Card className="w-full mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl">Construction Project Timeline</CardTitle>
                            <CardDescription>Track the progress of your construction project</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="w-5 h-5 text-green-500" />
                                    <span className="font-medium">Start Date:</span>
                                    <span>{formatDate(startDate)}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                                    <span className="font-medium">Estimated Completion:</span>
                                    <span>{formatDate(earliestEndDate)} - {formatDate(latestEndDate)}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Project Start</span>
                                    <span>Estimated Completion Range</span>
                                </div>
                                <div className="relative pt-4">
                                    <Progress value={progressPercentage} className="h-2 w-full" />
                                    <div
                                        className="absolute top-0 left-0 w-2 h-4 bg-green-500 transform -translate-x-1/2"
                                        style={{ left: '0%' }}
                                    />
                                    <div
                                        className="absolute top-0 left-0 w-2 h-4 bg-yellow-500 transform -translate-x-1/2"
                                        style={{ left: `${(earliestEndDate.getTime() - startDate.getTime()) / totalDays * 100}%` }}
                                    />
                                    <div
                                        className="absolute top-0 left-0 w-2 h-4 bg-yellow-500 transform -translate-x-1/2"
                                        style={{ left: '100%' }}
                                    />
                                    <div
                                        className="absolute top-0 left-0 w-3 h-5 bg-blue-500 rounded-full transform -translate-x-1/2"
                                        style={{ left: `${progressPercentage}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-sm font-medium">
                                    <span>{formatDate(startDate)}</span>
                                    <span>{formatDate(latestEndDate)}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium">Current Progress</span>
                                    <span className="text-lg font-bold">{progress}%</span>
                                </div>
                                <Progress value={progress} className="h-4 w-full" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 mb-8">
                    <div className="mx-auto space-y-8">
                        <h4 className="text-2xl font-bold text-center">The best options availabe for your project...</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {materials2.map((material) => (
                                <Card key={material.id} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{material.name}</CardTitle>
                                        <CardDescription>{material.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="aspect-video relative mb-4">
                                            <img
                                                src={material.image}
                                                alt={material.name}
                                                className="absolute inset-0 w-full h-full object-cover rounded-md"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Banknote className="w-4 h-4 mr-2 text-green-500" />
                                                    <span className="text-sm font-medium">Price</span>
                                                </div>
                                                <Progress value={material.price} className="w-2/3" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                                                    <span className="text-sm font-medium">Quality</span>
                                                </div>
                                                <Progress value={material.quality} className="w-2/3" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Recycle className="w-4 h-4 mr-2 text-blue-500" />
                                                    <span className="text-sm font-medium">Carbon Footprint</span>
                                                </div>
                                                <Progress value={material.carbonFootprint} className="w-2/3" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <ThermometerSun className="w-4 h-4 mr-2 text-red-500" />
                                                    <span className="text-sm font-medium">Thermal Efficiency</span>
                                                </div>
                                                <Progress value={material.thermalEfficiency} className="w-2/3" />
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Sustainable</Badge>
                                            <Badge variant="secondary">Eco-friendly</Badge>
                                            <Badge variant="secondary">High Performance</Badge>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Materials Comparison */}
                {/* Material Comparison Chart */}
                <Card className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <CardHeader>
                        <CardTitle>Material Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <div className="w-full h-[400px] flex items-center justify-center">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={materialData}>
                                            <PolarGrid stroke="#e5e7eb" />
                                            <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                                            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#6b7280" />
                                            {materials.map(({ id, name, color }) => (
                                                selectedMaterials.has(id) && (
                                                    <Radar
                                                        key={id}
                                                        name={name}
                                                        dataKey={id}
                                                        stroke={color}
                                                        fill={color}
                                                        fillOpacity={0.3}
                                                    />
                                                )
                                            ))}
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="md:w-48 space-y-4">
                                <h3 className="font-semibold text-sm text-gray-600">Materials</h3>
                                {materials.map(({ id, name, color }) => (
                                    <div key={id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={id}
                                            checked={selectedMaterials.has(id)}
                                            onCheckedChange={() => toggleMaterial(id)}
                                            style={{
                                                backgroundColor: selectedMaterials.has(id) ? color : undefined,
                                                borderColor: color
                                            }}
                                        />
                                        <label htmlFor={id} className="text-sm font-medium leading-none">
                                            {name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>



                {/* Environmental Impact Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-600">Carbon Footprint</span>
                            <Footprints className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="relative">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={[
                                            { name: 'Direct', value: 40 },
                                            { name: 'Indirect', value: 35 },
                                            { name: 'Offset', value: 25 }
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={4}
                                        dataKey="value"
                                    >
                                        <Cell fill="#6366f1" />
                                        <Cell fill="#fbbf24" />
                                        <Cell fill="#f43f5e" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="text-3xl font-bold">57%</div>
                                <div className="text-sm text-gray-500">Reduction</div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                                <span className="text-sm">Direct</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <span className="text-sm">Indirect</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                <span className="text-sm">Offset</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-600">Energy Consumption</span>
                            <Zap className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="relative">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={[
                                            { name: 'Renewable', value: 70 },
                                            { name: 'Grid', value: 20 },
                                            { name: 'Backup', value: 10 }
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={4}
                                        dataKey="value"
                                    >
                                        <Cell fill="#6366f1" />
                                        <Cell fill="#fbbf24" />
                                        <Cell fill="#f43f5e" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="text-3xl font-bold">70%</div>
                                <div className="text-sm text-gray-500">Renewable</div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                                <span className="text-sm">Renewable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <span className="text-sm">Grid</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                <span className="text-sm">Backup</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-600">Eco-friendly Materials</span>
                            <Recycle className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="relative">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={[
                                            { name: 'Recycled', value: 45 },
                                            { name: 'Sustainable', value: 35 },
                                            { name: 'Standard', value: 20 }
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={4}
                                        dataKey="value"
                                    >
                                        <Cell fill="#6366f1" />
                                        <Cell fill="#fbbf24" />
                                        <Cell fill="#f43f5e" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="text-3xl font-bold">80%</div>
                                <div className="text-sm text-gray-500">Eco-friendly</div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                                <span className="text-sm">Recycled</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <span className="text-sm">Sustainable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                <span className="text-sm">Standard</span>
                            </div>
                        </div>
                    </Card>
                </div>


                <div>

                </div>
            </main>
        </div>
    )
}