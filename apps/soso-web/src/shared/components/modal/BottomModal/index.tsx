'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface BottomModalProps {
  isOpen: boolean;
  onClose: (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

export default function BottomModal({ isOpen, onClose, children }: BottomModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const modalRoot = document.getElementById('bottom-modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 */}
          <motion.div
            className="fixed inset-0 z-backdrop bg-black bg-opacity-50 layout-center"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* 모달 */}
          <motion.div
            className="fixed bottom-0 z-modal w-full rounded-t-3xl bg-white p-20 shadow-lg layout-center"
            initial={{ y: '100%', x: '-50%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
