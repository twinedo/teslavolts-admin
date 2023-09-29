'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsClock } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import Link from 'next/link';
import { useFormik } from 'formik';
import 'react-calendar/dist/Calendar.css';

import * as Yup from 'yup';

const AddChargeSchema = Yup.object().shape({
	sessionName: Yup.string()
		.required('Required'),
	sessionDuration: Yup.string().required('Required'),
	energyConsumed: Yup.number().required('Required'),
	noConnectors: Yup.string().required('Required'),
	typeConnectors: Yup.date().required('Required'),
	availability: Yup.string().required('Required'),
	chargingPrice: Yup.number().required('Required'),
	chargingLoc: Yup.string().required('Required')
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
	sessionName: string;
	sessionDuration: string;
	energyConsumed: number;
	noConnectors: number;
	typeConnectors: string;
	availability: 'available' | 'unavailable';
	chargingPrice: number;
	chargingLoc: string;
}

const ChargingManageCreate = () => {
	const breadcrumbItems = [
		{ text: 'Charging Management', link: '/charging-management' },
		{ text: 'Add Session', link: '/charging-management/create' },
	];

	const [formList, setFormList] = useState<IFormType[]>([
		{
			id: 1,
			title: 'Session Name',
			placeholder: 'John Doe',
			name: 'sessionName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 2,
			title: 'Session Duration',
			placeholder: '09:00-10:00 PM',
			name: 'sessionDuration',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BsClock size={24} color="grey" />,
			options: [],
		},
		{
			id: 3,
			title: 'Energy Consumed',
			placeholder: '30 KWh',
			name: 'energyConsumed',
			type: 'numeric',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 4,
			title: 'No. of Connectors',
			placeholder: '123',
			name: 'noConnectors',
			type: 'numeric',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 5,
			title: 'Type of Connectors',
			placeholder: 'Type 2',
			name: 'typeConnectors',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Type 1', 'Type 2', 'Type 3']
		},
		{
			id: 6,
			title: 'Availability',
			placeholder: 'Available',
			name: 'availability',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Available', 'Unavailable']
		},
		{
			id: 7,
			title: 'Charging Price',
			placeholder: '$11.40',
			name: 'chargingPrice',
			type: 'decimal',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 8,
			title: 'Charging Location',
			placeholder: 'Troy Northwestern Properties',
			name: 'chargingLoc',
			type: 'text',
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
		dat[1].options = timeSlots;
		setFormList(dat);
	}, [])

	const _onFormClick = (key: IFormType, i: number) => {
		const dat = [...formList];
		if (key.id === 2) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
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
		initialValues: {} as IFormField,
		validationSchema: AddChargeSchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link
						href='/charging-management'
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
							Add Session
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
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
							<div className='grow shrink basis-0 px-8 py-[26px] bg-white rounded-lg border border-blue-500 justify-center items-center gap-2 flex'>
								<Link
									href='/charging-management'
									className='text-center text-blue-500 text-base font-medium leading-3'
								>
									Cancel
								</Link>
							</div>
						</div>
						<div className='w-6' />
						<div className='h-14 justify-start items-start flex cursor-pointer' onClick={() => formik.handleSubmit()}>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Add Session
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default ChargingManageCreate;
