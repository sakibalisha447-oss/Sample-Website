import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, ShieldCheck, Sparkles } from 'lucide-react';

interface LiveChatWidgetProps {
  brandName?: string;
}

interface ChatMessage {
  sender: 'rep' | 'user';
  text: string;
  time: string;
}

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({ brandName = 'MR. BUR' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'rep',
      text: `Hello Doctor! Welcome to ${brandName}. I'm Dr. Yeap, your clinical bur specialist. How can I assist your operatory today?`,
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const quickQuestions = [
    'How do I claim BUY 3 FREE 1?',
    'What is the autoclave protocol for aluminum bur blocks?',
    'Which bur is best for zirconia crown prep?',
    'Do you deliver to my dental clinic?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // Generate intelligent clinical reply
    setTimeout(() => {
      let reply = `Thank you for your question! For specific operatory guidance or wholesale quotes, our clinical representative can also provide an in-clinic trial kit.`;
      const lower = text.toLowerCase();
      if (lower.includes('buy 3') || lower.includes('promo')) {
        reply = `The "BUY 3 FREE 1" promo applies automatically at checkout when you add 4 or more burs/kits to your cart. You can also use code "BUY3FREE1" for instant 25% order credit!`;
      } else if (lower.includes('autoclave') || lower.includes('block') || lower.includes('steriliz')) {
        reply = `All ${brandName} anodized aluminum bur blocks and medical diamond burs are fully autoclavable at 134°C (273°F) for standard 18-minute vacuum cycles. Do not use acidic disinfectant soaks.`;
      } else if (lower.includes('zirconia') || lower.includes('crown')) {
        reply = `For monolithic zirconia preparations, we recommend our Round End Taper Chamfer (Green band 125μm coarse) for bulk reduction, followed by the Red band (40μm fine) to achieve a glass-smooth supragingival finish without micro-fracturing.`;
      } else if (lower.includes('deliver') || lower.includes('ship')) {
        reply = `We provide Free Express Clinical Delivery on all orders over ₹15,000 / $180 across Singapore, Malaysia, Thailand, India, and worldwide within 2–4 business days via DHL Medical Express.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'rep',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Floating Chat Bubble matching screenshot: dark pill with chat icon + "Chat" label */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#2D3748] hover:bg-[#1A202C] text-white px-4 py-2.5 rounded-full shadow-2xl hover:shadow-purple-900/30 transition-all transform hover:scale-105 active:scale-95 cursor-pointer text-xs font-bold"
          aria-label="Open Live Chat"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>Chat</span>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[460px] animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                MB
              </div>
              <div>
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <span>{brandName} Clinical Advisor</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-purple-200">
                  Operatory & Product Support
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick FAQ Pills */}
          <div className="p-2 bg-slate-50 border-b border-slate-100 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickQuestions.slice(0, 2).map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200 px-2.5 py-1 rounded-full shrink-0 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages list */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-purple-700 text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-0.5 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 border-t border-slate-200 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about burs, grit sizes, shipping..."
              className="flex-1 px-3 py-2 text-xs bg-slate-100 focus:bg-white border border-transparent focus:border-purple-600 rounded-full outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-purple-700 hover:bg-purple-800 text-white rounded-full transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
