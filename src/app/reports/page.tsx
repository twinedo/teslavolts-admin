'use client';

import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import { HiOutlineDownload } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Area,
	ResponsiveContainer,
	AreaChart,
} from 'recharts';

const Reports = () => {
	const data = [
		{ name: 'Jan', yName: '₹' + 400, uv: 400, pv: 2400 },
		{ name: 'Feb', yName: '₹' + 300, uv: 300, pv: 1398 },
		{ name: 'Mar', yName: '₹' + 200, uv: 200, pv: 9800 },
		{ name: 'Apr', yName: '₹' + 278, uv: 278, pv: 3908 },
		{ name: 'May', yName: '₹' + 189, uv: 189, pv: 4800 },
		{ name: 'Jun', yName: '₹' + 239, uv: 239, pv: 3800 },
	];
	const [selectedTab, setSelectedTab] = useState(1);

	const [tabMenu] = useState([
		{
			id: 1,
			name: 'CPO Report',
			isSelected: false,
		},
		{
			id: 2,
			name: 'USER Report',
			isSelected: false,
		},
	]);

	const _onTabClick = (clickedTabId: number) => {
		setSelectedTab(clickedTabId);
	};

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='w-full flex flex-row justify-between items-center'>
					<div className='text-black text-2xl font-medium leading-[30px]'>
						Reports
					</div>
					<div className='h-10 py-2 px-2 bg-white rounded-[100px] border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex'>
						<div className='justify-start items-center gap-2 inline-flex'>
							<div className="text-center text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
								Last 30 Days
							</div>
							<div className='w-6 h-6 justify-center items-center flex'>
								<BiChevronDown />
							</div>
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-[606px]'>
					{tabMenu.map((tab) => (
						<div
							key={tab.id}
							className={`w-[202px] cursor-pointer pb-1.5 ${
								selectedTab === tab.id
									? 'border-b border-blue-500'
									: 'border-b border-neutral-200'
							} justify-center items-center gap-2.5 inline-flex`}
							onClick={() => _onTabClick(tab.id)}>
							<div
								className={`text-lg font-medium font-'SF Pro Display' leading-tight ${
									selectedTab === tab.id ? 'text-blue-500' : 'text-gray-500'
								}`}>
								{tab.name}
							</div>
						</div>
					))}
				</div>
				<div className='h-6' />
				<div className='flex flex-row w-full items-center justify-between'>
					<div className='w-[30%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
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
					<div className='w-[30%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
						<div className='flex-col justify-start items-start gap-4 flex'>
							<div className='text-center text-neutral-500 text-base font-normal leading-tight'>
								Energy
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
					<div className='w-[30%] h-[124px] p-6 bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex'>
						<div className='flex-col justify-start items-start gap-4 flex'>
							<div className='text-center text-neutral-500 text-base font-normal leading-tight'>
								Transactions
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

					<div className='h-4' />
				</div>
				<div className='h-6' />
				<div className='w-full h-[692px] p-4 relative bg-white rounded-2xl border border-zinc-100'>
					<div className='w-full flex flex-row justify-between items-center'>
						<div className=" text-center text-stone-950 text-2xl font-medium font-['SF Pro Display'] leading-[30px]">
							Revenue
						</div>
						<div className='flex flex-row'>
							<div className='pl-3.5 pr-3 py-2 bg-white rounded-[100px] border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex'>
								<div className='justify-start items-center gap-2 inline-flex'>
									<div className="text-center text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
										Download Report
									</div>
									<div className='w-5 h-5 justify-center items-center flex'>
										<HiOutlineDownload />
									</div>
								</div>
							</div>
							<div className='pl-3.5 pr-2 py-2 bg-white rounded-[100px] border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex'>
								<div className='justify-start items-center gap-2 inline-flex'>
									<div className="text-center text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
										Last 30 Days
									</div>
									<div className='w-5 h-5 justify-center items-center flex'>
										<FiChevronDown />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[1097px] left-[24px] top-[112px] absolute'>
						<div className="left-0 top-0 absolute text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							₹100k
						</div>
					</div>
					<div className='w-[1097px] left-[24px] top-[187px] absolute'>
						<div className="left-0 top-0 absolute text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							₹50k
						</div>
					</div>
					<div className='w-[1097px] left-[24px] top-[262px] absolute'>
						<div className="left-0 top-0 absolute text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							₹40k
						</div>
					</div>
					<div className='w-[1097px] left-[24px] top-[337px] absolute'>
						<div className="left-0 top-0 absolute text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							₹30k
						</div>
					</div>
					<div className='w-[1097px] left-[24px] top-[412px] absolute'>
						<div className="left-0 top-0 absolute text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							₹20k
						</div>
					</div>
					<div className='w-[1097px] left-[24px] top-[487px] absolute'>
						<div className="left-0 top-0 absolute text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							₹10k
						</div>
					</div>
					<div className='w-[1097px] left-[24px] top-[562px] absolute'>
						<div className="left-0 top-0 absolute text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							₹0
						</div>
					</div>
					<div className='left-[65px] top-[603px] absolute justify-start items-start gap-[69px] inline-flex'>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Jan
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Feb
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Mar
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Apr
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							May
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Jun
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Jul
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Aug
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Sep
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Oct
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Nov
						</div>
						<div className="text-right text-neutral-400 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
							Dec
						</div>
					</div>
					<div className='left-[454.50px] top-[651px] absolute justify-start items-start gap-8 inline-flex'>
						<div className='justify-start items-center gap-1.5 flex'>
							<div className='w-4 h-4 bg-rose-500 rounded-sm' />
							<div className="text-right text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
								Previous Month
							</div>
						</div>
						<div className='justify-start items-center gap-1.5 flex'>
							<div className='w-4 h-4 bg-emerald-500 rounded-sm' />
							<div className="text-right text-stone-950 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
								This Month
							</div>
						</div>
					</div>
					<div className='w-[1056.50px] h-[435px] left-[64px] top-[194px] absolute'></div>
					<div className='w-[1055px] h-[375px] left-[66px] top-[178px] absolute'></div>
					<div className='w-[89px] h-[358px] left-[471px] top-[212px] absolute opacity-40 bg-gradient-to-b from-blue-500 to-blue-500 rounded' />
					<div className='w-[26px] h-[26px] left-[502px] top-[258px] absolute bg-blue-500 rounded-full shadow border-4 border-white' />
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
		</Sidebar>
	);
};

export default Reports;
