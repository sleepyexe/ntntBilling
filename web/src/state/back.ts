import {atom, useAtom, useSetAtom} from 'jotai'

const back = atom(false);

export const useBack = () => useAtom(back);
export const setBack = () => useSetAtom(back);