/**
 * Utility function to conditionally join CSS class names together.
 * Compatible with shadcn `cn` interface.
 */
export function cn(...inputs: any[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
    .trim();
}
