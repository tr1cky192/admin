import { useState } from 'react'

type CopiedState = {
  isCopied: boolean | null
  copiedValue: string | null
}
type CopyFn = (text: string) => Promise<boolean>
type UseCopyToClipboardHook = () => [CopiedState, CopyFn];

export const useCopyToClipboard: UseCopyToClipboardHook = (): [CopiedState, CopyFn] => {
  const [copied, setCopied] = useState<CopiedState>({
    isCopied: null,
    copiedValue: null,
  });

  const copy: CopyFn = async text => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({
        isCopied: true,
        copiedValue: text,
      });
      return true;
    } catch (error) {
      setCopied({
        isCopied: false,
        copiedValue: null,
      });
      return false;
    } finally {
      setTimeout(() => {
        setCopied({
          isCopied: null,
          copiedValue: null,
        });
      }, 2000);
    }
  };

  return [copied, copy];
};