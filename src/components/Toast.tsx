import { AnimatePresence, motion } from 'motion/react';

interface ToastProps {
  visible: boolean;
  message: string;
}

export function Toast({ visible, message }: ToastProps) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 right-6 z-50 pointer-events-none"
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-inverse-surface text-inverse-on-surface px-space-lg py-space-sm rounded-full shadow-xl flex items-center gap-space-sm font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">
              check_circle
            </span>
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
