import type { CSSProperties } from 'react';

// TODO: make beautiful styled component later
export const loginPageStyles: Record<string, CSSProperties> = {
  container: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' },
  button: { padding: '12px 16px', fontSize: '2rem' },
  form: { display: 'flex', gap: '20px', flexDirection: 'column' },
  label: { display: 'flex', gap: '4px', flexDirection: 'column' },
  span: { paddingLeft: '4px' },
  input: { padding: '8px 12px' },
  isHidden: { visibility: 'hidden', opacity: '0', pointerEvents: 'none' },
};