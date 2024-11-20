import { ragChat } from "@/lib/rag-chat";
import {aiUseChatAdapter} from '@upstash/rag-chat/nextjs'
import { NextRequest } from "next/server";

export const POST = async (req:NextRequest) => {
    const {messages,sessionId} = await req.json();

    const lastMessage = messages[messages.length-1].content
    //gives the output as readable stream and stream it means show it as it is getting genrated so it feels like it is getting generated in real tim
    const response = await ragChat.chat(lastMessage,{sessionId,streaming:true})
    //console.log("response",response);
    return aiUseChatAdapter(response)
}