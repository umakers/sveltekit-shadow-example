<script>
	import Test from './test.svelte';

	export let result;
	export let counter;
	$: componentParameterTest = result;
</script>

<p>
	Testing routing and shadow endpoints using parameter id in both. Example shows that client side
	routing only refreshes page component, not the referecned component. Only a page reload refreshes
	the referenced component.

	<li>page-[id].js</li>
	<li>page-[id].svelte</li>
</p>

<p />
<br /><br /><br />
<h2>Page</h2>

<b>result : {result}</b><br />
<b>Counter: {counter}</b><br /><br />

<Test {result} {counter} />
