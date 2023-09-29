'use client';

import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';
import { BsArrowLeft, BsRecordCircle, BsCircle } from 'react-icons/bs';
import { PiPencilSimpleLineDuotone, PiTrashSimpleLight } from 'react-icons/pi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const UpdateAndManageFAQ = () => {
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

	const [faqList, setFaqList] = useState([
		{
			id: 1,
			title: 'What is Lorem Ipsum?',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
			isOpen: false,
		},
		{
			id: 2,
			title: 'What is Lorem Ipsum?',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
			isOpen: false,
		},
		{
			id: 3,
			title: 'What is Lorem Ipsum?',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
			isOpen: false,
		},
	]);

	const _onOpen = (id: number) => {
		const dat = [...faqList];
		const findIdx = dat.findIndex((o) => o.id === id);
		dat[findIdx].isOpen = !dat[findIdx].isOpen;
		setFaqList(dat);
	};

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='w-full flex flex-row items-center justify-between'>
					<div className='flex flex-row items-center'>
						<Link
							href='/content-management/update-and-manage'
							className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
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
					<Link href="/content-management/update-and-manage/edit-faqs" className='w-12 h-12  bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
						<div className='w-[20.57px] h-[20.57px] flex-col justify-center items-center inline-flex'>
							<PiPencilSimpleLineDuotone size={24} />
						</div>
					</Link>
				</div>
				<div className='h-6' />
				<div className='w-full flex flex-col px-8 pt-8 pb-[456px] bg-white rounded-2xl border border-zinc-100 justify-center items-center'>
					{faqList.map((o) => (
						<div key={o.id} onClick={() => _onOpen(o.id)} className='w-full py-4 flex flex-col border-b-2 cursor-pointer'>
							<div className='w-full flex flex-row justify-between items-center'>
								<div className="text-black text-lg font-medium font-['SF Pro Display'] leading-tight">
									{o.title}
								</div>
								{o.isOpen ? (
									<AiOutlineMinus onClick={() => _onOpen(o.id)} size={24} />
								) : (
									<AiOutlinePlus onClick={() => _onOpen(o.id)} size={24} />
								)}
							</div>
							<div className='h-3' />
							{o.isOpen && (
								<div className="text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
									{o.description}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</Sidebar>
	);
};

export default UpdateAndManageFAQ;
