import { Dialog } from '@headlessui/react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AppointmentModal({ isOpen, onClose, onConfirm }: AppointmentModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold text-gray-900">
            Confirm Your Appointment
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            You're about to secure your spot at Arias Barber Studio. Please note that <strong>cancellations must be made at least 12 hours</strong> in advance to avoid a cancellation fee. We look forward to seeing you!
          </Dialog.Description>
          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Agree
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
