'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { getPairById } from '@/data/pairData';
import { getFlavorById } from '@/data/flavorData';
import Image from 'next/image';

export default function RevealPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pairId = searchParams.get('pair') || 'strawberry';
  
  const pair = getPairById(pairId);
  
  // Randomly assign matcha or cookie (50/50 chance)
  const [isMatcha] = useState(() => Math.random() > 0.5);
  
  if (!pair) return null;

  const matchaFlavor = getFlavorById(pair.matchaId);
  const cookieFlavor = getFlavorById(pair.cookieId);

  if (!matchaFlavor || !cookieFlavor) return null;

  // Use either matcha or cookie based on random assignment
  const assignedFlavor = isMatcha ? matchaFlavor : cookieFlavor;
  const assignedName = isMatcha ? pair.matchaName : pair.cookieName;
  const assignedImage = isMatcha ? matchaFlavor.image : cookieFlavor.cookieImage;
  const assignedType = isMatcha ? 'matcha' : 'cookie';

  const handleContinue = () => {
    // Save the assignment to localStorage so choice page can use it
    localStorage.setItem('userAssignment', JSON.stringify({
      pairId,
      isMatcha,
      flavorId: assignedFlavor.id,
      assignedType
    }));
    router.push(`/match-choice?pair=${pairId}&type=${assignedType}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs uppercase tracking-widest text-text/50 mb-6">
            Your match revealed
          </div>

          {/* Big image reveal */}
          <motion.div
            className="relative w-64 h-64 rounded-full overflow-hidden mb-8 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Image
              src={assignedImage}
              alt={assignedName}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-serif text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {assignedName}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-text/70 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {pair.description}
          </motion.p>

          {/* Traits */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {pair.personality.map((trait, index) => (
              <span
                key={trait}
                className="px-5 py-2 rounded-full bg-cream text-text/70 text-sm"
              >
                {trait}
              </span>
            ))}
          </motion.div>

          {/* Continue button */}
          <motion.button
            onClick={handleContinue}
            className="px-12 py-4 rounded-full bg-gradient-to-r from-matcha to-matcha-deep text-white font-medium text-lg
                     hover:shadow-lg transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Find My Matches
          </motion.button>
        </motion.div>
      </div>
      
    </div>
  );
}
