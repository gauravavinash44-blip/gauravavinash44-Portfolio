'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const messages = [
  {
    type: 'user' as const,
    text: 'Find companies in renewable energy with strong growth',
    delay: 500,
  },
  {
    type: 'ai' as const,
    text: 'I found 23 companies matching your criteria. Here are the top 5 based on growth metrics and market position...',
    delay: 1500,
  },
];

export function ChatTypingDemo() {
  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([]);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let messageIndex = 0;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeMessage = () => {
      if (messageIndex >= messages.length) return;

      const currentMessage = messages[messageIndex];

      if (charIndex === 0) {
        setTimeout(() => {
          setIsTyping(true);
        }, currentMessage.delay);
      }

      if (charIndex < currentMessage.text.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentMessage.text.slice(0, charIndex + 1));
          charIndex++;
          typeMessage();
        }, 30);
      } else {
        setDisplayedMessages((prev) => [...prev, currentMessage]);
        setCurrentText('');
        setIsTyping(false);
        messageIndex++;
        charIndex = 0;

        if (messageIndex < messages.length) {
          setTimeout(typeMessage, 800);
        }
      }
    };

    typeMessage();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50/60">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Systematic Agent</p>
          <p className="text-xs text-emerald-500 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Online
          </p>
        </div>
        {/* Window dots */}
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-amber-400/60" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
        </div>
      </div>

      {/* Messages */}
      <div className="p-6 space-y-4 min-h-[180px]">
        <AnimatePresence>
          {displayedMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-end gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0 mb-0.5 shadow">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3.5 ${
                  message.type === 'user'
                    ? 'bg-purple-600 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              {message.type === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 mb-0.5">
                  <User className="w-3.5 h-3.5 text-gray-600" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing — current text */}
        {isTyping && currentText && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-end gap-3 justify-start"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0 mb-0.5 shadow">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-5 py-3.5 bg-gray-100 text-gray-800">
              <p className="text-sm leading-relaxed">
                {currentText}
                <span className="inline-block w-[2px] h-4 bg-gray-600 ml-1 animate-pulse align-middle" />
              </p>
            </div>
          </motion.div>
        )}

        {/* Typing dots — loading */}
        {isTyping && !currentText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-end gap-3 justify-start"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0 mb-0.5 shadow">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-5 py-4">
              <div className="flex gap-1.5">
                {[0, 0.2, 0.4].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/40">
        <input
          type="text"
          placeholder="Ask about companies..."
          className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
          disabled
        />
        <button className="bg-purple-600 text-white p-2.5 rounded-xl hover:bg-purple-700 transition-colors shadow">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
