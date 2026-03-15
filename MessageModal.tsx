'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
}

export default function MessageModal({ isOpen, onClose, recipientName }: MessageModalProps) {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // In a real app, this would send to a backend
      // For now, just store in localStorage
      const messages = JSON.parse(localStorage.getItem('sentMessages') || '[]');
      messages.push({
        to: recipientName,
        message: message,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('sentMessages', JSON.stringify(messages));
      
      setSent(true);
      setTimeout(() => {
        onClose();
        setSent(false);
        setMessage('');
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-text/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full card-shadow"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!sent ? (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-text mb-2">
                      Send a message to {recipientName}
                    </h3>
                    <p className="text-sm text-text/60">
                      Start the conversation with a friendly introduction
                    </p>
                  </div>

                  {/* Message input */}
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi, I also love quiet cafés and matcha..."
                    className="w-full h-40 p-4 rounded-2xl bg-cream border-2 border-transparent 
                             focus:border-matcha/30 focus:outline-none resize-none text-text
                             placeholder:text-text/40"
                    maxLength={300}
                  />

                  {/* Character count */}
                  <p className="text-xs text-text/40 mt-2 text-right">
                    {message.length}/300
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={onClose}
                      className="flex-1 px-6 py-3 rounded-xl border-2 border-text/10 
                               text-text/60 hover:bg-text/5 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSend}
                      disabled={!message.trim()}
                      className="flex-1 px-6 py-3 rounded-xl gradient-matcha text-white 
                               disabled:opacity-40 disabled:cursor-not-allowed 
                               hover:opacity-90 transition-opacity"
                    >
                      Send message
                    </button>
                  </div>
                </>
              ) : (
                /* Success state */
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-matcha/20 mx-auto mb-4 
                                flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-matcha-deep"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-text mb-2">
                    Message sent!
                  </h3>
                  <p className="text-text/60">
                    {recipientName} will receive your message
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
