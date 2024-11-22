"use client"
import React from 'react'
import {useChat} from 'ai/react'
import { Messages } from './Messages'
const ChatWrapper = ({sessionId}:{sessionId:string}) => {
    //configuration on how the vercel ai sdk gets the chats from our application 
    const {messages,handleInputChange,input,handleSubmit} = useChat({
        api:"/api/chat-stream",
        body: {sessionId}
    })
  return (
    <div className='relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2'>
        <div className='flex-1 text-black bg-zinc-800 justify-between flex flex-col'>
            <Messages messages={messages}/>
        </div>
        <form onSubmit={handleSubmit}>
        <input className='text-black' value={input} onChange={handleInputChange} type='text'/>
        <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ChatWrapper