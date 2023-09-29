'use client';

import Sidebar from '@/components/sidebar';
import TableChargingManagement, {
	DataItem,
} from '@/components/table-charging-manage';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';

const ChargingManagement = () => {
	const data: DataItem[] = [
		{
			id: 1,
			sessionName: 'Troy Northwestern',
			sessionDuration: '09:00-10:00PM',
			energy: '36 KWh',
			connectors: '3 Stations',
			status: false,
			actions: '',
		},
		{
			id: 2,
			sessionName: 'Troy Northwestern',
			sessionDuration: '09:00-10:00PM',
			energy: '36 KWh',
			connectors: '3 Stations',
			status: false,
			actions: '',
		},
		{
			id: 3,
			sessionName: 'Troy Northwestern',
			sessionDuration: '09:00-10:00PM',
			energy: '36 KWh',
			connectors: '3 Stations',
			status: false,
			actions: '',
		},
		{
			id: 4,
			sessionName: 'Troy Northwestern',
			sessionDuration: '09:00-10:00PM',
			energy: '36 KWh',
			connectors: '3 Stations',
			status: false,
			actions: '',
		},
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='text-black text-2xl font-medium leading-[30px]'>
					Charging Management
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
						href='/charging-management/create'
						className='h-14 justify-start items-start inline-flex cursor-pointer'>
						<div className='px-4 py-4 flex flex-row items-center bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center gap-2'>
							{/* <div className='w-6 h-6 relative'> */}
							<AiOutlinePlusCircle color='white' size={24} />
							{/* </div> */}
							<div className='text-center text-white text-base font-medium leading-3'>
								Add New Charging
							</div>
						</div>
					</Link>
				</div>
				<div className='h-6' />
				<div className='bg-white p-2 rounded-2xl overflow-hidden'>
					<TableChargingManagement data={data} />
				</div>
			</div>
		</Sidebar>
	);
};

export default ChargingManagement;
