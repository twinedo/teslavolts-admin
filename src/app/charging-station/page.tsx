'use client';

import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { BsToggleOn, BsToggleOff, BsArrowLeft } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import {
	PiSortDescending,
	PiFile,
	PiSquaresFour,
	PiTrashSimpleLight,
	PiPencilSimpleLineDuotone,
} from 'react-icons/pi';
import { LuLayoutList } from 'react-icons/lu';
import TableChargingStation, {
	DataItem,
} from '@/components/table-charging-station';
import Image from 'next/image';
import Link from 'next/link';

const ChargingStation = () => {
	const MapView = '/assets/charging_stat_map.svg';
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

	const [listView, setListView] = useState<'list' | 'grid'>('list');
	const [isMapView, setIsMapView] = useState<boolean>(false);

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='w-full flex flex-row justify-between items-center'>
					<div className='text-black text-2xl font-medium leading-[30px]'>
						Charging Station
					</div>
					<div className='flex flex-row items-center gap-2'>
						{isMapView ? (
							<BsToggleOn
								className='cursor-pointer'
								size={24}
								color='#4185C6'
								onClick={() => setIsMapView(!isMapView)}
							/>
						) : (
							<BsToggleOff
								className='cursor-pointer'
								size={24}
								onClick={() => setIsMapView(!isMapView)}
							/>
						)}

						<div className="text-black text-lg font-medium font-['SF Pro Display'] leading-tight">
							Map View
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='flex flex-row items-center justify-between'>
					<div className='flex flex-1 flex-row items-center'>
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
					<div className='flex flex-row items-center justify-between'>
						<div className='w-14 h-14 px-4 pt-[15.50px] pb-[16.50px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
							<div className='w-6 h-6 justify-center items-center inline-flex'>
								<PiFile size={24} />
							</div>
						</div>
						<div className='w-14 h-14 px-4 pt-[15.50px] pb-[16.50px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
							<div className='w-6 h-6 justify-center items-center inline-flex'>
								<PiSortDescending size={24} />
							</div>
						</div>
						<div className='w-14 h-14 px-4 pt-[15.50px] pb-[16.50px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
							<div className='w-6 h-6 justify-center items-center inline-flex'>
								{listView === 'list' ? (
									<PiSquaresFour
										size={24}
										onClick={() => setListView('grid')}
									/>
								) : (
									<LuLayoutList size={24} onClick={() => setListView('list')} />
								)}
							</div>
						</div>
						<Link
							href='/charging-station/create'
							className='w-[196px] h-14 justify-start items-start inline-flex cursor-pointer'>
							<div className='px-4 py-4 flex flex-row items-center bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center gap-2'>
								<div className='w-6 h-6 relative'>
									<AiOutlinePlusCircle color='white' size={24} />
								</div>
								<div className='text-center text-white text-base font-medium leading-3'>
									Add New Station
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='h-6' />
				{isMapView ? (
					<Image width={1280} height={346} src={MapView} alt='viewbooking' />
				) : listView === 'list' ? (
					<div className='bg-white p-2 rounded-2xl overflow-hidden'>
						<TableChargingStation data={data} />
					</div>
				) : (
					<div className='w-full grid grid-cols-2 gap-2'>
						{data.map((o) => (
							<div
								key={o.id}
								className='w-full h-[169px] grid grid-cols-3 p-4 relative bg-white rounded-2xl border border-zinc-100'>
								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className='justify-start items-center gap-2 inline-flex'>
										<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											Session Name
										</div>
									</div>
									<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
										Troy Northwestern
									</div>
								</div>
								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
										Connectors
									</div>
									<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
										345
									</div>
								</div>
								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
										Session Duration
									</div>
									<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
										09:00-10:00PM
									</div>
								</div>
								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
										Status
									</div>
									<div className='w-[82px] px-2 py-1.5 bg-emerald-500 bg-opacity-10 rounded-[100px] justify-center items-center gap-2.5 inline-flex'>
										<div className='justify-center items-center gap-0.5 flex'>
											<div className="text-emerald-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
												Working
											</div>
											<div className='w-4 h-4 justify-center items-center flex'>
												<div className='w-4 h-4 relative'></div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
										Energy Consumed
									</div>
									<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
										36 KWh
									</div>
								</div>
								<div className='justify-start items-center gap-2 inline-flex'>
									<div className='w-10 h-10 p-2 bg-white rounded-[100px] border border-zinc-100 justify-center items-center flex'>
										<div className='grow shrink basis-0 self-stretch pl-[4.25px] pr-[3.92px] pt-[4.25px] pb-[3.60px] justify-center items-center inline-flex'>
											<PiPencilSimpleLineDuotone size={24} />
										</div>
									</div>
									<div className='w-10 h-10 p-2 bg-white rounded-[100px] border border-zinc-100 justify-center items-center flex'>
										<div className='grow shrink basis-0 self-stretch pl-[3.75px] pr-[3.29px] py-[2.75px] justify-center items-center inline-flex'>
											<PiTrashSimpleLight size={24} />
										</div>
									</div>
									<div className='w-[51px] h-[31px] justify-center items-center flex'>
										<div className='w-[51px] h-[31px] relative rounded-2xl flex-col justify-start items-start flex'>
											<BsToggleOn color='#4185C6' size={24} />
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</Sidebar>
	);
};

export default ChargingStation;
