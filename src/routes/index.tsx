import toast from 'solid-toast';

const notify = () => toast('Here is your toast.');

export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
			<button class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded" onClick={notify}>
				Example button
			</button>
		</main>
	);
}
