// components/Breadcrumb.tsx

import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

interface BreadcrumbProps {
	items: { text: string; link: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<nav className='flex flex-row items-center space-x-2 text-gray-500'>
			{items.map((item, index) => (
				<div key={item.text} className='flex flex-row  items-center'>
					<Link href={item.link}>
						<div
							className={
								index === items.length - 1 ? 'text-gray-700' : 'text-blue-500'
							}>
							{item.text}
						</div>
					</Link>

					{index < items.length - 1 && <BiChevronRight color='blue' />}
				</div>
			))}
		</nav>
	);
};

export default Breadcrumb;
