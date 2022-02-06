<script>
	// pages
	import Login from './pages/Login.svelte';
	import About from './pages/About.svelte';
	import Checkout from './pages/Checkout.svelte';
	import Home from './pages/Home.svelte';
	import Products from './pages/Products.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';

	import {Link, Router, Route} from 'svelte-routing';
</script>
<Router>
	<nav class="navbar">
		<Link to="/">Home</Link>
		<Link to="products">Products</Link>
		<Link to="/about">About</Link>
	</nav>
	<Route path="/" component={Home}/>
	<Route path="/about" component={About}/>
	<Route path="/products" component={Products}/>
	<Route path="/checkout" component={Checkout}/>
	<Route path="/login" component={Login}/>
	<Route path="/products/:id" component={ProductTemplate}/>
</Router>
<style>
	
</style>