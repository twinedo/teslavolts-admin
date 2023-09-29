'use client';

import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';
import { BsArrowLeft, BsRecordCircle, BsCircle } from 'react-icons/bs';
import {
	PiDotsThreeOutlineVerticalFill,
	PiPencilSimpleLineDuotone,
	PiTrashSimpleLight,
} from 'react-icons/pi';

const UpdateAndManageTC = () => {
	const breadcrumbItems = [
		{ text: 'Content Management', link: '/content-management' },
		{
			text: 'Update & Manage App Content',
			link: '/content-management/update-and-manage',
		},
		{
			text: 'Terms & Conditions',
			link: '/content-management/update-and-manage/terms-conditions',
		},
	];

	return (
		<Sidebar>
			<div className='w-full'>
				<div className="flex flex-row items-center justify-between">
				<div className='flex flex-row items-center'>
					<Link href="/content-management/update-and-manage" className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Terms & Conditions
						</div>
					</div>
				</div>
				<div>
					<Link href="/content-management/update-and-manage/terms-conditions/update" className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<PiPencilSimpleLineDuotone />
					</Link>
				</div>
				</div>
				<div className='h-6' />
				<div className='w-full h-[802px] px-8 pt-8 pb-[307px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
					<div className='w-full self-stretch flex-col justify-start items-start gap-8 inline-flex'>
						<div className='flex-col justify-start items-start gap-[13px] flex'>
							<div className="text-black text-lg font-medium font-['SF Pro Display'] leading-tight">
								What is Lorem Ipsum?
							</div>
							<div className="w-full text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry`s standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged.
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-[13px] flex'>
							<div className="text-black text-lg font-medium font-['SF Pro Display'] leading-tight">
								Why do we use it?
							</div>
							<div className="w-full text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using `Content
								here, content here`, making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem
								Ipsum as their default model text, and a search for `Lorem
								ipsum`` will uncover many web sites still in their infancy.
								Various versions have evolved over the years, sometimes by
								accident, sometimes on purpose (injected humour and the like).
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-[13px] flex'>
							<div className="text-black text-lg font-medium font-['SF Pro Display'] leading-tight">
								Where does it come from?
							</div>
							<div className="w-full text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old. Richard McClintock, a
								Latin professor at Hampden-Sydney College in Virginia, looked up
								one of the more obscure Latin words, consectetur, from a Lorem
								Ipsum passage, and going through the cites of the word in
								classical literature, discovered the undoubtable source. Lorem
								Ipsum comes from sections 1.10.32 and 1.10.33 of `de Finibus
								Bonorum et Malorum` (The Extremes of Good and Evil) by Cicero,
								written in 45 BC. This book is a treatise on the theory of
								ethics, very popular during the Renaissance. The first line of
								Lorem Ipsum, `Lorem ipsum dolor sit amet..`, comes from a line
								in section 1.10.32.
								<br />
								<br />
								The standard chunk of Lorem Ipsum used since the 1500s is
								reproduced below for those interested. Sections 1.10.32 and
								1.10.33 from `de Finibus Bonorum et Malorum`` by Cicero are also
								reproduced in their exact original form, accompanied by English
								versions from the 1914 translation by H. Rackham.
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default UpdateAndManageTC;
