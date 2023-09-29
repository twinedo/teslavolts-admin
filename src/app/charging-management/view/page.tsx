'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsToggleOn, BsToggleOff, BsArrowLeft } from 'react-icons/bs';
import { PiPencilSimpleLineDuotone, PiTrashSimpleLight } from 'react-icons/pi';
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Area,
	ResponsiveContainer,
	AreaChart,
} from 'recharts';
import Link from 'next/link';

const ChargingManagementView = () => {
	const MapImage = '/assets/img_trip_view.svg';
	const breadcrumbItems = [
		{ text: 'Charging Management', link: '/charging-management' },
		{ text: 'View Charging Management', link: '/charging-management/view' },
	];

	const [isEndSession, setIsEndSession] = useState(false);
	const [isAvailable, setIsAvailable] = useState(false);

	const data = [
		{ name: 'Jan', yName: '₹' + 400, uv: 400, pv: 2400 },
		{ name: 'Feb', yName: '₹' + 300, uv: 300, pv: 1398 },
		{ name: 'Mar', yName: '₹' + 200, uv: 200, pv: 9800 },
		{ name: 'Apr', yName: '₹' + 278, uv: 278, pv: 3908 },
		{ name: 'May', yName: '₹' + 189, uv: 189, pv: 4800 },
		{ name: 'Jun', yName: '₹' + 239, uv: 239, pv: 3800 },
		// { name: 'Jul', yName: '₹', uv: 349, pv: 4300 },
		// { name: 'Aug', yName: '₹', uv: 390, pv: 2400 },
		// { name: 'Sep', yName: '₹', uv: 290, pv: 1398 },
		// { name: 'Oct', yName: '₹', uv: 250, pv: 9800 },
		// { name: 'Nov', yName: '₹', uv: 400, pv: 3908 },
		// { name: 'Dec', yName: '₹', uv: 300, pv: 4800 },
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center justify-between'>
					<div className='flex flex-row items-center'>
					<Link
						href='/charging-management'
						passHref
						className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
						<div className='w-4' />
						<div className='flex flex-col'>
							<div className=''>
								<Breadcrumb items={breadcrumbItems} />
							</div>
							<div className='text-black text-2xl font-medium leading-[30px]'>
								View Charging Management
							</div>
						</div>
					</div>
					<div className='flex flex-1 flex-row items-center justify-around'>
						<h2>End Session</h2>
						<div className='flex flex-row items-center justify-evenly'>
							<div>OFF</div>
							{isEndSession ? (
								<BsToggleOn
									size={24}
									color='blue'
									onClick={() => setIsEndSession(!isEndSession)}
								/>
							) : (
								<BsToggleOff
									size={24}
									color='grey'
									onClick={() => setIsEndSession(!isEndSession)}
								/>
							)}
							<div>ON</div>
						</div>
						<div className='flex flex-row justify-evenly'>
							<div className='w-12 h-12  bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
								<div className='w-[20.57px] h-[20.57px] flex-col justify-center items-center inline-flex'>
									<PiPencilSimpleLineDuotone size={24} />
								</div>
							</div>

							<div className='w-12 h-12  bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
								<div className='w-[20.57px] h-[20.57px] flex-col justify-center items-center inline-flex'>
									<PiTrashSimpleLight size={24} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full grid grid-cols-4 gap-6 p-4 relative bg-white rounded-2xl border border-zinc-100'>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							Session Name
						</div>
						<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
							Troy Northwestern
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							Session Duration
						</div>
						<div className="text-stone-950 text-lg font-normal font-['SF Pro Display'] leading-tight">
							09:00-10:00PM
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="w-[165px] text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							Energy Consumed
						</div>
						<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
							36 KWh
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							No. of Connectors
						</div>
						<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
							345
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							Type of Connector
						</div>
						<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
							Type 2
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							Availability
						</div>
						{isAvailable ? (
							<BsToggleOn
								size={24}
								color='blue'
								onClick={() => setIsAvailable(!isAvailable)}
							/>
						) : (
							<BsToggleOff
								size={24}
								color='grey'
								onClick={() => setIsAvailable(!isAvailable)}
							/>
						)}
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="w-[165px] text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							Charging Price
						</div>
						<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
							₹11.40
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
							Charging Location
						</div>
						<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
							Troy Northwestern Properties
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='flex flex-row'>
					<div className='flex flex-col w-[50%] p-4 relative bg-white rounded-2xl border border-zinc-100'>
						<div className='flex flex-row items-center justify-between'>
							<div className='text-center text-stone-950 text-2xl font-medium leading-[30px]'>
								Revenue
							</div>
							<div className='w-[106px] h-5 justify-start items-center gap-2 inline-flex'>
								<div className='text-center text-stone-950 text-sm font-normal leading-[17px]'>
									Last 30 Days
								</div>
								<div className='w-5 h-5 justify-center items-center flex'>
									<div className='w-5 h-5 relative'></div>
								</div>
							</div>
						</div>
						<div className='h-6' />
						<ResponsiveContainer width='100%' height={300}>
							<AreaChart data={data}>
								<defs>
									<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
										<stop offset='5%' stopColor='#0BB07E' stopOpacity={0.8} />
										<stop offset='95%' stopColor='#0BB07E' stopOpacity={0} />
									</linearGradient>
								</defs>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='name' />
								<YAxis />
								<Tooltip />
								<Area
									type='monotone'
									dataKey={'uv'}
									stroke='#0BB07E'
									fill='url(#colorUv)' // Fill with the defined linear gradient
									strokeWidth={2} // Adjust the line thickness as needed
									dot={{
										r: 6,
										strokeWidth: 2,
										stroke: '#0BB07E',
										fill: '#fff',
									}} // Customize data points
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
					<div className='flex flex-col w-[50%] p-4 relative bg-white rounded-2xl border border-zinc-100'>
						<div className='flex flex-row items-center justify-between'>
							<div className='text-center text-stone-950 text-2xl font-medium leading-[30px]'>
								Energy
							</div>
							<div className='w-[106px] h-5 justify-start items-center gap-2 inline-flex'>
								<div className='text-center text-stone-950 text-sm font-normal leading-[17px]'>
									Last 30 Days
								</div>
								<div className='w-5 h-5 justify-center items-center flex'>
									<div className='w-5 h-5 relative'></div>
								</div>
							</div>
						</div>
						<div className='h-6' />
						<ResponsiveContainer width='100%' height={300}>
							<AreaChart data={data}>
								<defs>
									<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
										<stop offset='5%' stopColor='#EB5757' stopOpacity={0.8} />
										<stop offset='95%' stopColor='#EB5757' stopOpacity={0} />
									</linearGradient>
								</defs>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='name' />
								<YAxis />
								<Tooltip />
								<Area
									type='monotone'
									dataKey={'uv'}
									stroke='#EB5757'
									fill='url(#colorUv)' // Fill with the defined linear gradient
									strokeWidth={2} // Adjust the line thickness as needed
									dot={{
										r: 6,
										strokeWidth: 2,
										stroke: '#EB5757',
										fill: '#fff',
									}} // Customize data points
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default ChargingManagementView;
