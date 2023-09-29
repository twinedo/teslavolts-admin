'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsCheckLg, BsCalendarDate } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import Link from 'next/link';
import { Formik, Form, Field, useFormik } from 'formik';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

import * as Yup from 'yup';

const AddUserSchema = Yup.object().shape({
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

const UserManagementCreate = () => {
	const breadcrumbItems = [
		{ text: 'User Management', link: '/user-management' },
		{ text: 'Add User', link: '/user-management/create' },
	];

	const [registrationDate] = useState<Value>(new Date());

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
		validationSchema: AddUserSchema,
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
							Add User
						</div>
					</div>
				</div>
				<div className='h-6' />

				{/* <div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'> */}



				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
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
									<div id={o.id.toString()} className='absolute top-[100px] z-50'>
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
					<div className='w-full h-[0px] border border-neutral-200'></div>
					<div className='h-6' />
					<div className='flex flex-row gap-4 items-center'>
						<div className='w-[289px] p-2 flex flex-col h-44 relative bg-white rounded-xl border border-stone-300'>
							<div className='flex flex-row'>
								<img
									className='w-[72px] h-[72px] p-3.5 rounded-[100px] border border-zinc-100'
									src='https://via.placeholder.com/72x72'
								/>

								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className='text-neutral-700 text-lg font-medium leading-tight'>
										MG ZS EV
									</div>
									<div className='flex-col justify-start items-start gap-1 flex'>
										<div className='text-neutral-500 text-base font-normal leading-tight'>
											440 km Est. Range
										</div>
										<div className='text-neutral-500 text-base font-normal leading-tight'>
											Transmission
										</div>
									</div>
								</div>
							</div>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Maximum Power: 176 (130)
							</div>
							<div className=' text-neutral-500 text-base font-normal leading-tight'>
								Charger Connection Type: Type 2
							</div>
						</div>
						<div className='w-[343px] h-44 p-2 bg-white rounded-xl border border-stone-300'>
							<div className='flex flex-row justify-between'>
								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className='text-neutral-500 text-base font-normal leading-tight'>
										User Name
									</div>
									<div className='text-neutral-700 text-lg font-medium leading-tight'>
										John Doe
									</div>
								</div>
								<div className='flex-col justify-start items-start gap-2 inline-flex'>
									<div className='text-neutral-500 text-base font-normal leading-tight'>
										Email Address
									</div>
									<div className='text-neutral-700 text-lg font-medium leading-tight'>
										johnsmith@gmail.com
									</div>
								</div>
							</div>
							<div className='flex-col justify-start items-start gap-2 inline-flex'>
								<div className='text-neutral-500 text-base font-normal leading-tight'>
									Phone Number
								</div>
								<div className='text-neutral-700 text-lg font-medium leading-tight'>
									+91 452 652 8457
								</div>
							</div>
						</div>
						<div className='flex flex-col'>
							<div className='flex flex-row'>
								<BsCheckLg />
								<div className='text-stone-950 text-lg font-normal leading-tight'>
									20kW/30kW/40kW/60kW smart charging
								</div>
							</div>
							<div className='flex flex-row'>
								<BsCheckLg />
								<div className='text-stone-950 text-lg font-normal leading-tight'>
									Wall mount or pedestal mount
								</div>
							</div>
							<div className='flex flex-row'>
								<BsCheckLg />
								<div className='text-stone-950 text-lg font-normal leading-tight'>
									Support two vehicles simultaneously charging
								</div>
							</div>
							<div className='flex flex-row'>
								<BsCheckLg />
								<div className='text-stone-950 text-lg font-normal leading-tight'>
									SAE Combo, CHAdeMO, or GBT connectors
								</div>
							</div>
							<div className='flex flex-row'>
								<BsCheckLg />
								<div className='text-stone-950 text-lg font-normal leading-tight'>
									OCPP 1.6J & OCPP 2.0
								</div>
							</div>
						</div>
					</div>
					<div className='self-stretch justify-end items-end gap-4 inline-flex'>
						<Link href="/user-management" passHref className='h-14 justify-start items-start inline-flex'>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-white rounded-lg border border-blue-500 justify-center items-center gap-2 flex'>
								<div className='text-center text-blue-500 text-base font-medium leading-3'>
									Cancel
								</div>
							</div>
						</Link>
						<div className='w-6' />
						<div className='h-14 justify-start items-start flex cursor-pointer' onClick={() => formik.handleSubmit()}>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Add User
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Full Name
								</div>
							</div>
							<div className='self-stretch h-14 pl-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Evening Red Dunes Desert'
									value='Evening Red Dunes Desert'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Email Address
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='230 kms 5 hours'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Contact Number
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='3 Stations'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									USER ID
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Begumpet, Hyderabad'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Registration Date
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Begumpet, Hyderabad'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Status
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Taman Rumpun Bahagia 75300 Melaka'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>

								<div className='w-6 h-6 justify-center items-center flex'>
									<div className='w-6 h-6 relative'>
										<BiChevronDown size={24} />
									</div>
								</div>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Contact Balance
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Bitfrost Connect'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div> */}


			</div>
		</Sidebar>
	);
};

export default UserManagementCreate;
