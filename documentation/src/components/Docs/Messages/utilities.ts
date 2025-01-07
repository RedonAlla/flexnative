export function messageTemplate(colorValue: string, message?: string): string {
  const _message = message || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis.';
  return (
`${colorValue}

${_message}`
  );
}