import { clientOnly } from '@solidjs/start';

const TooltipButtonClient = clientOnly(() => import('~/components/TooltipButton'));

export default function Home() {
	return (
		<>
			<div class="flex text-3xl text-center justify-center items-center h-screen">
				<TooltipButtonClient />
			</div>
		</>
	);
}
