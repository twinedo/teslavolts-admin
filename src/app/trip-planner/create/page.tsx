'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { BsArrowLeft, BsCalendarPlus, BsClock, BsSearch } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp, BiMapAlt } from 'react-icons/bi';
import Link from 'next/link';

import { Formik, Form, Field, useFormik } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const AddTripSchema = Yup.object().shape({
	tripName: Yup.string()
		.required('Required'),
	distance: Yup.string().required('Required'),
	routeStation: Yup.string().required('Required'),
	from: Yup.string().required('Required'),
	to: Yup.string().required('Required'),
	stations: Yup.string().required('Required'),
	userName: Yup.string().required('Required'),
	userEV: Yup.string().required('Required'),
	paymentStatus: Yup.string().required('Required'),
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
	tripName: string;
	distance: string;
	routeStation: string;
	from: string;
	to: string;
	stations: string;
	userName: string;
	userEV: string;
	paymentStatus: 'Pending' | 'Paid'
}

const TripPlannerCreate = () => {
	const breadcrumbItems = [
		{ text: 'Trip Planner', link: '/trip-planner' },
		{ text: 'Add Trip', link: '/trip-planner/create' },
	];

	const [formList, setFormList] = useState<IFormType[]>([
		{
			id: 1,
			title: 'Trip Name',
			placeholder: 'Evening Red Dunes Desert',
			name: 'tripName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 2,
			title: 'Distance',
			placeholder: '230 kms 5 hours',
			name: 'distance',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 3,
			title: 'Route Station',
			placeholder: '3 Stations',
			name: 'routeStation',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 4,
			title: 'From',
			placeholder: 'Begumpet, Hyderabad',
			name: 'from',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: <BiMapAlt size={24} color="grey" />,
			options: []
		},
		{
			id: 5,
			title: 'To',
			placeholder: 'Begumpet, Hyderabad',
			name: 'to',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiMapAlt size={24} color="grey" />,
			options: []
		},
		{
			id: 6,
			title: 'Stations',
			placeholder: 'Taman',
			name: 'stations',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BsSearch size={24} color="grey" />,
			options: []
		},
		{
			id: 7,
			title: 'User Name',
			placeholder: 'Bitfrost',
			name: 'userName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 8,
			title: 'User EV',
			placeholder: 'Wallbox DC Charger',
			name: 'userEV',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 9,
			title: 'Payment Status',
			placeholder: 'Pending',
			name: 'paymentStatus',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Pending', 'Paid']
		},
	]);

	const _onFormClick = (key: IFormType, i: number) => {
		const dat = [...formList];
		if (key.id === 9) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
	}

	const formik = useFormik({
		initialValues: {
			tripName: '',
			distance: '',
			routeStation: '',
			from: '',
			to: '',
			stations: '',
			userName: '',
			userEV: '',
			paymentStatus: '',
		},
		validationSchema: AddTripSchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link href="/trip-planner" passHref className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Add Trip
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
						<Link href="/trip-planner" className='h-14 justify-start items-start inline-flex cursor-pointer'>
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
									Add Trip
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default TripPlannerCreate;
