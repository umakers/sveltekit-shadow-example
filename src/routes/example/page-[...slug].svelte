<script>
	import Test from '/src/test.svelte';

	export let upSlug;
	export let counter;
	let woat = upSlug;
</script>

<h1>upSlug me: {upSlug}</h1>
<h1>Counter: {counter}</h1>

<Test {woat} />
