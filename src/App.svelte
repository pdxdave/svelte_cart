<script>
	// pages
	import Login from './pages/Login.svelte';
	import About from './pages/About.svelte';
	import Checkout from './pages/Checkout.svelte';
	import Home from './pages/Home.svelte';
	import Products from './pages/Products.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';
	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
	import globalStore from './stores/globalStore';


	import {Link, Router, Route} from 'svelte-routing';
</script>
<Router>
	<Navbar />
	{#if $globalStore.sidebar}
		<Sidebar />
	{/if}
	<Route path="/" component={Home}/>
	<Route path="/about" component={About}/>
	<Route path="/products" component={Products}/>
	<Route path="/checkout" component={Checkout}/>
	<Route path="/login" component={Login}/>
	<Route path="/products/:id" component={ProductTemplate}/>
</Router>
<style>
	
</style>