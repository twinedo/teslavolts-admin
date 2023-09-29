import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import Link from 'next/link';

const UserManagementView = () => {
	const MapImage = '/assets/img_trip_view.svg';
	const breadcrumbItems = [
		{ text: 'User Management', link: '/user-management' },
		{ text: 'Bitfrost Connect', link: '/user-management/view' },
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link
						href='/user-management'
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
							Bitfrost Connect
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white relative rounded-2xl border border-zinc-100'>
					<div className=' items-center justify-between grid grid-cols-4 gap-4 '>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Full Name
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								Bifrost Connect
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Email Address
							</div>
							<div className='text-stone-950 text-lg font-normal leading-tight'>
								nevaeh.simmons@example.com
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='w-[165px] text-neutral-500 text-base font-normal leading-tight'>
								Contact Number
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								0879232121
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								USER ID
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								A0B1C027
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Registration Date
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								1 Feb, 2020
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Status
							</div>
							<div className='w-[81px] h-[29px] px-2 py-1.5 bg-emerald-500 bg-opacity-10 rounded-[100px] flex-col justify-center items-center gap-2.5 inline-flex'>
								<div className='text-center text-emerald-500 text-sm font-normal leading-[17px]'>
									Completed
								</div>
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2 inline-flex'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Balance
							</div>
							<div className='text-stone-950 text-base font-normal leading-tight'>
								₹11.40
							</div>
						</div>
					</div>
					<div className='h-6' />
				</div>
			</div>
		</Sidebar>
	);
};

export default UserManagementView;
