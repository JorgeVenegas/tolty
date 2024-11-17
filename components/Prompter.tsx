import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HandIcon as Send, Paperclip, Settings2, PlaneTakeoff, Sparkles, TrendingUp, BuildingIcon } from 'lucide-react'
import { auth, } from '@/auth'
import PromptInput from "@/components/PromptInput"
import { ScrollArea } from "@/components/ui/scroll-area"

const Prompter = async () => {
    const session = await auth();

    return (
        <div className="grid grid-cols-1">
            <div className="w-full md:max-w-9xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 flex flex-col justify-between">
                {/* Header */}
                <div className="flex justify-between items-center mb-16 h-fit">
                    <div className="flex items-center gap-2">
                        <div className="bg-gray-900 text-white p-2 rounded-lg">
                            <BuildingIcon className="w-4 h-4" />
                        </div>
                        <span className="font-semibold">Tolty</span>
                    </div>
                </div>

                {/* Welcome Message */}
                <div className="text-center mb-20">
                    <div className="bg-gray-900 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <BuildingIcon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-gray-500 mb-2">{session?.user?.name && `Hi, ${session?.user?.name}`}</h2>
                    <h1 className="text-2xl font-semibold mb-3">Can I help you with anything?</h1>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Ready to assist you with anything you need, from answering questions to providing recommendations. Let's get started!
                    </p>
                </div>

                <PromptInput />
            </div>
        </div >
    )
}

export default Prompter