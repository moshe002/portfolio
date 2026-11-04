/**
 * 
 * @returns boolean
 * 
 * Handles the daymode or nightmode automatically
 * based on current device's time.
 * 
 */
export const isDayOrNight = (): boolean => {
    const currentHour = new Date().getHours();
    return currentHour < 6 || currentHour >= 18;
};
