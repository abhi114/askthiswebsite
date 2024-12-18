"use client"
import React from 'react'
import {Message, useChat} from 'ai/react'
import { Messages } from './Messages'
import ChatInput from './ChatInput'
const ChatWrapper = ({sessionId,initialMessages}:{sessionId:string,initialMessages:Message[]}) => {
    //configuration on how the vercel ai sdk gets the chats from our application 
    const {messages,handleInputChange,input,handleSubmit,setInput} = useChat({
        api:"/api/chat-stream",
        body: {sessionId},
        initialMessages:initialMessages,
    })
  return (
    <div className='relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2'>
        <div className='flex-1 text-black bg-zinc-800 justify-between flex flex-col'>
            <Messages messages={messages}/>
        </div>
        <ChatInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} setInput={setInput}/>
    </div>
  )
}

export default ChatWrapper