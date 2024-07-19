'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { SunMoon } from 'lucide-react'

import { capitalizeFirstLetter } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function ModeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='w-full text-muted-foreground justify-start focus-visible:ring-0 focus-visible:ring-offset-0'
				>
					<SunMoon className='w-6 mr-2' />
					<span className='hidden md:block'>
						{capitalizeFirstLetter(theme!)} Theme
					</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>

				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					checked={theme === 'system'}
					onClick={() => setTheme('system')}
				>
					System
				</DropdownMenuCheckboxItem>

				<DropdownMenuCheckboxItem
					checked={theme === 'light'}
					onClick={() => setTheme('light')}
				>
					Light
				</DropdownMenuCheckboxItem>

				<DropdownMenuCheckboxItem
					checked={theme === 'dark'}
					onClick={() => setTheme('dark')}
				>
					Dark
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
