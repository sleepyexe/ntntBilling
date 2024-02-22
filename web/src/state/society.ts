import {atom, useAtom, useAtomValue, useSetAtom} from 'jotai'

const society = atom([]);

export const useSociety = () => useAtom(society);
export const useSocietyData = () => useAtomValue(society);
export const useSetSociety = () => useSetAtom(society);