export const businessHours = [
    { day: 'Monday', hours: '11am - 6pm' },
    { day: 'Tuesday', hours: '11am - 6pm' },
    { day: 'Wednesday', hours: '11am - 6pm' },
    { day: 'Thursday', hours: '11am - 6pm' },
    { day: 'Friday', hours: '11am - 6pm' },
    { day: 'Saturday', hours: 'Closed!' },
    { day: 'Sunday', hours: 'Closed!' },
];

export const businessAddress = '4605 Av Bannantyne, Verdun, QC, Canada 🇨🇦';

// Aria is back the second week of September 2026. Bookings stay open the whole
// time — the notice just tells clients when the first appointments start.
export const returnDate = new Date('2026-09-07T00:00:00-04:00');

export const isBeforeReturn = () => new Date() < returnDate;

export const returnMessage = "👋 Hey, it's Aria — I'll be back as of the 2nd week of September, and bookings are open as of that date. Book your spot now, see you soon!";

export const returnNoticeShort = "I'm back as of the 2nd week of September — appointments are open starting that week.";
