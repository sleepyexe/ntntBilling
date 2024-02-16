import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'


const pages = atom('');



export const setPages = () => useSetAtom(pages);
export const usePages = () => useAtom(pages);
export const usePagesData = () => useAtomValue(pages);