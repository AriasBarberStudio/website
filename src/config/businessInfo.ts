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

export const closureEndDate = new Date('2026-09-01T00:00:00-04:00');

export const isClosed = () => new Date() < closureEndDate;

export const closureMessage = "👋 Hey, it's Aria — I'm recovering from an arm injury and the studio is closed until early September. Thank you for your patience, see you soon!";
