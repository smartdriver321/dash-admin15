import { Suspense } from 'react'

import { lusitana } from '@/components/shared/fonts'
import StatCardsWrapper from '@/components/shared/dashboard/stats-cards-wrapper'
import {
	CardsSkeleton,
	RevenueChartSkeleton,
} from '@/components/shared/skeleton'
import RevenueChartWrapper from '@/components/shared/dashboard/revenue-chart-wrapper'

export default async function Page() {
	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Dashboard
			</h1>

			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
				<Suspense fallback={<CardsSkeleton />}>
					<StatCardsWrapper />
				</Suspense>
			</div>

			<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
				<Suspense fallback={<RevenueChartSkeleton />}>
					<RevenueChartWrapper />
				</Suspense>{' '}
			</div>
		</main>
	)
}
