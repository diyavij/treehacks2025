"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Send, X } from "lucide-react"

export function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)} className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90">
          <Bot size={24} />
        </Button>
      ) : (
        <Card className="w-80 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardTitle className="flex justify-between items-center">
              <span className="flex items-center">
                <Bot className="mr-2" size={20} />
                Wellness AI Chat
              </span>
              <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64 overflow-y-auto p-4">
            {messages.map((m) => (
              <div key={m.id} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {m.content}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about your health..."
                className="flex-grow"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

