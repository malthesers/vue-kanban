/**
 * Returns a new date formatted to an ISO string.
 *
 * @returns ISO string of current time.
 */
export default function getTimestampISO() {
  return new Date().toISOString()
}
