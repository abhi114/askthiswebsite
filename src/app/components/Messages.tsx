import {type Message as TMessage} from "ai/react" //you can use type to import only the type definition to reduce bundle size
import { Message } from "./Message"
interface MessagesProps {
    messages : TMessage[],
}

export const Messages = ({messages}:MessagesProps)=>{
        return (
            <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
                {messages ? messages.map((message,i)=>(
                    <Message key={i} content={message.content} isUserMessage={message.role === 'user'}/>
                )):
                (<div>

                </div>)} 
            </div>
        )
}