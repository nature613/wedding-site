<template>
	<parallax id="rsvp" class="wrapper" background-x="50%" background-y="1%">
		<site-header></site-header>
		<div class="container">
			<main>
				<div class="container">
					<!-- TODO: Add logic so you click in the input, the placeholder text will move to the top as if it was the label  -->

					<form>
						<h2>Access Code</h2>
						<div class="form-group">
							<input type="password" class="form-control" id="accesscode" placeholder="Code">
						</div>

						<h2>Our Guest</h2>
						<div class="form-group">
							<input type="text" class="form-control" id="yourName" placeholder="Your Name">
						</div>
						<div class="form-group">
							<input type="email" class="form-control" id="yourEmail" aria-describedby="emailHelp" placeholder="Your Email">
							<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>

						<h2>Your Guest</h2>
						<div class="form-group">
							<input type="text" class="form-control" id="theirName" placeholder="Their Name">
						</div>

						<fieldset class="form-group">
							<legend>Kids</legend>
							<div class="form-check">
								<label class="form-check-label">
									<input type="radio" class="form-check-input" name="optionsRadios" id="kidsNo" value="no" checked>
									<span>No to Kids</span>
								</label>
							</div>
							<div class="form-check">
							<label class="form-check-label">
									<input type="radio" class="form-check-input" name="optionsRadios" id="kidsYes" value="yes">
									<span>Yes to Kids</span>
								</label>
							</div>
						</fieldset>

						<div class="form-group">
							<label for="numberofKids">How many? (max of 2)</label>
							<select class="form-control" id="numberofKids">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div class="form-group">
							<input type="text" class="form-control" id="kidOneName" placeholder="Kid's Name">
							<label for="ageGroup">Age Group (max of 12)</label>
							<select class="form-control" id="ageGroup">
								<option>0 - 2</option>
								<option>3 - 5</option>
								<option>6 - 8</option>
								<option>9 - 12</option>
							</select>
						</div>
						<div class="form-group">
							<input type="text" class="form-control" id="kidTwoName" placeholder="Kid's Name">
							<label for="ageGroup">Age Group (max of 12)</label>
							<select class="form-control" id="ageGroup">
								<option>0 - 2</option>
								<option>3 - 5</option>
								<option>6 - 8</option>
								<option>9 - 12</option>
							</select>
						</div>
						<div class="form-group">
							<label for="message">Message for us</label>
							<textarea class="form-control" id="message" rows="3"></textarea>
						</div>

						<button type="submit" class="btn btn-primary">Submit</button>

					</form>
					<any-questions></any-questions>
				</div>
			</main>
		</div>
		<site-footer></site-footer>
	</parallax>
</template>

<script>

	import AnyQuestions from '../components/any-questions'
	import SiteFooter from '../components/site-footer'
	import SiteHeader from '../components/site-header'
	import Parallax from '../components/parallax'

	export default {
		components: {
			SiteFooter,
			SiteHeader,
			Parallax,
			AnyQuestions
		}
	}

</script>

<style lang="sass" scoped>

	@import '../styles/_tools.mixins.sass';
	@import '../styles/_main.sass';

	.wrapper
		background-image: url('../assets/backgrounds/background-lights-06.png');
		background-size: contain;
		color: $text2;

		form
			max-width: 600px;
			width: 100%;

</style>
