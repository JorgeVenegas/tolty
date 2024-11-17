"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, ArrowRight, RefreshCcw } from 'lucide-react'

type Step = "submitted" | "in-progress" | "fulfilled"

export default function ProgressTracker() {
    const [currentStep, setCurrentStep] = useState<Step>("submitted")

    const steps: { key: Step; label: string }[] = [
        { key: "submitted", label: "Submitted" },
        { key: "in-progress", label: "In Progress" },
        { key: "fulfilled", label: "Fulfilled" },
    ]

    const handleNext = () => {
        const currentIndex = steps.findIndex(step => step.key === currentStep)
        if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1].key)
        }
    }

    const handleReset = () => {
        setCurrentStep("submitted")
    }

    return (
        <div className="grid grid-cols-1">
            <Card className="w-full md:max-w-9xl shadow-lg rounded-3xl flex flex-col">
                <CardHeader className="flex-none">
                    <CardTitle>Order Progress Tracker</CardTitle>
                    <CardDescription>Track the status of your order through our fulfillment process</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-center ">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => (
                            <div key={step.key} className="flex flex-col items-center">
                                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-white
                  ${currentStep === step.key ? 'bg-blue-500' :
                                        steps.findIndex(s => s.key === currentStep) > index ? 'bg-green-500' : 'bg-gray-300'}
                `}>
                                    {steps.findIndex(s => s.key === currentStep) > index ? (
                                        <CheckCircle2 className="w-6 h-6" />
                                    ) : currentStep === step.key ? (
                                        <Circle className="w-6 h-6" />
                                    ) : (
                                        <Circle className="w-6 h-6" />
                                    )}
                                </div>
                                <span className="mt-2 text-sm font-medium">{step.label}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex-col justify-between">
                    <h3 className="text-lg font-semibold mb-2">Current Status: {steps.find(step => step.key === currentStep)?.label}</h3>
                    <p className="text-gray-600">
                        {currentStep === "submitted" && "Your order has been received and is being processed."}
                        {currentStep === "in-progress" && "We're currently working on fulfilling your order."}
                        {currentStep === "fulfilled" && "Your order has been completed and is on its way!"}
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}