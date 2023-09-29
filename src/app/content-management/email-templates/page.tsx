'use client';

import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';
import { BsArrowLeft, BsRecordCircle, BsCircle } from 'react-icons/bs';

interface ITemplate {
	id: number;
	name: 'default' | '1' | '2';
	text: string;
}

const ContentManagement = () => {
	const breadcrumbItems = [
		{ text: 'Content Management', link: '/content-management' },
		{
			text: 'Customize Email Templates',
			link: '/content-management/email-templates',
		},
	];

	const [selectedTemplate, setSelectedTemplate] = useState<ITemplate>({
		id: 1,
		name: 'default',
		text: 'Default Template',
	});

	const templates: ITemplate[] = [
		{
			id: 1,
			text: 'Default Template',
			name: 'default',
		},
		{
			id: 2,
			text: 'Template 1',
			name: '1',
		},
		{
			id: 3,
			text: 'Template 2',
			name: '2',
		},
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
							Customize Email Templates
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-4 h-[558px] relative bg-white rounded-2xl border border-zinc-100'>
					<div className="text-black text-2xl font-medium font-['SF Pro Display'] leading-[30px]">
						Choose Email Template
					</div>
					<div className='h-6' />
					<div className='justify-evenly items-center gap-[33px] inline-flex'>
						{templates.map((o: ITemplate) => (
							<div
								key={o.id.toString()}
								className={`w-[30%] h-[w-[30%]] px-6 pt-[22px] pb-6 cursor-pointer bg-white rounded-2xl border flex-col justify-center items-start gap-[22px] inline-flex ${
									selectedTemplate.id === o.id
										? 'border-[#407BBF]'
										: 'border-[#DADFE5]'
								}`}
								onClick={() => setSelectedTemplate(o)}>
								<div className='justify-start items-center gap-2.5 inline-flex'>
									<div className='w-6 h-6 relative'>
										{selectedTemplate.id === o.id ? (
											<BsRecordCircle color='#407BBF' size={32} />
										) : (
											<BsCircle color='#A1A1A1' size={32} />
										)}
									</div>

									<div className="text-black text-lg font-medium font-['SF Pro Display'] leading-tight">
										{o.text}
									</div>
								</div>
								<img
									className='w-[296px] h-[252px] rounded-lg'
									src='https://via.placeholder.com/296x252'
								/>
							</div>
						))}
					</div>
					<div className='h-6' />
					<div className='w-full justify-end items-end inline-flex'>
						<div className='w-[171px] px-4 py-4 bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
							<div className="text-center text-white text-base font-medium font-['SF Pro Display'] leading-3">
								Apply Template
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default ContentManagement;
