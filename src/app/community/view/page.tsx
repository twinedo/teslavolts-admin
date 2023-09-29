import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const BookingsView = () => {
	const MapImage = '/assets/img_trip_view.svg';
	const breadcrumbItems = [
		{ text: 'Trip Planner', link: '/trip-planner' },
		{ text: 'View Trip', link: '/trip-planner/view' },
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
							View Trip
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white relative rounded-2xl border border-zinc-100'>
					<div className=' items-center justify-between grid grid-cols-3 gap-4 '>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								User Name
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								Bifrost Connect
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Trip Name
							</div>
							<div className='text-stone-950 text-lg font-normal leading-tight'>
								Evening Red Dunes Desert
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='w-[165px] text-neutral-500 text-base font-normal leading-tight'>
								Distance
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								230 kms 5 hours
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Route Station
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								3 Stations
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								From
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								Begumpet, Hyderabad
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								to
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								Begumpet, Hyderabad
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Total Charging Time
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								Begumpet, Hyderabad
							</div>
						</div>
					</div>
					<div className='h-6' />
					<Image width={1280} height={346} src={MapImage} alt='viewbooking' />
				</div>
			</div>
		</Sidebar>
	);
};

export default BookingsView;
