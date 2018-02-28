<template>
	<div>
		<h2>Schedule</h2>
		<div class="ui accordion">
			<div class="title">
				<i class="dropdown icon"></i>
				Wedding
			</div>
			<div class="content">
				<div class="transition visible">
					<add-category></add-category>
				</div>
			</div>
		</div>
		<div class="ui accordion">
			<div class="title">
				<i class="dropdown icon"></i>
				Reception
			</div>
			<div class="content">
				<div class="transition hidden">
					<add-task></add-task>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		methods: {
			runAnalytics(title) {
				this.$ga.event('Schedule', 'click', title)
			}
		}
	}

</script>

<style scoped lang="sass">


</style>
