
export function wait(seconds: number): Promise<void> {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
