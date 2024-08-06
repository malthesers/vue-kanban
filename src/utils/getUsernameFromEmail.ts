/**
 * Returns a formatted username based on user email.
 *
 * @param email Email of the user.
 * @returns String of the text before the @ in the email.
 */
export default function getUsernameFromEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email) {
    return 'Unknown'
  }

  if (!emailPattern.test(email)) {
    return email
  }

  return email.split('@')[0]
}
