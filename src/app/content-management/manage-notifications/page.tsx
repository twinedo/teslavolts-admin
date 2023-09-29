'use client';

import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';
import { BsArrowLeft, BsToggleOff, BsToggleOn } from 'react-icons/bs';

const ContentManagementNotifications = () => {
	const breadcrumbItems = [
		{ text: 'Content Management', link: '/content-management' },
		{
			text: 'Manage Notifications',
			link: '/content-management/manage-notifications',
		},
	];

	const [selectedTab, setSelectedTab] = useState(1);

	const [tabMenu] = useState([
		{
			id: 1,
			name: 'Users',
			isSelected: false,
		},
		{
			id: 2,
			name: 'CPO Admins',
			isSelected: false,
		},
		{
			id: 3,
			name: 'Hosts',
			isSelected: false,
		},
	]);

	const [menuUsers, setMenuUsers] = useState([
		{
			id: 1,
			name: 'Booking Notifications',
			isActive: false,
		},
		{
			id: 2,
			name: 'User Management Notifications',
			isActive: false,
		},
		{
			id: 3,
			name: 'Charging Stations Notifications',
			isActive: false,
		},
		{
			id: 4,
			name: 'Trip Planner Notification',
			isActive: false,
		},
		{
			id: 5,
			name: 'Community Notification',
			isActive: false,
		},
	]);

	const _onTabClick = (clickedTabId: number) => {
		setSelectedTab(clickedTabId);
	};

	const _onToggleUsersClick = (id: number) => {
		const dat = [...menuUsers];
		const findIdx = dat.findIndex((x) => x.id === id);
		dat[findIdx].isActive = !dat[findIdx].isActive;
		setMenuUsers(dat);
	};

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
							Manage Notifications
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full h-[601px] p-6 relative bg-white rounded-2xl border border-zinc-100'>
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
						{/* <div className='w-[606px] h-[0px] border border-blue-200'></div> */}
					</div>
					<div className='h-6' />
					{selectedTab === 1 && (
						<div className='w-full flex-col justify-start items-start inline-flex gap-3'>
							{menuUsers.map((o) => (
								<div
									key={o.id}
									className='w-full h-16 p-4 pb-4 cursor-pointer bg-white border-b border-zinc-100 justify-between items-center inline-flex flex-row'
									onClick={() => _onToggleUsersClick(o.id)}>
									<div className="text-black text-lg font-normal font-['SF Pro Display']">
										{o.name}
									</div>
									{o.isActive ? (
										<BsToggleOn color='#4185C6' size={32} />
									) : (
										<BsToggleOff color='#4185C6' size={32} />
									)}
								</div>
							))}
						</div>
					)}
					<div className='h-6' />
					<div className='w-full flex flex-col justify-end items-end'>
						<div className='w-[122px] border-3 justify-end self-end items-end inline-flex'>
							<div className='w-[122px] h-[32px] grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className="text-center text-white text-base font-medium font-['SF Pro Display'] leading-3">
									Save
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default ContentManagementNotifications;
