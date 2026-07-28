import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ClosureNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClosureNoticeModal({ isOpen, onClose }: ClosureNoticeModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-rich-black border-2 border-barber-gold p-8 shadow-2xl">
          <div className="flex items-start justify-between mb-6">
            <Dialog.Title className="font-display text-2xl font-bold text-cream">
              We're Temporarily Closed
            </Dialog.Title>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-cream/60 hover:text-cream hover:bg-barber-gold/10 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <Dialog.Description className="mt-4 text-cream/80 leading-relaxed">
            👋 Hey, it's Aria — I'm recovering from an arm injury and the studio is closed until end of August.
            Booking isn't available right now, but thank you for your patience. See you soon!
          </Dialog.Description>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-gradient-gold text-black font-semibold shadow-lg hover:shadow-barber-gold/50 transition-all hover:scale-105"
            >
              Got it
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
