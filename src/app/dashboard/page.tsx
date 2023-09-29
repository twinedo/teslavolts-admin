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
} from 'recharts';

const Dashboard = () => {
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
				<div className='text-black text-2xl font-medium leading-[30px]'>
					Dashboard
				</div>
				<div className='flex flex-row w-full items-center justify-between'>
					<div className='w-[25%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
						<div className='flex-col justify-start items-start gap-4 flex'>
							<div className='text-center text-neutral-500 text-base font-normal leading-tight'>
								Revenue
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
								Charging Station
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
								Locations
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
								Customers
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
				<div className='h-4' />
				<div className='flex flex-col w-full relative p-4 bg-white rounded-2xl '>
					<div className='flex flex-row items-center justify-between'>
						<div className='text-stone-950 text-2xl font-medium leading-[30px]'>
							Recent Transactions
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
					<div className='h-4' />
					<div className='w-full overflow-hidden rounded-lg'>
						<div className='w-full bg-neutral-50 text-[#767676] px-4 py-2'>
							<div className='grid grid-cols-7 gap-2'>
								<div className='col-span-1'>ID#</div>
								<div className='col-span-1'>Station Name</div>
								<div className='col-span-1'>Energy</div>
								<div className='col-span-1'>Amount</div>
								<div className='col-span-1'>Date</div>
								<div className='col-span-1'>Status</div>
								<div className='col-span-1'>Action</div>
							</div>
						</div>
						<div className='w-full overflow-x-aut'>
							<div className='w-full bg-white text-black px-4 py-2'>
								<div className='grid grid-cols-7 gap-2'>
									<div className='col-span-1'>0001</div>
									<div className='col-span-1'>Wallbox DC Charger</div>
									<div className='col-span-1'>36 KWh</div>
									<div className='col-span-1'>₹400</div>
									<div className='col-span-1'>22/07/2023</div>
									<div className='col-span-1'>
										<div className='w-[81px] h-[29px] px-2 py-1.5 bg-emerald-500 bg-opacity-10 rounded-[100px] justify-center items-center gap-2.5 inline-flex'>
											<div className='justify-center items-center gap-0.5 flex'>
												<div className='text-emerald-500 text-sm font-normal leading-[17px]'>
													Completed
												</div>
											</div>
										</div>
									</div>
									<div className='col-span-1'>Action</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default Dashboard;
