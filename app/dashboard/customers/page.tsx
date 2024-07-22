import { Metadata } from 'next'

import { fetchFilteredCustomers } from '@/lib/actions/customer.actions'
import CustomersTable from '@/components/shared/customers/table'

export const metadata: Metadata = {
	title: 'Customers',
}

export default async function Page({
	searchParams,
}: {
	searchParams?: {
		query?: string
		page?: string
	}
}) {
	const query = searchParams?.query || ''
	const customers = await fetchFilteredCustomers(query)

	return (
		<main>
			<CustomersTable customers={customers} />
		</main>
	)
}
