'use client';

import Sidebar from '@/components/sidebar';
import TableCPO, { DataItem as DataCPO } from '@/components/table-cpo';
import TableCustomers, { DataItem } from '@/components/table-customers';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';

interface ITabMenu {
	id: number;
	name: string;
	tab: 'customers' | 'cpo';
}

const UserManagement = () => {
	const [currentTab, setCurrentTab] = useState<'customers' | 'cpo'>(
		'customers'
	);

	const tabMenu: ITabMenu[] = [
		{
			id: 1,
			name: 'Customers',
			tab: 'customers',
		},
		{
			id: 2,
			name: 'CPO Operators',
			tab: 'cpo',
		},
	];

	const data: DataItem[] = [
		{
			id: 1,
			fullName: 'Bifrost Connect',
			userID: '1',
			email: '230 kms 5 hours',
			contact: '3 Stations',
			registrationDate: 'Begumpet, Hyderabad',
			balance: 'Begumpet, Hyderabad',
			status: 'Completed',
			actions: '',
		},
		{
			id: 2,
			fullName: 'Bifrost Connect',
			userID: '2',
			email: '230 kms 5 hours',
			contact: '3 Stations',
			registrationDate: 'Begumpet, Hyderabad',
			balance: 'Begumpet, Hyderabad',
			status: 'Completed',
			actions: '',
		},
		{
			id: 3,
			fullName: 'Bifrost Connect',
			userID: '3',
			email: '230 kms 5 hours',
			contact: '3 Stations',
			registrationDate: 'Begumpet, Hyderabad',
			balance: 'Begumpet, Hyderabad',
			status: 'Completed',
			actions: '',
		},
		{
			id: 4,
			fullName: 'Bifrost Connect',
			userID: '4',
			email: '230 kms 5 hours',
			contact: '3 Stations',
			registrationDate: 'Begumpet, Hyderabad',
			balance: 'Begumpet, Hyderabad',
			status: 'Completed',
			actions: '',
		},
	];

	const dataCPO: DataCPO[] = [
		{
			id: 1,
			opName: 'Bifrost Connect',
			stationID: '0879232121',
			stationLoc: 'Begumpet, Hyderabad',
			contact: '0879232121',
			status: 'Completed',
			actions: '',
		},

		{
			id: 2,
			opName: 'Bifrost Connect',
			stationID: '0879232121',
			stationLoc: 'Begumpet, Hyderabad',
			contact: '0879232121',
			status: 'Completed',
			actions: '',
		},

		{
			id: 3,
			opName: 'Bifrost Connect',
			stationID: '0879232121',
			stationLoc: 'Begumpet, Hyderabad',
			contact: '0879232121',
			status: 'Completed',
			actions: '',
		},
		{
			id: 4,
			opName: 'Bifrost Connect',
			stationID: '0879232121',
			stationLoc: 'Begumpet, Hyderabad',
			contact: '0879232121',
			status: 'Completed',
			actions: '',
		},
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='text-black text-2xl font-medium leading-[30px]'>
					User Management
				</div>
				<div className='h-6' />
				<div className='flex flex-row items-center'>
					{tabMenu.map((o) => (
						<div
							key={o.id.toString()}
							className={`w-[275px] h-[26px] pb-1.5 justify-center cursor-pointer items-center gap-2.5 inline-flex ${
								currentTab === o.tab
									? 'border-b border-blue-500'
									: 'border-b border-black'
							}`}
							onClick={() => setCurrentTab(o?.tab!)}>
							<div
								className={`text-lg font-medium leading-tight ${
									currentTab === o.tab ? 'text-blue-500' : 'text-black'
								}`}>
								{o.name}{' '}
							</div>
						</div>
					))}
				</div>
				<div className='h-6' />
				<div className='flex flex-row items-center justify-between'>
					<div className='flex flex-row items-center'>
						<div className='w-[599px] h-14 pl-4 py-4 bg-white rounded-2xl border border-zinc-100 justify-start items-center inline-flex'>
							<div className='justify-start items-center gap-2 inline-flex'>
								<AiOutlineSearch size={30} />
								<div className=' text-neutral-400 text-base font-normal leading-tight'>
									Search by business name, email or contact number
								</div>
							</div>
						</div>
						<div className='w-6' />
						<div className='w-14 h-14 px-4 pt-[15.50px] pb-[16.50px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
							<div className='w-6 h-6 justify-center items-center inline-flex'>
								<FiFilter />
							</div>
						</div>
					</div>
					<Link
						href='/user-management/create'
						className='w-[196px] h-14 justify-start items-start inline-flex cursor-pointer'>
						<div className='px-4 py-4 flex flex-row items-center bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center gap-2'>
							<div className='w-6 h-6 relative'>
								<AiOutlinePlusCircle color='white' size={24} />
							</div>
							<div className='text-center text-white text-base font-medium leading-3'>
								Add New User
							</div>
						</div>
					</Link>
				</div>
				<div className='h-6' />
				{currentTab === 'customers' ? (
					<div className='bg-white p-2 rounded-2xl overflow-hidden'>
						<TableCustomers data={data} />
					</div>
				) : (
					<div className='bg-white p-2 rounded-2xl overflow-hidden'>
						<TableCPO data={dataCPO} />
					</div>
				)}
			</div>
		</Sidebar>
	);
};

export default UserManagement;
