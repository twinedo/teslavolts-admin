'use client';
import React, { useState } from 'react';
import {
	AiOutlineMail,
	AiOutlineEyeInvisible,
	AiOutlineEye,
} from 'react-icons/ai';

const AuthPage = () => {
	const [currentPage, setCurrentPage] = useState<
		'signin' | 'forgot' | 'check' | 'create_pass'
	>('signin');

	const [isShowPass, setIsShowPass] = useState(false);

	return (
		<div className='w-full bg-gray-50'>
			<div className='w-full md:flex'>
				{/* Image - Hidden on mobile */}
				<img
					className='w-[50vw] hidden md:block w-[50%] h-[100vh] relative'
					src='assets/Frame 786.png'
					alt='img_auth.png'
				/>

				{/* Form Container */}
				<div className='w-[50%] flex-grow flex justify-center items-center bg-gray-50'>
					<div className='md:w-[480px] mx-auto md:mx-0 bg-white rounded-lg border border-gray-200 p-8 md:p-12'>
						{currentPage === 'signin' ? (
							<>
								<div className='mb-8'>
									<img
										className='w-[169px] h-[82.91px] mx-auto'
										src='assets/Logo.png'
										alt='Logo'
									/>
									<div className='text-center text-zinc-400 text-base font-medium mt-2'>
										Electricle Vehicle Chargers
									</div>
								</div>
								<div className='mb-6'>
									<h2 className='text-stone-950 text-[32px] font-medium leading-10'>
										Hey Admin!
									</h2>
									<p className='text-neutral-500 text-base font-normal leading-tight'>
										Sign in to continue
									</p>
								</div>
								<div className='flex-col justify-start items-start gap-6 flex'>
									<div className='w-full flex-col justify-start items-start gap-4 flex'>
										<div className='w-full h-[84px] relative flex-col justify-start items-start gap-2 inline-flex'>
											<div className='h-5 justify-center items-center inline-flex'>
												<div className='text-neutral-400 text-base font-medium leading-tight'>
													Email Address
												</div>
											</div>
											<div className='w-full self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-neutral-400 justify-start items-center inline-flex'>
												<input
													className='w-full grow shrink basis-0 text-neutral-500 text-base font-medium leading-tight border-none outline-none'
													placeholder='enter your email'
												/>
												<div className='w-6 h-6 justify-center items-center flex'>
													<AiOutlineMail />
												</div>
											</div>
										</div>
										<div className='w-full h-[84px] relative flex-col justify-start items-start gap-2 inline-flex'>
											<div className='h-5 justify-center items-center inline-flex'>
												<div className='text-neutral-400 text-base font-medium leading-tight'>
													Password
												</div>
											</div>
											<div className='w-full self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-neutral-400 justify-start items-center inline-flex'>
												<input
													className='w-full grow shrink basis-0 text-neutral-500 text-base font-medium leading-tight border-none outline-none'
													placeholder='enter your password'
													type={isShowPass ? 'password' : 'text'}
												/>
												<div className='w-6 h-6 justify-center items-center flex'>
													<div
														className='w-6 h-6 relative'
														onClick={() => setIsShowPass(!isShowPass)}>
														{isShowPass ? (
															<AiOutlineEye />
														) : (
															<AiOutlineEyeInvisible />
														)}
													</div>
												</div>
											</div>
										</div>
										<div className='self-stretch h-[17px] flex-col justify-center items-end gap-2.5 flex'>
											<div className='justify-start items-start gap-[127px] inline-flex'>
												<div className='self-stretch justify-start items-center gap-2 inline-flex'>
													<div className='w-3.5 h-3.5 relative'>
														<div className='w-3.5 h-3.5 left-0 top-0 absolute rounded border border-blue-500' />
													</div>
													<div className='text-zinc-800 text-sm font-normal'>
														Remember me
													</div>
												</div>
												<div className='self-stretch rounded-lg justify-end items-center gap-2.5 inline-flex'>
													<div
														className='text-center text-blue-500 text-sm font-medium leading-[17px]'
														onClick={() => setCurrentPage('forgot')}>
														Forgot Password?
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='self-stretch opacity-50 justify-start items-start inline-flex'>
										<div className='grow shrink basis-0 h-14 px-8 py-[26px] bg-neutral-500 rounded-lg justify-center items-center gap-2 flex'>
											<div className='text-center text-white text-base font-medium leading-3'>
												Sign In
											</div>
										</div>
									</div>
									<div className='self-stretch h-12 flex-col justify-center items-center gap-2.5 flex'>
										<div className='h-12 px-6 rounded-lg justify-center items-center gap-2.5 inline-flex'>
											<div className='text-center'>
												<span className='text-zinc-800 text-sm font-medium leading-[17px]'>
													Don’t have a account?{' '}
												</span>
												<span className='text-blue-500 text-sm font-medium leading-[17px]'>
													Sign up
												</span>
											</div>
										</div>
									</div>
								</div>
							</>
						) : currentPage === 'forgot' ? (
							<>
								<div className='flex-col justify-start items-center gap-[11.72px] flex'>
									<div className='w-[169px] h-[60.03px] justify-center items-center inline-flex'>
										<img
											className='w-[169px] h-[82.91px]'
											src='assets/Logo.png'
										/>
									</div>
									<div className='h-[19px] flex-col justify-center items-center gap-[4.55px] flex'>
										<div className='text-center text-zinc-400 text-base font-medium'>
											Electricle Vehicle Chargers
										</div>
									</div>
								</div>
								<div className='self-stretch h-[108px] flex-col justify-start items-center gap-2 flex'>
									<div className='self-stretch text-center text-stone-950 text-[32px] font-medium leading-10'>
										Forgot Password
									</div>
									<div className='self-stretch text-center text-neutral-500 text-base font-normal leading-tight'>
										Enter the email address associate to your account we’ll send
										an email with instruction to reset your password.
									</div>
								</div>
								<div className='flex-col justify-start items-start gap-6 flex'>
									<div className='flex-col justify-start items-start gap-4 flex'>
										<div className='h-[84px] flex-col justify-start items-start gap-2 flex'>
											<div className='h-5 justify-center items-center inline-flex'>
												<div className='text-neutral-400 text-base font-medium leading-tight'>
													Email Address
												</div>
											</div>
											<div className='w-full self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-neutral-400 justify-start items-center inline-flex'>
												<input
													className='w-full grow shrink basis-0 text-neutral-500 text-base font-medium leading-tight border-none outline-none'
													placeholder='enter your email'
													type='email'
												/>
												<div className='w-6 h-6 justify-center items-center flex'>
													<div className='w-6 h-6 relative'>
														<AiOutlineMail color='stone-950' />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='self-stretch opacity-50 justify-start items-start inline-flex'>
										<div className='grow shrink basis-0 h-14 px-8 py-[26px] bg-neutral-500 rounded-lg justify-center items-center gap-2 flex'>
											<div
												className='text-center text-white text-base font-medium leading-3'
												onClick={() => setCurrentPage('check')}>
												Submit
											</div>
										</div>
									</div>
									<div className='self-stretch h-12 flex-col justify-center items-center gap-2.5 flex'>
										<div className='h-12 px-6 rounded-lg justify-center items-center gap-2.5 inline-flex'>
											<div
												className='text-center text-blue-500 text-sm font-medium leading-[17px]'
												onClick={() => setCurrentPage('signin')}>
												Back to Login
											</div>
										</div>
									</div>
								</div>
							</>
						) : currentPage === 'check' ? (
							<>
								<div className='flex-col justify-start items-center gap-[11.72px] flex'>
									<div className='w-[169px] h-[60.03px] justify-center items-center inline-flex'>
										<img
											className='w-[169px] h-[82.91px]'
											src='assets/Logo.png'
										/>
									</div>
									<div className='h-[19px] flex-col justify-center items-center gap-[4.55px] flex'>
										<div className='text-center text-zinc-400 text-base font-medium'>
											Electricle Vehicle Chargers
										</div>
									</div>
								</div>
								<div className='self-stretch h-[88px] flex-col justify-start items-center gap-2 flex'>
									<div className='self-stretch text-center text-stone-950 text-[32px] font-medium leading-10'>
										Check your mail
									</div>
									<div className='self-stretch text-center'>
										<span className='text-neutral-500 text-base font-normal leading-tight'>
											We have sent a password recover instructions to your email{' '}
										</span>
										<span className='text-stone-950 text-base font-normal leading-tight'>
											johnsmith@gmail.com
										</span>
									</div>
								</div>
								<div className='flex-col justify-start items-start gap-6 flex'>
									<div className='h-[84px] flex-col justify-start items-start gap-2 flex'>
										<div className='w-[343px] h-5 justify-center items-center inline-flex'>
											<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
												Email Address
											</div>
										</div>
										<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-neutral-400 justify-start items-center inline-flex'>
											<input
												className='grow shrink basis-0 text-neutral-500 text-base font-medium leading-tight border-none outline-none'
												placeholder='enter your email'
												type='email'
											/>
											<div className='w-6 h-6 justify-center items-center flex'>
												<div className='w-6 h-6 relative'>
													<AiOutlineMail color='stone-950' />
												</div>
											</div>
										</div>
									</div>
									<div className='flex-col justify-start items-start gap-4 flex'>
										<div className='w-[343px] justify-start items-start inline-flex'>
											<div className='grow shrink basis-0 h-14 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
												<div
													className='text-center text-white text-base font-medium leading-3'
													onClick={() => setCurrentPage('create_pass')}>
													Open email app
												</div>
											</div>
										</div>
									</div>
									<div className='self-stretch h-12 flex-col justify-center items-center gap-2.5 flex'>
										<div className='h-12 px-6 rounded-lg justify-center items-center gap-2.5 inline-flex'>
											<div className='text-center text-blue-500 text-sm font-medium leading-[17px]'>
												Resend Link
											</div>
										</div>
									</div>
								</div>
							</>
						) : (
							<>
								<div className='flex-col justify-start items-center gap-[11.72px] flex'>
									<div className='w-[169px] h-[60.03px] justify-center items-center inline-flex'>
										<img
											className='w-[169px] h-[82.91px]'
											src='assets/Logo.png'
										/>
									</div>
									<div className='h-[19px] flex-col justify-center items-center gap-[4.55px] flex'>
										<div className='text-center text-zinc-400 text-base font-medium'>
											Electricle Vehicle Chargers
										</div>
									</div>
								</div>
								<div className='self-stretch h-[88px] flex-col justify-start items-center gap-2 flex'>
									<div className='self-stretch text-center text-stone-950 text-[32px] font-medium leading-10'>
										Create New Password
									</div>
									<div className='self-stretch text-center text-neutral-500 text-base font-normal leading-tight'>
										Your new password must be different from previous used
										password
									</div>
								</div>
								<div className='h-[30px]' />
								<div className='flex-col w-full justify-start items-start gap-6 flex'>
									<div className='w-full h-[84px] relative flex-col justify-start items-start gap-2 inline-flex'>
										<div className='h-5 justify-center items-center inline-flex'>
											<div className='text-neutral-400 text-base font-medium leading-tight'>
												New Password
											</div>
										</div>
										<div className='w-full self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-neutral-400 justify-start items-center inline-flex'>
											<input
												className='w-full grow shrink basis-0 text-neutral-500 text-base font-medium leading-tight border-none outline-none'
												placeholder='enter your password'
												type={isShowPass ? 'password' : 'text'}
											/>
											<div className='w-6 h-6 justify-center items-center flex'>
												<div
													className='w-6 h-6 relative'
													onClick={() => setIsShowPass(!isShowPass)}>
													{isShowPass ? (
														<AiOutlineEye />
													) : (
														<AiOutlineEyeInvisible />
													)}
												</div>
											</div>
										</div>
									</div>
									<div className='w-full h-[84px] relative flex-col justify-start items-start gap-2 inline-flex'>
										<div className='w-[343px] h-5 justify-center items-center inline-flex'>
											<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
												Confirm New Password
											</div>
										</div>
										<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-neutral-400 justify-start items-center inline-flex'>
											<input
												className='grow shrink basis-0 text-neutral-500 text-base font-medium leading-tight border-none outline-none'
												placeholder='enter your password'
												type={isShowPass ? 'password' : 'text'}
											/>
											<div className='w-6 h-6 justify-center items-center flex'>
												<div
													className='w-6 h-6 relative'
													onClick={() => setIsShowPass(!isShowPass)}>
													{isShowPass ? (
														<AiOutlineEye />
													) : (
														<AiOutlineEyeInvisible />
													)}
												</div>
											</div>
										</div>
									</div>
									<div className='w-full flex-col justify-start items-start gap-4 flex'>
										<div className='w-full justify-start items-start inline-flex'>
											<div className='grow shrink basis-0 h-14 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
												<div className='text-center text-white text-base font-medium leading-3'>
													Reset Password
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
