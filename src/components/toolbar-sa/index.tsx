'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
	AiOutlineSearch,
	AiOutlineSetting,
	AiOutlineBell,
} from 'react-icons/ai';

function ToolbarSA() {
	const [isShowPopup, setIsShowPopup] = useState(false);
	const popupContainerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsShowPopup(false);
			}
		};
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				popupContainerRef.current &&
				!popupContainerRef.current.contains(event.target as Node)
			) {
				setIsShowPopup(false);
			}
		};

		window.addEventListener('keydown', handleEscapeKey);
		window.addEventListener('mousedown', handleOutsideClick);

		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
			window.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	return (
		<div>
			<div
				className={`w-full h-[88px] px-8 py-4 bg-white justify-between items-start inline-flex`}>
				<div className='w-[391px] self-stretch pl-4 pr-[296px] py-4 bg-white rounded-2xl border border-zinc-100 justify-start items-center inline-flex'>
					<div className='justify-start items-center gap-2 inline-flex'>
						<div className='w-6 h-6 pl-[2.78px] pr-[2.46px] pt-[2.78px] pb-0.5 justify-center items-center flex'>
							<AiOutlineSearch size={32} />
						</div>
						<input
							placeholder='Search'
							className='w-[391px] text-neutral-400 text-base font-normal leading-tight'
						/>
					</div>
				</div>
				<div className='self-stretch justify-start items-start gap-3.5 inline-flex'>
					<div className='w-14 h-14 px-4 pt-[15.50px] pb-[16.50px] bg-white rounded-2xl border border-zinc-100 justify-center items-center flex'>
						<div className='w-6 h-6 pl-[3.28px] pr-[2.93px] pt-[2.28px] pb-[2.50px] justify-center items-center inline-flex'>
							<AiOutlineSetting size={32} />
						</div>
					</div>
					<div
						ref={popupContainerRef}
						className='w-14 h-14 relative bg-white rounded-2xl border border-zinc-100 cursor-pointer'
						onClick={() => setIsShowPopup(!isShowPopup)}>
						<div className='w-6 h-6 px-[3.50px] py-0.5 left-[16px] top-[15.50px] absolute justify-center items-center inline-flex'>
							<AiOutlineBell size={32} />
						</div>
						<div className='w-3 h-3 left-[29.50px] top-[16.27px] absolute bg-indigo-400 rounded-lg border border-white' />
						{isShowPopup && (
							<div
								className='absolute bottom-[30px] right-0 top-[90px] bg-white z-1000 shadow'
								style={{ zIndex: 100 }}>
								<div
									className='w-[555px] h-[660.86px] relative bg-white items-end z-1000 justify-end '
									style={{ zIndex: 100 }}>
									<div className='w-[53px] h-[53px] origin-top-left -rotate-45 absolute right-[20px] bg-white items-end justify-end align-right rounded-[10px]' />

									<div className='w-[515px] h-[54px] left-[20px] top-[462.86px] bg-white absolute '>
										<div className="left-[69px] top-[28px] absolute text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											Margieluna Kalee has requested the face value{' '}
										</div>
										<div className="left-[451px] top-[6px] absolute text-right text-neutral-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
											18 min ago
										</div>
										<div className="left-[69px] top-[6px] absolute text-stone-950 text-lg font-medium font-['SF Pro Display'] leading-tight">
											Request Face Value
										</div>
										<img
											className='w-[54px] h-[54px] left-0 top-0 absolute rounded-full'
											src='https://via.placeholder.com/54x54'
										/>
									</div>
									<div className='w-[515px] h-[54px] left-[20px] top-[390.86px] absolute'>
										<div className="left-[69px] top-[28px] absolute text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											You have more then *0% Fuilfillment Balance
										</div>
										<div className="left-[457px] top-[6px] absolute text-right text-neutral-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
											5 min ago
										</div>
										<div className="left-[69px] top-[6px] absolute text-stone-950 text-lg font-medium font-['SF Pro Display'] leading-tight">
											Fulfilment Balance has Growth more the 80%
										</div>
										<img
											className='w-[54px] h-[54px] left-0 top-0 absolute rounded-full'
											src='https://via.placeholder.com/54x54'
										/>
									</div>
									<div className='w-[515px] h-[54px] left-[20px] top-[534.86px] absolute'>
										<div className="left-[69px] top-[28px] absolute text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											$50,000 has been converted to Euro .
										</div>
										<div className="left-[448px] top-[6px] absolute text-right text-neutral-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
											36 min ago
										</div>
										<div className="left-[69px] top-[6px] absolute text-stone-950 text-lg font-medium font-['SF Pro Display'] leading-tight">
											Fund Converted Successfully!
										</div>
										<img
											className='w-[54px] h-[54px] left-0 top-0 absolute rounded-full'
											src='https://via.placeholder.com/54x54'
										/>
									</div>
									<div className="left-[20px] top-[36.86px] absolute text-stone-950 text-2xl font-medium font-['SF Pro Display'] leading-[30px]">
										Notifications
									</div>
									<div className="left-[431px] top-[40.86px] absolute text-right text-blue-500 text-base font-normal font-['SF Pro Display'] leading-tight">
										Mark all as read
									</div>
									<div className="left-[216px] top-[614.86px] absolute text-center text-blue-500 text-base font-normal font-['SF Pro Display'] leading-tight">
										See all notification
									</div>
									<div className='w-[515px] h-[54px] left-[20px] top-[102.86px] absolute'>
										<div className="left-[69px] top-[28px] absolute text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											Your Current Available funding are less the $1k
										</div>
										<div className="left-[457px] top-[6px] absolute text-right text-neutral-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
											2 min ago
										</div>
										<div className="left-[69px] top-[6px] absolute text-stone-950 text-lg font-medium font-['SF Pro Display'] leading-tight">
											Available Funding are Getting Down!
										</div>
										<img
											className='w-[54px] h-[54px] left-0 top-0 absolute rounded-full'
											src='https://via.placeholder.com/54x54'
										/>
									</div>
									<div className='w-[515px] h-[54px] left-[20px] top-[246.86px] absolute'>
										<div className="left-[69px] top-[28px] absolute text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											Margieluna Kalee has requested the face value{' '}
										</div>
										<div className="left-[451px] top-[6px] absolute text-right text-neutral-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
											18 min ago
										</div>
										<div className="left-[69px] top-[6px] absolute text-stone-950 text-lg font-medium font-['SF Pro Display'] leading-tight">
											Request Face Value
										</div>
										<img
											className='w-[54px] h-[54px] left-0 top-0 absolute rounded-full'
											src='https://via.placeholder.com/54x54'
										/>
									</div>
									<div className='w-[515px] h-[54px] left-[20px] top-[174.86px] absolute'>
										<div className="left-[69px] top-[28px] absolute text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											You have more then *0% Fuilfillment Balance
										</div>
										<div className="left-[457px] top-[6px] absolute text-right text-neutral-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
											5 min ago
										</div>
										<div className="left-[69px] top-[6px] absolute text-stone-950 text-lg font-medium font-['SF Pro Display'] leading-tight">
											Fulfilment Balance has Growth more the 80%
										</div>
										<div className='w-[54px] h-[54px] left-0 top-0 absolute bg-zinc-200 rounded-full' />
										<div className="left-[16px] top-[19px] absolute text-slate-950 text-base font-semibold font-['SF Pro Text'] leading-none">
											AR
										</div>
									</div>
									<div className='w-[515px] h-[54px] left-[20px] top-[318.86px] absolute'>
										<div className="left-[69px] top-[28px] absolute text-neutral-500 text-base font-normal font-['SF Pro Display'] leading-tight">
											$50,000 has been converted to Euro .
										</div>
										<div className="left-[448px] top-[6px] absolute text-right text-neutral-500 text-sm font-normal font-['SF Pro Display'] leading-[17px]">
											36 min ago
										</div>
										<div className="left-[69px] top-[6px] absolute text-stone-950 text-lg font-medium font-['SF Pro Display'] leading-tight">
											Fund Converted Successfully!
										</div>
										<img
											className='w-[54px] h-[54px] left-0 top-0 absolute rounded-full'
											src='https://via.placeholder.com/54x54'
										/>
									</div>
									<div className='w-[5px] h-[273px] left-0 top-[99.86px] absolute bg-blue-500' />
								</div>
							</div>
						)}
					</div>
					<img
						className='w-14 h-14 relative rounded-2xl'
						src='https://via.placeholder.com/56x56'
					/>
				</div>
			</div>
		</div>
	);
}

export default ToolbarSA;
