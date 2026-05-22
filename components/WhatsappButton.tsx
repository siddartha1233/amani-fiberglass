"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/971503072795"
      target="_blank"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 z-[999]
        flex h-16 w-16 items-center justify-center
        rounded-full bg-green-500
        shadow-[0_0_40px_rgba(34,197,94,0.5)]
        transition
      "
    >

      <MessageCircle
        size={32}
        className="text-white"
      />

    </motion.a>
  );
}