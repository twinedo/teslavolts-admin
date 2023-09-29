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

const AddPayMethodSchema = Yup.object().shape({
	cardHolderName: Yup.string()
		.required('Required'),
	cardNumber: Yup.string().required('Required'),
	expiry: Yup.string().required('Required'),
	cvc: Yup.number().required('Required'),
	accountDetails: Yup.string().required('Required'),
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
	cardHolderName: string;
	cardNumber: number;
	expiry: string;
	cvc: number;
	accountDetails: 'Razorpay' | 'Google Pay' | 'Samsung Pay'
}

const PaymentMethodCreate = () => {
	const breadcrumbItems = [
		{ text: 'Billings Details', link: '/billings-details/payment-method' },
		{
			text: 'Add Payment Method',
			link: '/billings-details/payment-method/create',
		},
	];

	const [formList, setFormList] = useState<IFormType[]>([
		{
			id: 1,
			title: 'Card Holder Name',
			placeholder: 'John Doe',
			name: 'cardHolderName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 2,
			title: 'Credit/Debit Card Number',
			placeholder: '265165161651616516156',
			name: 'cardNumber',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 3,
			title: 'Expiry Date',
			placeholder: '06/22',
			name: 'expiry',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BsCalendarDate size={24} color="grey" />,
			options: []
		},
		{
			id: 4,
			title: 'Account Details',
			placeholder: 'Razorpay',
			name: 'accountDetails',
			type: 'text',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Razorpay', 'Google Pay', 'Samsung Pay']
		},
	]);

	const _onFormClick = (key: IFormType, i: number) => {
		const dat = [...formList];
		if (key.id === 3) {
			dat[i].isDate = !dat[i].isDate;
			setFormList(dat);
		}
		if (key.id === 4) {
			dat[i].isOption = !dat[i].isOption;
			setFormList(dat);
		}
	}

	const formik = useFormik({
		initialValues: {
			cardHolderName: '',
			cardNumber: 0,
			expiry: '',
			cvc: 0,
			accountDetails: 'Razorpay'
		},
		validationSchema: AddPayMethodSchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link href="/billings-details/payment-method" className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Add Payment Method
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
					{/* <div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'> */}
					<div className='grid grid-cols-2 gap-6 justify-center items-center w-full'>
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
											formik.setFieldValue(`${o.name}`, moment(date).format('MM/YYYY'));
											_onFormClick(o, i)
										}} value={formik.values.expiry} />
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

						<div className='h-14 justify-start items-start flex cursor-pointer' onClick={() => formik.handleSubmit()}>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Save Card
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default PaymentMethodCreate;
