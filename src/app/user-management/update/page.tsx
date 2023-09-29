'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsCalendarDate, BsClock, BsSearch } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp, BiMapAlt } from 'react-icons/bi';
import Modal from '@/components/modal';
import Image from 'next/image';
import Link from 'next/link';
import { Formik, Form, Field, useFormik } from 'formik';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as Yup from 'yup';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const UpdateUserSchema = Yup.object().shape({
	fullName: Yup.string()
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	contactNumber: Yup.number().required('Required'),
	userID: Yup.string().required('Required'),
	registrationDate: Yup.date().required('Required'),
	status: Yup.string().required('Required'),
	contactBalance: Yup.number().required('Required'),
});

export interface IFormType {
	id: number;
	title: string;
	placeholder: string;
	name: keyof IFormField;
	type: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
	isText: boolean;
	isOption: boolean;
	isDate: boolean;
	icon: any;
	options: any[]
}

export interface IFormField {
	fullName: string;
	email: string;
	contactNumber: string;
	userID: string;
	registrationDate: string;
	status: string;
	contactBalance: string;
}

const UserManagementUpdate = () => {
	const breadcrumbItems = [
		{ text: 'User Management', link: '/user-management' },
		{ text: 'Bitfrost Connect', link: '/user-management/update' },
		{ text: 'Edit User', link: '/user-management/update' },
	];

	const [registrationDate] = useState<Value>(new Date());

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const [formList, setFormList] = useState<IFormType[]>([
		{
			id: 1,
			title: 'Full Name',
			placeholder: 'John Doe',
			name: 'fullName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 2,
			title: 'Email Address',
			placeholder: 'John.Doe@teslavolts.com',
			name: 'email',
			type: 'email',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 3,
			title: 'Contact Number',
			placeholder: '0214578961',
			name: 'contactNumber',
			type: 'numeric',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 4,
			title: 'USER ID',
			placeholder: 'Aadqw12',
			name: 'userID',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 5,
			title: 'Registration Date',
			placeholder: registrationDate?.toString()!,
			name: 'registrationDate',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BsCalendarDate size={24} color="grey" />,
			options: []
		},
		{
			id: 6,
			title: 'Status',
			placeholder: 'Completed',
			name: 'status',
			type: 'none',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Completed', 'Cancelled', 'Pending']
		},
		{
			id: 7,
			title: 'Contact Balance',
			placeholder: '$11.40',
			name: 'contactBalance',
			type: 'decimal',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
	]);

	const _onFormClick = (key: IFormType, i: number) => {
		const dat = [...formList];
		if (key.id === 5) {
			dat[i].isDate = !dat[i].isDate;
			setFormList(dat);
		}
		if (key.id === 6) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
	}

	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			contactNumber: '',
			userID: '',
			registrationDate: moment().format('DD MMM, YYYY').toString(),
			status: '',
			contactBalance: '',
		},
		validationSchema: UpdateUserSchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

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
							Edit User
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
					{/* <div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'> */}
					<div className='grid grid-cols-3 gap-6 justify-center items-center w-full'>
						{formList.map((o: IFormType, i) => (
							<div key={o.id.toString()} className='flex-col justify-center items-start gap-2 inline-flex relative'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										{o.title}
									</div>
								</div>
								<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-between items-center inline-flex' onClick={() => _onFormClick(o, i)}>
									<input
										placeholder={o.placeholder}
										value={formik?.values[o.name]}
										className='flex flex-1 grow shrink basis-0 bg-white text-stone-950 text-base font-medium leading-tight outline-none'
										inputMode={o.type}
										disabled={o.isDate || o.isOption}
										onChange={(e) => formik.setFieldValue(o.name, e.target.value)}

									/>
									{!o.isText && (
										<div className='w-6 h-6 justify-center items-center flex'>
											<div className='w-6 h-6 relative'>
												{o.icon}
											</div>
										</div>
									)}
								</div>
								{formik?.errors[`${o.name}`] && formik?.touched[`${o.name}`] ? (
									<div className="text-red-500">{formik.errors[`${o.name}`]}</div>
								) : null}
								{o.isDate &&
									<div id={o.id.toString()} className='absolute top-[100px] z-10000'>
										<Calendar onChange={(date: any) => {
											console.log('date selected', date);
											formik.setFieldValue(`${o.name}`, moment(date).format('DD MMM, YYYY'));
											_onFormClick(o, i)
										}} value={formik.values[o.name]} />
									</div>}
								{o.isOption && (
									<div className='absolute top-[100px] z-50 max-h-[250px] overflow-y-scroll bg-white p-4 shadow-md w-full cursor-pointer gap-4'>
										{o.options.map(opt => (
											<div key={opt} className="hover: text-bold" onClick={() => {
												console.log('text selected', opt);
												formik.setFieldValue(`${o.name}`, opt);
												_onFormClick(o, i)
											}}>{opt}</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
					{/* </div> */}
					<div className='self-stretch justify-end items-end gap-4 inline-flex'>
						<div
							className='h-14 justify-start items-start inline-flex '
							onClick={openModal}>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-white rounded-lg border border-blue-500 justify-center items-center gap-2 flex cursor-pointer'>
								<div className='text-center text-blue-500 text-base font-medium leading-3'>
									Delete
								</div>
							</div>
						</div>
						<div className='w-6' />
						<div className='h-14 justify-start items-start flex cursor-pointer' onClick={() => formik.handleSubmit()}>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex cursor-pointer'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Save Session
								</div>
							</div>
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
								Delete Trip
							</div>
							<div className='h-6' />
							<div className='text-center text-neutral-500 text-base font-medium leading-tight'>
								Are you sure that you want to delete “Evening Red Dunes Desert”
							</div>
							<div className='h-6' />
							<div className='w-full flex flex-row justify-evenly items-center'>
								<button className='h-14 px-8 py-[26px] bg-rose-500 rounded-lg justify-center items-center gap-2 inline-flex'>
									<div className='text-center text-white text-base font-medium leading-3'>
										Yes, Delete
									</div>
								</button>
								<button
									onClick={closeModal}
									className='h-14 px-8 py-[26px] bg-zinc-100 rounded-lg justify-center items-center gap-2 inline-flex'>
									<div className='text-center text-stone-950 text-base font-medium leading-3'>
										No, Thanks
									</div>
								</button>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</Sidebar>
	);
};

export default UserManagementUpdate;
