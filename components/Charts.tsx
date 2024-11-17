"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Building, DollarSign, Package2, Ruler, Info, Download, ExternalLink, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

//const Spline = React.lazy(() => import('@splinetool/react-spline'));
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Pie, PieChart, Cell } from 'recharts'
import { Cloud, Target, Compass, Footprints, Zap, Recycle } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"


const projectDetails = {
    location: "San Francisco, CA",
    type: "Corporate Office",
    budget: "$50,000,000",
    concreteVolume: "15,000 m³",
    floorArea: "25,000 m²",
    estimatedCompletion: "18 months"
}

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

const materials1 = [
    { id: 'A', name: 'Recycled Steel', color: '#6366f1' },
    { id: 'B', name: 'Bamboo Composite', color: '#f43f5e' },
    { id: 'C', name: 'Smart Glass', color: '#fbbf24' },
]

const materials = [
    {
        id: 'A',
        name: "Vertua Ultra Concrete",
        description: "Low-carbon concrete designed for sustainable construction",
        image: "data:image/jpeg;base64,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",
        costImpact: 5,
        co2Reduction: 70,
        efficiency: 90,
        durability: 95,
        projectDuration: 0,
        rating: 4.8,
        color: "#4CAF50" // Green
    },
    {
        id: "B",
        name: "Global Ready-Mix Concrete",
        description: "High-quality ready-mix concrete optimized for performance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgnRbx3C8J2KvL6qpATxSPy84AuII0k9FuQ&s",
        costImpact: 10,
        co2Reduction: 20,
        efficiency: 95,
        durability: 90,
        projectDuration: 0,
        rating: 4.6,
        color: "#2196F3" // Blue
    },
    {
        id: "C",
        name: "Cemex EcoMix",
        description: "Eco-friendly concrete mix with recycled aggregates",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMF0-L774Racip3LZOkm2LbLyehxvpaJyMw&s",
        costImpact: -3,
        co2Reduction: 50,
        efficiency: 88,
        durability: 85,
        projectDuration: -1,
        rating: 4.4,
        color: "#FF9800" // Orange
    },
    {
        id: "D",
        name: "Hydratium Cement",
        description: "Advanced hydraulic cement with improved workability",
        image: "https://alef.mx/wp-content/uploads/2016/03/Vaciado-de-Cemento-1024x597.jpg",
        costImpact: 2,
        co2Reduction: 30,
        efficiency: 92,
        durability: 88,
        projectDuration: 1,
        rating: 4.3,
        color: "#9C27B0" // Purple
    },
    {
        id: "E",
        name: "Cemex RapidSet",
        description: "Fast-setting concrete ideal for time-sensitive projects",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOMp5JwD6FRsJe9SHsi18r50QL2_GOCjcfA&s",
        costImpact: 7,
        co2Reduction: 15,
        efficiency: 97,
        durability: 92,
        projectDuration: -2,
        rating: 4.7,
        color: "#FF5722" // Red-Orange
    },
    {
        id: "F",
        name: "Thermo Concrete",
        description: "Thermal-insulated concrete for energy-efficient buildings",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdarRA_Ytfs1M9VQt3e3GSJ4XR4avCCNO2Fg&s",
        costImpact: 8,
        co2Reduction: 25,
        efficiency: 90,
        durability: 89,
        projectDuration: 0,
        rating: 4.5,
        color: "#00BCD4" // Cyan
    }
];

const bimPhases = [
    "Project Setup",
    "3D Modeling",
    "Coordination",
    "Documentation",
    "Analysis",
    "Final Review"
]

export default function ConstructionMaterialsComparison() {
    const [selectedMaterial, setSelectedMaterial] = useState(materials[0].name)
    const [currentBimPhase, setCurrentBimPhase] = useState(0)
    const [bimProgress, setBimProgress] = useState(0)
    const [bimFileReady, setBimFileReady] = useState(false)

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


    const [selectedMaterials, setSelectedMaterials] = useState(
        new Set(materials.map(m => m.name))
    )

    return (
        <>
            <div className="p-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    <h1 className="text-3xl font-bold text-center mb-8">Construction Materials Comparison Dashboard</h1>

                    {/* Project Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Overview</CardTitle>
                            <CardDescription>Key details about the construction project</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5 text-blue-500" />
                                <span><strong>Location:</strong> {projectDetails.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Building className="w-5 h-5 text-green-500" />
                                <span><strong>Type:</strong> {projectDetails.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <DollarSign className="w-5 h-5 text-yellow-500" />
                                <span><strong>Budget:</strong> {projectDetails.budget}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Package2 className="w-5 h-5 text-purple-500" />
                                <span><strong>Concrete Volume:</strong> {projectDetails.concreteVolume}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Ruler className="w-5 h-5 text-red-500" />
                                <span><strong>Floor Area:</strong> {projectDetails.floorArea}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Info className="w-5 h-5 text-indigo-500" />
                                <span><strong>Est. Completion:</strong> {projectDetails.estimatedCompletion}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Material Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {materials.map((material) => (
                            <Card key={material.name} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{material.name}</CardTitle>
                                    <CardDescription>{material.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <img src={material.image} alt={material.name} className="w-full h-32 object-cover rounded-md mb-4" />
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span>Cost Impact:</span>
                                            <Badge variant={material.costImpact < 0 ? "success" : "destructive"}>
                                                {material.costImpact > 0 ? "+" : ""}{material.costImpact}%
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>CO2 Reduction:</span>
                                            <Badge variant="success">{material.co2Reduction}%</Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Efficiency:</span>
                                            <Progress value={material.efficiency} className="w-1/2" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Durability:</span>
                                            <Progress value={material.durability} className="w-1/2" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Project Duration:</span>
                                            <Badge variant={material.projectDuration <= 0 ? "success" : "destructive"}>
                                                {material.projectDuration > 0 ? "+" : ""}{material.projectDuration} months
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Rating:</span>
                                            <div className="flex items-center">
                                                <span className="mr-1">{material.rating}</span>
                                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
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
                                                {materials1.map(({ id, name, color }) => (
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

                    <Card className="w-full max-w-7xl mx-auto">
                        <CardHeader>
                            <CardTitle>BIM Project Development</CardTitle>
                            <CardDescription>Track the progress of your BIM project</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Current Phase:</span>
                                <Badge variant="secondary">{bimPhases[currentBimPhase]}</Badge>
                            </div>
                            <Progress value={bimProgress} className="w-full" />
                            <div className="text-sm text-muted-foreground">
                                {bimFileReady ? (
                                    <span className="flex items-center text-green-500">
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        BIM file is ready for download and viewing
                                    </span>
                                ) : (
                                    `Progress: ${bimProgress}% - ${bimPhases[currentBimPhase]}`
                                )}
                            </div>
                            <div className="flex space-x-4">
                                <Button
                                    onClick={() => alert("Downloading BIM file...")}
                                    disabled={!bimFileReady}
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download BIM File
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => alert("Opening BIM file in Revit...")}
                                    disabled={!bimFileReady}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Open in Revit
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}