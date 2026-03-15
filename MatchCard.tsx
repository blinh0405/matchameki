'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { User } from '@/data/userData';
import { FlavorPersonality } from '@/data/flavorData';
import { getPairById } from '@/data/pairData';

interface MatchCardProps {
  user: User;
  flavor?: FlavorPersonality;
  compatibilityScore: number;
}

export default function MatchCard({ user, flavor, compatibilityScore }: MatchCardProps) {
  if (!flavor) return null;

  // Get the pair data to show correct names
  const pair = getPairById(user.flavorId);
  
  // Use the correct image and name based on user type
  const displayImage = user.type === 'matcha' ? flavor.image : flavor.cookieImage;
  const displayName = user.type === 'matcha' ? pair?.matchaName : pair?.cookieName;

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow 
                 hover:card-shadow-hover transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
        <Image
          src={displayImage}
          alt={displayName || flavor.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name and flavor */}
      <h3 className="text-2xl font-serif mb-2 text-text">
        {user.name}
      </h3>
      <p className="text-sm text-text/60 mb-3">
        {displayName}
      </p>

      {/* Compatibility */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-1.5 bg-cream rounded-full overflow-hidden">
          <motion.div
            className="h-full gradient-matcha"
            initial={{ width: 0 }}
            animate={{ width: `${compatibilityScore}%` }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
        <span className="text-sm font-medium text-matcha-deep">
          {compatibilityScore}%
        </span>
      </div>

      {/* Interests */}
      <div className="mb-6 flex-grow">
        <p className="text-xs text-text/50 mb-2 uppercase tracking-wider">
          Interests
        </p>
        <div className="flex flex-wrap gap-2">
          {user.interests.slice(0, 3).map(interest => (
            <span
              key={interest}
              className="text-xs px-3 py-1.5 rounded-full bg-cream text-text/70"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link href={`/profile/${user.id}`} className="flex-1">
          <motion.button
            className="w-full px-4 py-2.5 rounded-xl border-2 border-matcha/30 
                       text-matcha-deep hover:bg-matcha/5 transition-colors text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View profile
          </motion.button>
        </Link>
        <Link href={`/profile/${user.id}?message=true`} className="flex-1">
          <motion.button
            className="w-full px-4 py-2.5 rounded-xl gradient-matcha text-white 
                       text-sm font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Say hello
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
