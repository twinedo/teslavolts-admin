'use client';

import Sidebar from '@/components/sidebar';
import TableBookings, { DataItem } from '@/components/table-bookings';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import Link from 'next/link';

const Bookings = () => {
	const data: DataItem[] = [
		{
			id: 1,
			stationName: 'Wallbox DC Charger',
			date: '16/07/2023',
			timings: '10:30 AM - 11:30 AM ',
			address: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 2,
			stationName: 'Wallbox DC Charger',
			date: '16/07/2023',
			timings: '10:30 AM - 11:30 AM ',
			address: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 3,
			stationName: 'Wallbox DC Charger',
			date: '16/07/2023',
			timings: '10:30 AM - 11:30 AM ',
			address: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 4,
			stationName: 'Wallbox DC Charger',
			date: '16/07/2023',
			timings: '10:30 AM - 11:30 AM ',
			address: 'Begumpet, Hyderabad',
			actions: '',
		},
		{
			id: 5,
			stationName: 'Wallbox DC Charger',
			date: '16/07/2023',
			timings: '10:30 AM - 11:30 AM ',
			address: 'Begumpet, Hyderabad',
			actions: '',
		},
	];
	return (
		<Sidebar>
			<div className='w-full'>
				<div className='text-black text-2xl font-medium leading-[30px]'>
					Bookings
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
						<Link href="/bookings/create" className='w-[196px] h-14 justify-center items-center inline-flex cursor-pointer'>
							<div className='grow shrink basis-0 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Add New Booking
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='h-6' />
				<div className='bg-white p-2 rounded-2xl overflow-hidden'>
					<TableBookings data={data} />
				</div>
			</div>
		</Sidebar>
	);
};

export default Bookings;
