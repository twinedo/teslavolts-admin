'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsCalendarPlus, BsClock, BsSearch } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp, BiMapAlt } from 'react-icons/bi';
import { Formik, Form, Field, useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

const AddCommunitySchema = Yup.object().shape({
	hostName: Yup.string().required('Required'),
	chargeLoc: Yup.string().required('Required'),
	timings: Yup.string().required('Required'),
	maxPower: Yup.string().required('Required'),
	chargePrice: Yup.string().required('Required'),
	availability: Yup.string().required('Required'),
	cpoHostUserName: Yup.string().required('Required'),
	ifscCode: Yup.string().required('Required'),
	amount: Yup.string().required('Required'),
	withdrawMethod: Yup.string().required('Required'),
	contact: Yup.string().required('Required'),
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
	hostName: string;
	chargeLoc: string;
	timings: string;
	maxPower: string;
	chargePrice: string;
	availability: string;
	cpoHostUserName: string;
	ifscCode: string;
	amount: string;
	withdrawMethod: string;
	contact: string;
}

const CommunityUpdate = () => {
	const breadcrumbItems = [
		{ text: 'Community', link: '/community' },
		{ text: 'Update Host', link: '/community/update' },
	];

	const [formList, setFormList] = useState<IFormType[]>([
		{
			id: 1,
			title: 'Host Name',
			placeholder: 'John Doe',
			name: 'hostName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 2,
			title: 'Charging Location',
			placeholder: 'Jakarta',
			name: 'chargeLoc',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiMapAlt size={24} color="grey" />,
			options: []
		},
		{
			id: 3,
			title: 'Timings',
			placeholder: '09:00-09:00PM',
			name: 'timings',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BsClock size={24} color="grey" />,
			options: []
		},
		{
			id: 4,
			title: 'Max Power Supply',
			placeholder: '36 KWh',
			name: 'maxPower',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 5,
			title: 'Charging Price',
			placeholder: '₹34',
			name: 'chargePrice',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 6,
			title: 'Availability',
			placeholder: 'Available',
			name: 'availability',
			type: 'none',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Approved', 'Rejecred']
		},
		{
			id: 7,
			title: 'CPO or HOST/USER Name',
			placeholder: 'Bifrost Connect',
			name: 'cpoHostUserName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 8,
			title: 'IFSC CODE',
			placeholder: '345623459373',
			name: 'ifscCode',
			type: 'decimal',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 9,
			title: 'Amount',
			placeholder: '500',
			name: 'amount',
			type: 'numeric',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 10,
			title: 'Withdrawal Method',
			placeholder: 'Google play',
			name: 'withdrawMethod',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Razorpay', 'Google Play', 'Samsung Pay']
		},
		{
			id: 11,
			title: 'Contact Number',
			placeholder: '345623459373',
			name: 'contact',
			type: 'numeric',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
	]);

	useEffect(() => {
		const timeSlots = [];

		for (let hour = 0; hour < 24; hour++) {
			const currentHour = hour % 12 || 12; // Convert 0 to 12
			const ampm = hour < 12 ? 'AM' : 'PM';
			const nextHour = (hour + 1) % 12 || 12; // Convert 0 to 12
			const nextAmpm = (hour + 1) < 12 ? 'AM' : 'PM';

			const timeSlot = `${currentHour.toString().padStart(2, '0')}:00 ${ampm} - ${nextHour.toString().padStart(2, '0')}:00 ${nextAmpm}`;

			timeSlots.push(timeSlot);
		}
		console.log('timeSlots', timeSlots)

		const dat = [...formList];
		dat[2].options = timeSlots;
		setFormList(dat);
	}, [])

	const _onFormClick = (key: IFormType, i: number) => {
		const dat = [...formList];
		if (key.id === 5) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
		if (key.id === 6) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
	}

	const formik = useFormik({
		initialValues: {
			hostName: '',
			chargeLoc: '',
			timings: '',
			maxPower: '',
			chargePrice: '',
			availability: '',
			cpoHostUserName: '',
			ifscCode: '',
			amount: '',
			withdrawMethod: '',
			contact: '',
		},
		validationSchema: AddCommunitySchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link href="/community" className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Update Host
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
					{/* <div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'> */}
					<div className='grid grid-cols-3 gap-6 justify-center items-center w-full'>
						{formList.map((o: IFormType, i: number) => (
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
						<div className='h-14 justify-start items-start inline-flex cursor-pointer'>
							<Link href="/community" passHref className='grow shrink basis-0 px-8 py-[26px] bg-white rounded-lg border border-blue-500 justify-center items-center gap-2 flex'>
								<div className='text-center text-blue-500 text-base font-medium leading-3'>
									Cancel
								</div>
							</Link>
						</div>
						<div className='w-6' />
						<div className='h-14 justify-start items-start flex cursor-pointer' onClick={() => formik.handleSubmit()}>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Update Host
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default CommunityUpdate;
