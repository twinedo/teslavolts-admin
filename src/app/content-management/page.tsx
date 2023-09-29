'use client';

import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';

const ContentManagement = () => {
	const menu = [
		{
			id: 1,
			name: 'Update & Manage App Content',
			navigate: '/content-management/update-and-manage',
		},
		{
			id: 2,
			name: 'Manage Notifications',
			navigate: '/content-management/manage-notifications',
		},
		{
			id: 3,
			name: 'Customize Email Templates',
			navigate: '/content-management/email-templates',
		},
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='text-black text-2xl font-medium leading-[30px]'>
					Content Management
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

export default ContentManagement;
