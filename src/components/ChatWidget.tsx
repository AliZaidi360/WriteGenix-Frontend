import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';
import { Link } from 'wouter';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);

  return (
    <>
      {/* Chat Button - Floating */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNewMessage(false);
        }}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
        {hasNewMessage && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            1
          </span>
        )}
      </button>

      {/* Chat Widget Popup */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 shadow-2xl animate-in slide-in-from-bottom-5">
          <div className="p-4 bg-primary text-primary-foreground rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👋</span>
              <div>
                <h3 className="font-semibold">Hi! How can we help?</h3>
                <p className="text-xs opacity-90">We typically reply in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:opacity-70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="p-4 space-y-3 bg-background">
            <Button
              className="w-full justify-start bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.location.href = '/contact'}
            >
              I have a question
            </Button>
            <Button
              className="w-full justify-start bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.location.href = '/services'}
            >
              Tell me more
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.location.href = '/contact'}
            >
              <Send className="h-4 w-4 mr-2" />
              Start a conversation
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}

