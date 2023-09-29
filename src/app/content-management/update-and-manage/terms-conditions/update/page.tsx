'use client';

import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';
import { BsArrowLeft, BsRecordCircle, BsCircle } from 'react-icons/bs';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const UpdateTCSchema = Yup.object().shape({
	detail: Yup.string().required('Required'),
});

const UpdateAndManageTCUpdate = () => {
	const breadcrumbItems = [
		{ text: 'Content Management', link: '/content-management' },
		{
			text: 'Update & Manage App Content',
			link: '/content-management/update-and-manage',
		},
		{
			text: 'Terms & Conditions',
			link: '/content-management/update-and-manage/terms-conditions',
		},
		{
			text: 'Terms & Conditions Update',
			link: '/content-management/update-and-manage/terms-conditions/update',
		},
	];

	const formik = useFormik({
		initialValues: {
			detail: '',
		},
		validationSchema: UpdateTCSchema,
		onSubmit: (values) => {
			console.log('submitform', values);
		},
	});

	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<Link href='/content-management/update-and-manage/terms-conditions' className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex cursor-pointer'>
						<BsArrowLeft />
					</Link>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Terms & Conditions
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full h-[480px] p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
					<div className='self-stretch h-80 flex-col justify-start items-start gap-2 inline-flex'>
						<div className='w-[343px] h-5 justify-center items-center inline-flex'>
							<div className="w-[343px] text-neutral-400 text-base font-medium font-['SF Pro Display'] leading-tight">
								Terms & Conditions Details
							</div>
						</div>

						<textarea
							value={formik.values.detail}
							onChange={(e) => formik.setFieldValue('detail', e.target.value)}
							placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry`s standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum.'
							className="w-full h-[292px] pl-4 pt-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-center items-start inline-flex grow shrink basis-0 text-stone-950 text-base font-normal font-['SF Pro Display'] leading-tight"></textarea>
					</div>
					<div className='w-[198px] justify-start items-start inline-flex cursor-pointer' onClick={() => formik.handleSubmit()}>
						<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
							<div className="text-center text-white text-base font-medium font-['SF Pro Display'] leading-3">
								Update Terms
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default UpdateAndManageTCUpdate;
