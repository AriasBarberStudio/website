import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { isBeforeReturn, returnNoticeShort } from '@/config/businessInfo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AppointmentModal({ isOpen, onClose, onConfirm }: AppointmentModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-rich-black border-2 border-barber-gold p-8 shadow-2xl">
          <div className="flex items-start justify-between mb-6">
            <Dialog.Title className="font-display text-2xl font-bold text-cream">
              Confirm Your Appointment
            </Dialog.Title>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-cream/60 hover:text-cream hover:bg-barber-gold/10 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          {isBeforeReturn() && (
            <div className="mb-6 rounded-xl border border-barber-gold/40 bg-barber-gold/10 p-4 text-sm text-cream/90 leading-relaxed">
              👋 {returnNoticeShort} You'll be taken to our booking page, where the
              earliest available dates start that week.
            </div>
          )}

          <Dialog.Description className="mt-4 text-cream/80 leading-relaxed">
            You're about to secure your spot at Arias Barber Studio. Please note that{' '}
            <strong className="text-barber-gold">cancellations must be made at least 12 hours in advance</strong>{' '}
            to avoid a cancellation fee. We look forward to crafting your perfect look!
          </Dialog.Description>

          <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full border-2 border-cream/20 text-cream font-semibold hover:bg-cream/5 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-3 rounded-full bg-gradient-gold text-black font-semibold shadow-lg hover:shadow-barber-gold/50 transition-all hover:scale-105"
            >
              Agree & Continue
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
