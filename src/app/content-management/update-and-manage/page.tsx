'use client';

import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';
import { BsArrowLeft, BsRecordCircle, BsCircle } from 'react-icons/bs';

const UpdateAndManageFAQs = () => {
	const breadcrumbItems = [
		{ text: 'Content Management', link: '/content-management' },
		{
			text: 'Update & Manage App Content',
			link: '/content-management/update-and-manage',
		},
		{
			text: 'FAQs',
			link: '/content-management/update-and-manage/faqs',
		},
	];
	const menu = [
		{
			id: 1,
			name: 'FAQs',
			navigate: '/content-management/update-and-manage/faqs',
		},
		{
			id: 2,
			name: 'Announcements',
			navigate: '/content-management/update-and-manage/announcements',
		},
		{
			id: 3,
			name: 'Terms & Conditions',
			navigate: '/content-management/update-and-manage/terms-conditions',
		},
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link href="/content-management" className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Update & Manage App Content
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full h-[754px] px-8 pt-8 pb-[456px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
					<div className='grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex'>
						{menu.map((o) => (
							<Link
								href={o.navigate}
								key={o.id}
								className='w-full h-[78px] p-6 bg-white rounded-2xl border border-zinc-100 flex-row justify-between items-center gap-2.5 flex cursor-pointer'>
								<div className="text-black text-xl font-medium font-['SF Pro Display'] leading-[30px]">
									{o.name}
								</div>
								<div className='w-5 h-5 flex-col justify-center items-center inline-flex'>
									<div className='w-5 h-5 relative'>
										<BiSolidChevronRight />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default UpdateAndManageFAQs;
