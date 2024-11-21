import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi';

const Footer: React.FC = () => {
	return (
		<footer className='bg-black text-gray-400 p-4 mt-6 mx-auto max-w-3xl border border-current flex'>
			<div className='flex items-center justify-center w-20 bg-black border border-current'>
				<GiCoffeeCup className='text-lime-400 w-8 h-8' />
			</div>

			<div className='flex-1 bg-black border border-current p-4 text-center'>
				<p className='mb-2'>Aplikacja stworzona dla stolarzy.</p>
				<p>
					Możesz wesprzeć projekt na{' '}
					<a
						href='https://buymeacoffee.com'
						className='text-white underline'
						target='_blank'
						rel='noopener noreferrer'
					>
						Buy Me a Coffee
					</a>
					.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
