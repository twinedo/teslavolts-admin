'use client';

import Sidebar from '@/components/sidebar';
import TableTripPlanner, { DataItem } from '@/components/table-trip-planner';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import Link from 'next/link';

const TripPlanner = () => {
	const data: DataItem[] = [
		{
			id: 1,
			user: 'Bifrost Connect',
			tripName: 'Evening Red Dunes Desert',
			distance: '230 kms 5 hours',
			routeStation: '3 Stations',
			from: 'Begumpet, Hyderabad',
			to: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 2,
			user: 'Bifrost Connect',
			tripName: 'Evening Red Dunes Desert',
			distance: '230 kms 5 hours',
			routeStation: '3 Stations',
			from: 'Begumpet, Hyderabad',
			to: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 3,
			user: 'Bifrost Connect',
			tripName: 'Evening Red Dunes Desert',
			distance: '230 kms 5 hours',
			routeStation: '3 Stations',
			from: 'Begumpet, Hyderabad',
			to: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 4,
			user: 'Bifrost Connect',
			tripName: 'Evening Red Dunes Desert',
			distance: '230 kms 5 hours',
			routeStation: '3 Stations',
			from: 'Begumpet, Hyderabad',
			to: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 5,
			user: 'Bifrost Connect',
			tripName: 'Evening Red Dunes Desert',
			distance: '230 kms 5 hours',
			routeStation: '3 Stations',
			from: 'Begumpet, Hyderabad',
			to: 'Begumpet, Hyderabad',
			actions: '',
		},
	];
	return (
		<Sidebar>
			<div className='w-full'>
				<div className='text-black text-2xl font-medium leading-[30px]'>
					Trip Planner
				</div>
				<div className='h-6' />
				<div className='flex flex-row justify-between items-center'>
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
					<div>
						<Link href="/trip-planner/create" className='w-[196px] h-14 justify-center items-center inline-flex cursor-pointer'>
							<div className='grow shrink basis-0 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Add New Trip
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='h-6' />
				<div className='bg-white p-2 rounded-2xl overflow-hidden'>
					<TableTripPlanner data={data} />
				</div>
			</div>
		</Sidebar>
	);
};

export default TripPlanner;
