export const getRefs = () => {
  const rootRef = document.getElementById('root');
  const modalRoot = document.getElementById('modal-root');

  if (!rootRef || !modalRoot) {
    throw new Error(`Please add 'div' with id="root" and "modal-root" to index.html`);
  }

  return { rootRef, modalRoot };
};
