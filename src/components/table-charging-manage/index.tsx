import React, { useState, useEffect, useRef } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import {
	PiDotsThreeOutlineVerticalFill,
	PiPencilSimpleLineDuotone,
	PiTrashSimpleLight,
} from 'react-icons/pi';
import Modal from '@/components/modal';
import Image from 'next/image';
import Link from 'next/link';

export type DataItem = {
	id?: number;
	sessionName: string;
	sessionDuration: string;
	energy: string;
	connectors: string;
	status: boolean;
	actions: any;
};

type TableProps = {
	data: DataItem[];
};

const TableChargingManagement: React.FC<TableProps> = ({ data }) => {
	const [sortBy, setSortBy] = useState<{
		column: keyof DataItem | null;
		direction: 'asc' | 'desc';
	}>({
		column: null,
		direction: 'asc',
	});
	type PopupsState = Record<string, boolean>;
	const [newData, setNewData] = useState(data);
	const popupContainerRef = useRef<HTMLDivElement>(null);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleSort = (column: keyof DataItem) => {
		if (column === 'actions') {
			return; // Ignore sorting for the "Actions" column
		}

		setSortBy((prev) => ({
			column,
			direction:
				prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
		}));
		const sortedData = [...data].sort((a, b) => {
			if (sortBy.direction === 'asc') {
				return a[sortBy.column!] > b[sortBy.column!] ? 1 : -1;
			} else {
				return a[sortBy.column!] < b[sortBy.column!] ? 1 : -1;
			}
		});
		setNewData(sortedData);
	};

	const [popups, setPopups] = useState<PopupsState>({});

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setPopups({});
			}
		};
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				popupContainerRef.current &&
				!popupContainerRef.current.contains(event.target as Node)
			) {
				setPopups({});
			}
		};

		window.addEventListener('keydown', handleEscapeKey);
		window.addEventListener('mousedown', handleOutsideClick);

		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
			window.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	const handleOptionClick = (item: DataItem) => {
		console.log(`Option clicked for item with ID#${item.id}`);
		setPopups((prevState) => ({
			...prevState,
			[item.id!]: !prevState[item.id!],
		}));
	};

	const handleStatusClick = (item: DataItem) => {
		const dat = [...data];
		const findIdx = dat.findIndex((o) => o.id === item.id);
		dat[findIdx].status = !item.status;

		setNewData(dat);
	};

	return (
		<table className='table-fixed w-full '>
			<thead className='bg-neutral-50 rounded-lg'>
				<tr>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('sessionName')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Session Name
							</div>
							{sortBy.column === 'sessionName' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('sessionDuration')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Session Duration
							</div>
							{sortBy.column === 'sessionDuration' &&
							sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('energy')}>
						<div className='flex flex-row justify-center items-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Energy Consumed
							</div>
							{sortBy.column === 'energy' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('connectors')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Connectors
							</div>
							{sortBy.column === 'connectors' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('status')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Status
							</div>
							{sortBy.column === 'status' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th className='px-4 py-2 cursor-pointer'>Actions </th>
				</tr>
			</thead>
			<div className='h-6' />
			<tbody>
				{newData.map((row, i) => (
					<tr key={i}>
						<td className='px-4 py-2 text-center'>{row.sessionName}</td>
						<td className='px-4 py-2 text-center'>{row.sessionDuration}</td>
						<td className='px-4 py-2 text-center'>{row.energy}</td>
						<td className='px-4 py-2 text-center'>{row.connectors}</td>
						<td className='px-4 py-2 text-center'>
							<button onClick={() => handleStatusClick(row)}>
								{row.status ? (
									<BsToggleOn color='#4185C6' size={30} />
								) : (
									<BsToggleOff color='grey' size={30} />
								)}
							</button>
						</td>
						<td className='px-4 py-2 text-center relative'>
							<button
								className='rounded-full p-2 border'
								onClick={() => handleOptionClick(row)}>
								<PiDotsThreeOutlineVerticalFill color='black' size={30} />
							</button>
							{popups[row.id!] && ( // Check if popup should be visible
								<div
									ref={popupContainerRef}
									className='absolute top-0 right-0 z-10 w-[170px] text-left bg-white border border-1 p-2 gap-2'>
									<Link
										href='/charging-management/update'
										className='flex flex-row items-center py-2 cursor-pointer gap-2 bg-white hover:bg-[#F2F2F2]'>
										<PiPencilSimpleLineDuotone />{' '}
										<div className="text-neutral-700 text-base font-normal font-['SF Pro Display'] leading-tight">
											Edit User
										</div>
									</Link>
									<div
										onClick={openModal}
										className='flex flex-row items-center py-2 cursor-pointer gap-2 bg-white hover:bg-[#F2F2F2]'>
										<PiTrashSimpleLight />{' '}
										<div className="text-neutral-700 text-base font-normal font-['SF Pro Display'] leading-tight">
											Delete User
										</div>
									</div>
									<div className='flex flex-row items-center py-2 cursor-pointer gap-2 bg-white hover:bg-[#F2F2F2]'>
										<BsToggleOff />{' '}
										<div className="text-neutral-700 text-base font-normal font-['SF Pro Display'] leading-tight">
											Enabled
										</div>
									</div>
									<Modal isOpen={isModalOpen} onClose={closeModal}>
										<div className='w-[400px] flex flex-col justify-center items-center'>
											<Image
												src='/assets/ic_trash_red.svg'
												alt='trash'
												width={80}
												height={80}
											/>
											<div className='h-5 text-center text-stone-950 text-2xl font-semibold leading-loose'>
												Delete Booking
											</div>
											<div className='h-6' />
											<div className='text-center text-neutral-500 text-base font-medium leading-tight'>
												Are you sure that you want to delete {row.sessionName} ?
											</div>
											<div className='h-6' />
											<div className='w-full flex flex-row justify-evenly items-center'>
												<button className=' h-14 px-8 py-[26px] bg-rose-500 rounded-lg justify-center items-center gap-2 inline-flex'>
													<div className='text-center text-white text-base font-medium leading-3'>
														Yes, Delete
													</div>
												</button>
												<button
													onClick={closeModal}
													className=' h-14 px-8 py-[26px] bg-zinc-100 rounded-lg justify-center items-center gap-2 inline-flex'>
													<div className='text-center text-stone-950 text-base font-medium leading-3'>
														No, Thanks
													</div>
												</button>
											</div>
										</div>
									</Modal>
								</div>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default TableChargingManagement;
