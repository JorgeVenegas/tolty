"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askPrompt } from '@/lib/actions';
import { Paperclip, PlaneTakeoff, Send, Settings2, Sparkles, TrendingUp } from 'lucide-react';
import React, { useActionState, useState } from 'react'

interface Message {
    author: string;
    text: string;
}

const PromptInput = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleFromSubmit = async (prevState: any, formData: FormData) => {
        const prompt = formData.get("prompt") as string;

        const newMessage: Message = { author: "user", text: prompt }

        setMessages((prevMessages) => [...prevMessages, newMessage]);

        await new Promise((resolve) => setTimeout(resolve, 0));

        try {

            const response = await askPrompt(prevState, formData)

            const newMessageBack: Message = { author: "tolty", text: response.messageBack }

            if (response.status == "SUCCESS") {
                setMessages((prevMessages) => [...prevMessages, newMessageBack]);
            }
            return response;

        } catch (error) {
            return { ...prevState, error: "Unexpected error", status: "ERROR" }
        }
    };

    const initialFormState = {
        error: "",
        status: "initial"
    }

    const [_, formSubmitAction, isPending] = useActionState(handleFromSubmit, initialFormState);

    return (
        <>
            {messages.length == 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-fit">
                    <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="bg-gray-900 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                            <PlaneTakeoff className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-medium mb-1">Help me plan a residential development in Monterrey</h3>
                        <p className="text-sm text-gray-500">Project Dev</p>
                    </Card>

                    <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="bg-gray-900 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-medium mb-1">Compare the highest quality material options for my project</h3>
                        <p className="text-sm text-gray-500">Comparission</p>
                    </Card>

                    <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="bg-gray-900 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                            <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-medium mb-1">Review last project KPIs</h3>
                        <p className="text-sm text-gray-500">Analytics</p>
                    </Card>
                </div>
            ) : (
                <ScrollArea className="h-[400px] w-full rounded border p-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.author === "user" ? "justify-end" : "justify-start"
                                } mb-4`}
                        >
                            <div
                                className={`max-w-[70%] rounded-lg p-3 ${message.author === "user"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            )}
            <div className="flex gap-2 items-center mt-4">
                <Button variant="outline" size="icon" className="rounded-full">
                    <Settings2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                    <Paperclip className="w-4 h-4" />
                </Button>
                <form action={formSubmitAction} className=' flex flex-1 gap-2 items-center'>
                    <Input
                        id="prompt"
                        name="prompt"
                        placeholder="Ask Tolty anything..."
                        className="pr-20 rounded-full border-gray-200"
                    />
                    <Button
                        className="rounded-full bg-orange-400 hover:bg-orange-500"
                        size="sm"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </form>
            </div>
            {messages.length > 10 && (
                <div className='mt-4 flex justify-center'>
                    <Button className="rounded-full bg-orange-400 hover:bg-orange-500" size="lg"
                    >Continue to proposal
                    </Button >
                </div>
            )}
        </>
    )
}

export default PromptInput