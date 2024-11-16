import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { HandIcon as HandWaving, Send, Paperclip, Settings2, UserCircle2, PlaneTakeoff, Sparkles, TrendingUp } from 'lucide-react'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="bg-gray-900 text-white p-2 rounded-lg">
              <HandWaving className="w-4 h-4" />
            </div>
            <span className="font-semibold">Tolty</span>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <UserCircle2 className="w-5 h-5" />
          </Button>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-20">
          <div className="bg-gray-900 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HandWaving className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-500 mb-2">Hi, Asal Design</h2>
          <h1 className="text-2xl font-semibold mb-3">Can I help you with anything?</h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Ready to assist you with anything you need, from answering questions to providing recommendations. Let's get started!
          </p>
        </div>

        {/* Suggestion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="bg-gray-900 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
              <PlaneTakeoff className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-medium mb-1">Wanderlust Destinations 2024</h3>
            <p className="text-sm text-gray-500">Must-Visit Places</p>
          </Card>

          <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="bg-gray-900 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-medium mb-1">Tolty AI: What Sets Us Apart</h3>
            <p className="text-sm text-gray-500">Key Differentiators</p>
          </Card>

          <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="bg-gray-900 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-medium mb-1">Design Trends on TikTok 2024</h3>
            <p className="text-sm text-gray-500">Trending Now</p>
          </Card>
        </div>

        {/* Input Area */}
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings2 className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Paperclip className="w-4 h-4" />
          </Button>
          <div className="relative flex-1">
            <Input
              placeholder="Ask Tolty anything..."
              className="pr-20 rounded-full border-gray-200"
            />
            <Button
              className="absolute right-1 top-1 rounded-full bg-orange-400 hover:bg-orange-500"
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
