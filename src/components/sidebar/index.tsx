'use client';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import ToolbarSA from '../toolbar-sa';
import { usePathname, useRouter } from 'next/navigation';
import { BsDot } from 'react-icons/bs';
import Link from 'next/link';

interface ISidebar {
	children?: ReactNode;
}

const Sidebar = (props: ISidebar) => {
	const { children } = props;
	const pathname = usePathname();
	const router = useRouter();

	const [collapsed, setCollapsed] = useState(false);

	const [menuSidebar, setMenuSidebar] = useState([
		{
			id: 1,
			name: 'Dashboard',
			icon: pathname.includes('/dashboard')
				? '/assets/ic_dashboard.svg'
				: '/assets/ic_dashboard_i.svg',
			navigate: '/dashboard',
			isNested: false,
			nested: [],
		},
		{
			id: 2,
			name: 'User Management',
			icon: pathname.includes('/user-management')
				? '/assets/ic_user_manage_a.svg'
				: '/assets/ic_user_manage_i.svg',
			navigate: '/user-management',
			isNested: false,
			nested: [],
		},
		{
			id: 3,
			name: 'Charging Management',
			icon: pathname.includes('/charging-management')
				? '/assets/ic_charging_manage_a.svg'
				: '/assets/ic_charging_manage_i.svg',
			navigate: '/charging-management',
			isNested: false,
			nested: [],
		},
		{
			id: 4,
			name: 'Charging Station',
			icon: pathname.includes('/charging-station')
				? '/assets/ic_charging_station_a.svg'
				: '/assets/ic_charging_station_i.svg',
			navigate: '/charging-station',
			isNested: false,
			nested: [],
		},
		{
			id: 5,
			name: 'Bookings',
			icon: pathname.includes('/bookings')
				? '/assets/ic_booking_a.svg'
				: '/assets/ic_booking_i.svg',
			navigate: '/bookings',
			isNested: false,
			nested: [],
		},
		{
			id: 6,
			name: 'Trip Planner',
			icon: pathname.includes('/trip-planner')
				? '/assets/ic_trip_plan_a.svg'
				: '/assets/ic_trip_plan_i.svg',
			navigate: '/trip-planner',
			isNested: false,
			nested: [],
		},
		{
			id: 7,
			name: 'Community',
			icon: pathname.includes('/community')
				? '/assets/ic_community_a.svg'
				: '/assets/ic_community_i.svg',
			navigate: '/community',
			isNested: false,
			nested: [],
		},
		{
			id: 8,
			name: 'My Wallet',
			icon: pathname.includes('/my-wallet')
				? '/assets/ic_wallet_a.svg'
				: '/assets/ic_wallet_i.svg',
			navigate: pathname.includes('/my-wallet/cpo-wallet')
				? '/my-wallet/cpo-wallet'
				: '/my-wallet/user-wallet',
			isNested: pathname.includes('/my-wallet') ? true : false,
			nested: [
				{
					id: 1,
					name: 'User Wallet',
					icon: pathname.includes('/my-wallet/user-wallet') ? (
						<BsDot color='#407BBF' />
					) : (
						<BsDot color='#A1A1A1' />
					),
					navigate: '/my-wallet/user-wallet',
					isNested: false,
					nested: [],
				},
				{
					id: 2,
					name: 'CPO Wallet',
					icon: pathname.includes('/my-wallet/cpo-wallet') ? (
						<BsDot color='#407BBF' />
					) : (
						<BsDot color='#A1A1A1' />
					),
					navigate: '/my-wallet/cpo-wallet',
					isNested: false,
					nested: [],
				},
			],
		},
		{
			id: 9,
			name: 'Billings Details',
			icon: pathname.includes('/billings-details')
				? '/assets/ic_billing_a.svg'
				: '/assets/ic_billing_i.svg',
			navigate: pathname.includes('/billings-details/invoice')
				? '/billings-details/invoice'
				: '/billings-details/payment-method',
			isNested: pathname.includes('/billings-details') ? true : false,
			nested: [
				{
					id: 1,
					name: 'Payment Method',
					icon: pathname.includes('/billings-details/payment-method') ? (
						<BsDot color='#407BBF' />
					) : (
						<BsDot color='#A1A1A1' />
					),
					navigate: '/billings-details/payment-method',
					isNested: false,
					nested: [],
				},
				{
					id: 2,
					name: 'Invoice',
					icon: pathname.includes('/billings-details/invoice') ? (
						<BsDot color='#407BBF' />
					) : (
						<BsDot color='#A1A1A1' />
					),
					navigate: '/billings-details/invoice',
					isNested: false,
					nested: [],
				},
			],
		},
		{
			id: 10,
			name: 'Content Management',
			icon: pathname.includes('/content-management')
				? '/assets/ic_content_manage_a.svg'
				: '/assets/ic_content_manage_i.svg',
			navigate: '/content-management',
			isNested: false,
			nested: [],
		},
		{
			id: 11,
			name: 'Reports',
			icon: pathname.includes('/reports')
				? '/assets/ic_report_a.svg'
				: '/assets/ic_report_i.svg',
			navigate: '/reports',
			isNested: false,
			nested: [],
		},
	]);

	useEffect(() => {
		// Add an event listener for window resize
		window.addEventListener('resize', handleResize);
		// Initial setup
		handleResize();
		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleResize = () => {
		// Calculate the window width
		const windowWidth = window.innerWidth;

		// Determine whether to collapsZe based on window width
		if (windowWidth <= 768) {
			setCollapsed(true);
		} else {
			setCollapsed(false);
		}
	};

	const toggleSidebar = () => {
		setCollapsed(!collapsed);
	};
	return (
		<div className='flex'>
			<div
				className={`bg-white pt-[24px] flex flex-col transition-all ${
					collapsed ? 'w-[55px]' : 'w-[250px]'
				}`}>
				<button className='text-black text-xl' onClick={toggleSidebar}>
					{collapsed ? '→' : '←'}
				</button>
				<div
					className={`pt-6 bg-white border-r border-zinc-100 flex-col justify-start items-start gap-[50px] inline-flex overflow-hidden ${
						collapsed ? 'w-[55px]' : 'w-[250px]'
					}`}>
					<div className='self-stretch h-[54px] px-[34px] flex-col justify-center items-start gap-2.5 inline-flex'>
						<img className='w-[164px] h-[54px]' src='assets/Logo.png' />
					</div>
					<div className='flex-col gap-2 inline-flex border-5 border-black'>
						{menuSidebar.map((o) => (
							<div key={o.id.toString()} className='flex flex-col'>
								<Link
									href={o.navigate}
									// onClick={() => {
									// 	router.push(o.navigate);
									// }}
									className='w-[229px] h-12 justify-start items-center gap-4 inline-flex'>
									<div
										className={`w-1.5 h-9 ${
											pathname.includes(o.navigate) ? 'bg-blue-500' : 'bg-white'
										}`}
									/>
									<div className='justify-start items-center gap-2 flex cursor-pointer'>
										<Image
											className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
											src={o.icon}
											alt='Next.js Logo'
											width={24}
											height={24}
											priority
										/>
										<div
											className={`text-center text-base font-medium leading-tight ${
												pathname.includes(o.navigate)
													? 'text-blue-500'
													: 'text-neutral-400'
											}`}>
											{o.name}
										</div>
									</div>
								</Link>
								{o.isNested &&
									o.nested.map((o2) => (
										<Link
											href={o2.navigate}
											key={o2.id}
											className='w-full flex flex-row ml-8 my-2 gap-2 cursor-pointer'>
											<BsDot
												color={
													pathname.includes(o2.navigate) ? '#407BBF' : '#A1A1A1'
												}
												size={24}
											/>
											<div
												className={`text-base font-medium leading-tight ${
													pathname.includes(o2.navigate)
														? 'text-blue-500'
														: 'text-neutral-400'
												}`}>
												{o2.name}
											</div>
										</Link>
									))}
							</div>
						))}
					</div>
				</div>
				{/* Other sidebar content */}
			</div>
			<div
				className={`border-2 flex flex-col flex-grow ${
					collapsed ? 'w-full' : 'w-[calc(100% - 250px)]'
				}`}>
				<ToolbarSA />
				<div className='flex h-full bg-neutral-50 p-[20px]'>{children}</div>
			</div>
		</div>
	);
};

export default Sidebar;
