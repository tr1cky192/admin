/**
 * https://muffinman.io/blog/get-scrollbar-width-in-javascript/
 */
export const getScrollWidth = (elm: HTMLElement) =>
  elm === document.body
    ? window.innerWidth - document.documentElement.clientWidth
    : elm.offsetWidth - elm.clientWidth;
