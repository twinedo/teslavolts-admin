import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const BookingsView = () => {
	const MapImage = '/assets/img_booking_map.svg';
	const breadcrumbItems = [
		{ text: 'Bookings', link: '/bookings' },
		{ text: 'View Booking', link: '/bookings/view' },
	];
	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<div className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
						<BsArrowLeft />
					</div>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							View Booking
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full px-8 flex flex-row items-center justify-between h-28 relative bg-white rounded-2xl border border-zinc-100'>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className='text-neutral-500 text-base font-normal leading-tight'>
							Station Name
						</div>
						<div className='text-stone-950 text-base font-normal leading-tight'>
							Wallbox DC Charger
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className='text-neutral-500 text-base font-normal leading-tight'>
							Date
						</div>
						<div className='text-stone-950 text-lg font-normal leading-tight'>
							16/07/2023
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className='w-[165px] text-neutral-500 text-base font-normal leading-tight'>
							Timings
						</div>
						<div className='text-stone-950 text-base font-normal leading-tight'>
							10:30 AM - 11:30 AM{' '}
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className='text-neutral-500 text-base font-normal leading-tight'>
							Address
						</div>
						<div className='text-stone-950 text-base font-normal leading-tight'>
							Begumpet, Hyderabad
						</div>
					</div>
					<div className='flex-col justify-start items-start gap-2 inline-flex'>
						<div className='text-neutral-500 text-base font-normal leading-tight'>
							Booking Status
						</div>
						<div className='px-2 py-1.5 bg-emerald-500 bg-opacity-10 rounded-[100px] flex-col justify-center items-center gap-2.5 flex'>
							<div className='text-center text-emerald-500 text-sm font-normal leading-[17px]'>
								Confirmed
							</div>
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-[1146px] h-[376px] relative bg-white rounded-2xl border border-zinc-100'>
					<div className='left-[32px] top-[32px] absolute text-stone-950 text-2xl font-medium leading-[30px]'>
						Wallbox DC Charger
					</div>
					<div className='left-[32px] top-[94px] absolute flex-col justify-start items-start gap-4 inline-flex'>
						<div className='justify-start items-center gap-2 inline-flex'>
							<div className='w-[18px] h-[18px] justify-center items-center flex'>
								<div className='w-[18px] h-[18px] relative'>
									<AiOutlineCheck />
								</div>
							</div>
							<div className='text-stone-950 text-lg font-normal leading-tight'>
								20kW/30kW/40kW/60kW smart charging
							</div>
						</div>
						<div className='justify-start items-center gap-2 inline-flex'>
							<div className='w-[18px] h-[18px] justify-center items-center flex'>
								<div className='w-[18px] h-[18px] relative'>
									<AiOutlineCheck />
								</div>
							</div>
							<div className='text-stone-950 text-lg font-normal leading-tight'>
								Wall mount or pedestal mount
							</div>
						</div>
						<div className='justify-start items-center gap-2 inline-flex'>
							<div className='w-[18px] h-[18px] justify-center items-center flex'>
								<div className='w-[18px] h-[18px] relative'>
									<AiOutlineCheck />
								</div>
							</div>
							<div className='text-stone-950 text-lg font-normal leading-tight'>
								Support two vehicles simultaneously charging
							</div>
						</div>
						<div className='justify-start items-center gap-2 inline-flex'>
							<div className='w-[18px] h-[18px] justify-center items-center flex'>
								<div className='w-[18px] h-[18px] relative'>
									<AiOutlineCheck />
								</div>
							</div>
							<div className='text-stone-950 text-lg font-normal leading-tight'>
								SAE Combo, CHAdeMO, or GBT connectors
							</div>
						</div>
						<div className='justify-start items-center gap-2 inline-flex'>
							<div className='w-[18px] h-[18px] justify-center items-center flex'>
								<div className='w-[18px] h-[18px] relative'>
									<AiOutlineCheck />
								</div>
							</div>
							<div className='text-stone-950 text-lg font-normal leading-tight'>
								OCPP 1.6J & OCPP 2.0
							</div>
						</div>
					</div>
					<div className='w-[573px] h-[216px] left-[541px] top-[32px] absolute'>
						<Image
							// className='w-[375px] h-[812px] left-[692px] top-[-79px] absolute origin-top-left rotate-90'
							width={573}
							height={216}
							src={MapImage}
							alt='viewbooking'
						/>
					</div>
					<div className='left-[850px] top-[288px] absolute justify-start items-start gap-4 inline-flex'>
						<div className='h-14 justify-start items-start flex'>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-white rounded-lg border border-rose-500 justify-center items-center gap-2 flex'>
								<div className='text-center text-rose-500 text-base font-medium leading-3'>
									Delete
								</div>
							</div>
						</div>
						<div className='h-14 justify-start items-start flex'>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Share
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default BookingsView;
