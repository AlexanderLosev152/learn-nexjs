'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React,{ useState } from 'react';

import './styles.css';

export default function AuthLayout({children}: { children: React.ReactNode }) {
	const pathname = usePathname();
	const navLinks = [
		{name: 'Register',href: '/auth/register'},
		{name: 'Login',href: '/auth/login'},
		{name: 'Forgot Password',href: '/auth/forgot-password'}
	];

	const [input,setInput] = useState('');

	return (
		<div>
			<form>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>

			<nav>
				{navLinks.map((link) => {
					const isActive =
						pathname === link.href ||
						(pathname.startsWith(link.href) && link.href !== '/');

					return (
						<Link
							key={link.href}
							href={link.href}
							className={isActive
								? 'font-bold mr-4'
								: 'text-blue-500 mr-4'}
						>
							{link.name}
						</Link>
					);
				})}
			</nav>

			{children}
			hello
		</div>
	);
}
