import {atom, useAtom, useSetAtom, useAtomValue} from 'jotai'

const config = atom({
    inspect: false,
    society: false,
    city: false
})

export const useConfig = () => useAtom(config);
export const setConfig = () => useSetAtom(config);
export const useConfigData = () => useAtomValue(config);