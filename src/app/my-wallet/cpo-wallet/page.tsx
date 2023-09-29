'use client';

import Sidebar from '@/components/sidebar';
import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Area,
	ResponsiveContainer,
	AreaChart,
	BarChart,
	Legend,
	Bar,
} from 'recharts';
import { BiChevronDown, BiChevronUp, BiMapAlt } from 'react-icons/bi';

const CPOWallet = () => {
	const data = [
		{
			name: 'Jan',
			yName: '₹' + 400,
			revenue: 400,
			completed: 240,
			canceled: 240,
			new: 240,
		},
		{
			name: 'Feb',
			yName: '₹' + 300,
			revenue: 300,
			completed: 139,
			canceled: 139,
			new: 139,
		},
		{
			name: 'Mar',
			yName: '₹' + 200,
			revenue: 200,
			completed: 980,
			canceled: 980,
			new: 980,
		},
		{
			name: 'Apr',
			yName: '₹' + 278,
			revenue: 278,
			completed: 390,
			canceled: 390,
			new: 390,
		},
		{
			name: 'May',
			yName: '₹' + 189,
			revenue: 189,
			completed: 480,
			canceled: 480,
			new: 480,
		},
		{
			name: 'Jun',
			yName: '₹' + 239,
			revenue: 239,
			completed: 380,
			canceled: 380,
			new: 380,
		},
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='w-full flex flex-row items-center justify-between'>
					<div className='text-black text-2xl font-medium leading-[30px]'>
						My Wallet
					</div>
					<div className='w-[143px] h-10 pl-3.5 pr-2 py-2 bg-white rounded-[100px] border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex'>
						<div className='justify-start items-center gap-2 inline-flex'>
							<div className="text-center text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
								Last 30 Days
							</div>
							<div className='w-6 h-6 justify-center items-center flex'>
								<BiChevronDown size={24} />
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row w-full border-2 items-center justify-between'>
					<div className='w-[25%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
						<div className='flex-col justify-start items-start gap-4 flex'>
							<div className='text-center text-neutral-500 text-base font-normal leading-tight'>
								Revenue to date
							</div>
							<div className='relative flex flex-row items-center justify-between'>
								<div className='text-stone-950 text-[40px] font-semibold leading-10'>
									₹400K
								</div>
								<div className='h-6 justify-start items-center gap-2 inline-flex'>
									<div className='flex flex-row text-center text-emerald-500 text-base font-medium leading-tight'>
										<FaArrowTrendUp />
										+20%
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[25%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
						<div className='flex-col justify-start items-start gap-4 flex'>
							<div className='text-center text-neutral-500 text-base font-normal leading-tight'>
								Avg Selling Price
							</div>
							<div className='relative flex flex-row items-center justify-between'>
								<div className='text-stone-950 text-[40px] font-semibold leading-10'>
									₹400K
								</div>
								<div className='h-6 justify-start items-center gap-2 inline-flex'>
									<div className='flex flex-row text-center text-emerald-500 text-base font-medium leading-tight'>
										<FaArrowTrendUp />
										+20%
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[25%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
						<div className='flex-col justify-start items-start gap-4 flex'>
							<div className='text-center text-neutral-500 text-base font-normal leading-tight'>
								Charging Completed
							</div>
							<div className='relative flex flex-row items-center justify-between'>
								<div className='text-stone-950 text-[40px] font-semibold leading-10'>
									₹400K
								</div>
								<div className='h-6 justify-start items-center gap-2 inline-flex'>
									<div className='flex flex-row text-center text-emerald-500 text-base font-medium leading-tight'>
										<FaArrowTrendDown />
										+17%
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[25%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
						<div className='flex-col justify-start items-start gap-4 flex'>
							<div className='text-center text-neutral-500 text-base font-normal leading-tight'>
								Earned in July
							</div>
							<div className='relative flex flex-row items-center justify-between'>
								<div className='text-stone-950 text-[40px] font-semibold leading-10'>
									₹400K
								</div>
								<div className='h-6 justify-start items-center gap-2 inline-flex'>
									<div className='flex flex-row text-center text-emerald-500 text-base font-medium leading-tight'>
										<FaArrowTrendUp />
										+20%
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='h-4' />
				</div>
				<div className='h-4' />
				<div className='flex flex-row'>
					<div className='flex flex-col w-full p-4 relative bg-white rounded-2xl border border-zinc-100'>
						<div className='flex flex-row items-center justify-between'>
							<div className='text-center text-stone-950 text-2xl font-medium leading-[30px]'>
								Overview
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
							<BarChart data={data}>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='name' />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey='revenue' fill='#75DFEE' name='Revenue (₹900)' />
								<Bar dataKey='completed' fill='#EB5757' name='Completed (₹900)' />
								<Bar dataKey='cancelled' fill='#407BBF' name='Cancelled (1)' />
								<Bar dataKey='new' fill='#0BB07E' name='New Order (1)' />
							</BarChart>
						</ResponsiveContainer>
						<div className='h-6' />
						{/* <div className='w-full flex flex-row items-center justify-center'>
							<div className='flex flex-row gap-2 items-center'>
								<div className='w-4 h-4 bg-cyan-300 rounded-sm' />
								<div className="text-right text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
									Revenue (₹900)
								</div>
							</div>
							<div className='flex flex-row gap-2 items-center'>
								<div className='w-4 h-4 bg-rose-500 rounded-sm' />
								<div className="text-right text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
									Completed (₹900)
								</div>
							</div>
							<div className='flex flex-row gap-2 items-center'>
								<div className='w-4 h-4 bg-blue-500 rounded-sm' />
								<div className="text-right text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
									Cancelled (6)
								</div>
							</div>
							<div className='flex flex-row gap-2 items-center'>
								<div className='w-4 h-4 bg-emerald-500 rounded-sm' />
								<div className="text-right text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
									New Order (1)
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default CPOWallet;
