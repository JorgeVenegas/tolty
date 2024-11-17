"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";

export const askPrompt = async (state: any, form: FormData) => {
    const session = await auth();

    if (!session) return parseServerActionResponse({ error: "Not signed in", status: "ERROR" })

    const { prompt } = Object.fromEntries(Array.from(form))

    try {
        const response = await fetch("http://localhost:8080/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: prompt }),
        });

        if (!response.ok) {
            console.log("Failed")
            throw new Error("Failed to send message");
        }
        
        const { messages } = await response.json();
    
        const messageBack = messages[0][0].text.value

        console.log(messageBack)

        return parseServerActionResponse({ messageBack, error: "", status: "SUCCESS" })
    } catch (error) {
        console.log(error)
        return parseServerActionResponse({ error: JSON.stringify(error), status: "ERROR" });
    }
}