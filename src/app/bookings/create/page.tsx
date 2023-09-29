'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsCalendarDate, BsClock, BsCheckLg } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const AddBookingsSchema = Yup.object().shape({
	stationName: Yup.string()
		.required('Required'),
	date: Yup.string().required('Required'),
	timings: Yup.string().required('Required'),
	address: Yup.string().required('Required'),
	bookStatus: Yup.string().required('Required'),
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
	stationName: string;
	date: string;
	timings: string;
	address: string;
	bookStatus: 'Confirmed' | 'Rejected' | 'Waiting'
}

const BookingsCreate = () => {
	const breadcrumbItems = [
		{ text: 'Bookings', link: '/bookings' },
		{ text: 'Create Booking', link: '/bookings/create' },
	];

	const [formList, setFormList] = useState<IFormType[]>([
		{
			id: 1,
			title: 'Station Name',
			placeholder: 'John Doe',
			name: 'stationName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 2,
			title: 'Date',
			placeholder: '16/07/2023',
			name: 'date',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: <BsCalendarDate size={24} color="grey" />,
			options: []
		},
		{
			id: 3,
			title: 'Timings',
			placeholder: '10:30 AM - 11:30 AM ',
			name: 'timings',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: <BsClock size={24} color="grey" />,
			options: []
		},
		{
			id: 4,
			title: 'Address',
			placeholder: 'Begumpet, Hyderabad',
			name: 'address',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 5,
			title: 'Booking Status',
			placeholder: 'Confirmed',
			name: 'bookStatus',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Confirmed', 'Waiting', 'Rejected']
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
		if (key.id === 2) {
			dat[i].isDate = !dat[i].isDate;
			setFormList(dat);
		}
		if (key.id === 3) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
		if (key.id === 5) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
	}

	const formik = useFormik({
		initialValues: {
			stationName: '',
			date: '',
			timings: '',
			address: '',
			bookStatus: '',
		},
		validationSchema: AddBookingsSchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link href="/bookings" className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Create Booking
						</div>
					</div>
				</div>
				<div className='h-6' />
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
			</div>
		</Sidebar>
	);
};

export default BookingsCreate;
