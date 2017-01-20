<template>
	<div class="container">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>Thank you!</p>
				<p>All photos from the wedding and from the #DavidAndDacia tag are here!</p>

				<p>Thank you to our vendors:</p>
				<ul>
					<li>List them here</li>
				</ul>

				<p>Our Parents</p>
				<p>Thank you for giving us the direction, insight &amp; faith to what true love &amp; happiness is, and the courage to allow us to know it's obtainable. The helping hand you extended to us made all the difference. Without you, our wedding wouldn't have been the dream that it will be. We will remember our special night for the rest of our lives, and we will always remember the impact you made on it. No amount of words could express our true thankfulness.</p>

				<p>Our Friends</p>
				<p>We appreciate every one of our friends who have been there for us on our wonderful journey. We feel especially lucky to have so many special people in our lives. We look forward to sharing many more happy occasions with you in the years to come!</p>
			</div>
		</main>
		<site-footer></site-footer>
	</div>
</template>

<script>

	import SiteFooter from '../components/site-footer'
	import SiteHeader from '../components/site-header'

	export default {
		components: {
			SiteFooter,
			SiteHeader
		}
	}

</script>

<style lang="sass">

	@import '../styles/_tools.mixins.sass';
	@import '../styles/_main.sass';

</style>
