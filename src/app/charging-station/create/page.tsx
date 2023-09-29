'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { BsArrowLeft, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp, BiMapAlt, BiMap } from 'react-icons/bi';
import Image from 'next/image';
import { Formik, Form, Field, useFormik } from 'formik';
import moment from 'moment';
import Link from 'next/link';
import * as Yup from 'yup';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const AddChargeStationSchema = Yup.object().shape({
	chargeStationName: Yup.string()
		.required('Required'),
	address: Yup.string().required('Required'),
	coords: Yup.string().required('Required'),
	chargingRates: Yup.string().required('Required'),
	connectorTypes: Yup.string().required('Required'),
	availability: Yup.string().required('Required'),
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
	chargeStationName: string;
	address: string;
	coords: string;
	chargingRates: string;
	connectorTypes: string;
	availability: string;
	energyManagement?: string;
	loadBalancing?: string;
	stationPref?: string;
}

const ChargingStationCreate = () => {
	const MapView = '/assets/charging_stat_add.svg';
	const breadcrumbItems = [
		{ text: 'Charging Station', link: '/charging-station' },
		{ text: 'Add Charging Station', link: '/charging-station/create' },
	];

	const [isAdvanced, setIsAdvanced] = useState(false);

	const [formList, setFormList] = useState<IFormType[]>([
		{
			id: 1,
			title: 'Charging Station Name',
			placeholder: 'John Doe',
			name: 'chargeStationName',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 2,
			title: 'Address',
			placeholder: 'Jakarta',
			name: 'address',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 3,
			title: 'GPS Coordinates',
			placeholder: '-6.00232321121 , 101.35165464',
			name: 'coords',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 4,
			title: 'Charging Rates',
			placeholder: '11.40',
			name: 'chargingRates',
			type: 'text',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 5,
			title: 'Connector Types',
			placeholder: 'Type 1',
			name: 'connectorTypes',
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
			type: 'none',
			isText: false,
			isOption: false,
			isDate: false,
			icon: <BiChevronDown size={24} color="grey" />,
			options: ['Online', 'Offline']
		},
		{
			id: 7,
			title: 'Energy Management',
			placeholder: '$11.40',
			name: 'energyManagement',
			type: 'decimal',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 8,
			title: 'Loading Balancing',
			placeholder: '20 Kwh',
			name: 'loadBalancing',
			type: 'decimal',
			isText: true,
			isOption: false,
			isDate: false,
			icon: null,
			options: []
		},
		{
			id: 9,
			title: 'Station Preferences',
			placeholder: 'Select',
			name: 'stationPref',
			type: 'text',
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
			chargeStationName: '',
			address: '',
			coords: '',
			chargingRates: '',
			connectorTypes: '',
			availability: '',
			energyManagement: '',
			loadBalancing: '',
			stationPref: '',
		},
		validationSchema: AddChargeStationSchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link href="/charging-station" passHref className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Add Charging Station
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center gap-10 inline-flex'>
					{/* <div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'> */}
					<div className='grid grid-cols-3 gap-6 justify-center items-center w-full'>
						{formList.slice(0, 6).map((o: IFormType, i: number) => (
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
					<div className='flex flex-row items-center gap-2 cursor-pointer'>
						{!isAdvanced ? (
							<BsToggleOff size={32} color="black" onClick={() => setIsAdvanced(!isAdvanced)} />
						) : (
							<BsToggleOn size={32} color="#4185C6" onClick={() => setIsAdvanced(!isAdvanced)} />
						)}


						<div className="text-black text-2xl text-left font-medium font-['SF Pro Display'] leading-[30px]">Advanced Settings</div>
					</div>

					{isAdvanced ? (
						<div className='grid grid-cols-3 gap-6 justify-center items-center w-full'>
							{formList.slice(6, formList.length).map((o: IFormType, i: number) => (
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
					) : null}
					<div>
						<Image width={1280} height={346} src={MapView} alt='viewbooking' />
					</div>

					{/* </div> */}
					<div className='self-stretch justify-end items-end gap-4 inline-flex'>
						<Link href="/charging-station" passHref className='h-14 justify-start items-start inline-flex cursor-pointer'>
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
									Add Station
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default ChargingStationCreate;
