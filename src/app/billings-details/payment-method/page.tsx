'use client';

import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsRecordCircle, BsCircle } from 'react-icons/bs';
import {
	PiDotsThreeOutlineVerticalFill,
	PiPencilSimpleLineDuotone,
	PiTrashSimpleLight,
} from 'react-icons/pi';
import Link from 'next/link';
import Modal from '@/components/modal';
import Image from 'next/image';

const PaymentMethod = () => {
	const [cardList, setCardList] = useState([
		{
			id: 1,
			cardNumber: '**** **** **** 1234',
			logo: '',
			expiry: '25/08/2025',
		},
		{
			id: 2,
			cardNumber: '**** **** **** 1234',
			logo: '',
			expiry: '25/08/2025',
		},
		{
			id: 3,
			cardNumber: '**** **** **** 1234',
			logo: '',
			expiry: '25/08/2025',
		},
	]);

	const [selectedCard, setSelectedCard] = useState({
		id: 1,
		cardNumber: '**** **** **** 1234',
		logo: '',
		expiry: '25/08/2025',
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<Sidebar>
				<div className='w-full'>
					<div className='text-black text-2xl font-medium leading-[30px]'>
						Billings Details
					</div>
					<div className='h-6' />
					<div className='w-full h-[754px] px-10 pt-12 pb-[267px] bg-white rounded-2xl border border-zinc-100 flex-col justify-start items-start gap-[32.59px] inline-flex'>
						<div className='self-stretch flex-col justify-start items-start gap-[31px] inline-flex'>
							{cardList.map((item) => (
								<div
									key={item.id}
									className='w-full h-[96.14px] flex flex-row justify-between relative cursor-pointer'
									onClick={() => setSelectedCard(item)}>
									<div className='justify-start items-center gap-6 inline-flex'>
										<div className='w-6 h-6 relative'>
											{item.id === selectedCard.id ? (
												<BsRecordCircle color='#407BBF' size={24} />
											) : (
												<BsCircle color='#F2F2F2' size={24} />
											)}
										</div>
										<div className='justify-start items-start gap-9 flex'>
											<div className='w-[90px] h-[64.14px] px-4 pt-[3px] pb-[3.14px] rounded-lg border border-stone-300 justify-center items-center flex'>
												<div className='w-[58px] h-[58px] relative flex-col justify-start items-start flex' />
											</div>
											<div className='flex-col justify-start items-start gap-3 inline-flex'>
												<div className='justify-start items-center gap-2.5 inline-flex'>
													{item.cardNumber}
												</div>
												<div className="text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight">
													Expiry {item.expiry}
												</div>
											</div>
										</div>
									</div>
									<div className='justify-center items-center gap-2 inline-flex'>
										<Link href="/billings-details/payment-method/update" className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center flex cursor-pointer'>
											<PiPencilSimpleLineDuotone size={24} />
										</Link>
										<div onClick={openModal} className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center flex cursor-pointer'>
											<PiTrashSimpleLight size={24} />
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
												Are you sure that you want to delete {item.cardNumber} ?
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
								</div>
							))}
						</div>
						<Link href="/billings-details/payment-method/create" className='self-stretch justify-start items-start inline-flex cursor-pointer'>
							<div className='w-[246px] cursor-pointer px-4 py-4 bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<AiOutlinePlusCircle size={24} color='white' />
								<div className="text-center text-white text-base font-medium font-['SF Pro Display'] leading-3">
									Add Payment Method
								</div>
							</div>
						</Link>
					</div>
				</div>
			</Sidebar>
		</div>
	);
};

export default PaymentMethod;
