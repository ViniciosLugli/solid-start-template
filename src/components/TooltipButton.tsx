import { Tooltip } from '@ark-ui/solid';
import { Portal } from 'solid-js/web';
import toast from 'solid-toast';

const notify = () => toast.success('Here is your toast.');

export default function TooltipButton() {
	return (
		<Tooltip.Root openDelay={250} closeDelay={250} positioning={{ placement: 'top' }}>
			<Tooltip.Trigger>
				<button class="font-bold underline" onClick={notify}>
					Make me a toast
				</button>
			</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content class="bg-blue-500 text-white rounded-md p-2">Test tooltip</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip.Root>
	);
}
