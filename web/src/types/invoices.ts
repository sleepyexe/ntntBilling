export type InvoicesProps = {
	ref: string,
	amount: number,
	society_label: string,
	society: string,
	author: string,
	note: string,
	status: 'paid' | 'unpaid',
	author_name: string,
}
