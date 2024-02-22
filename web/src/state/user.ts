import {atom, useAtom, useAtomValue, useSetAtom} from 'jotai'
import { InvoicesProps } from '@/types/invoices';

const user = atom([]);

export const useUser = () => useAtom(user);
export const useUserData = () => useAtomValue(user);
export const useSetUser = () => useSetAtom(user);