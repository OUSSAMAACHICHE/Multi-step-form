const monthlyChoise = document.getElementById('month'),
	yearlyChoise = document.getElementById('year');
const boxesArray = Array.from(document.getElementsByClassName('box')),
	bullets = document.querySelectorAll('.bullets li');
const card = document.querySelectorAll('.box .card'),
	chosePlan = document.querySelectorAll('.card .chose_plan');
const finish = document.getElementById('thank_you')
const buttonsBox = document.getElementById('footer')
const nextButton = document.getElementById('next');
const nextBtnDesktop = document.getElementById('next_desktop')

	// select inputs 
	const userName = document.getElementById('name')
	const userEmail = document.getElementById('email')
	const userPhone = document.getElementById('phone')
	// select plans articles 
const plans = document.querySelectorAll('.plan article')
// get the chosen plan 
let getPlan = "Arcade"

let currentStep = 0
let bulletIndex = 0 
// click nextBtn to move to next step
nextButton.onclick = checkData
// click previousBtn to move to previous step
document.getElementById('previous').onclick = clickPrevBtn
// click desktop next btn
nextBtnDesktop.onclick = checkData

// check if the last step box fn
function checkData() {
// check is it the last box and valid data
if(validationInputs()) {
	if (currentStep < boxesArray.length - 1) {
		currentStep++
		bulletIndex++
		// switch bullets and steps
		showCurrentStep()
	} else {
		finish.classList.remove('scale-0')
		buttonsBox.classList.add('scale-0')
		document.querySelector('.bullets').classList.add('scale-0')
	}
}
// if the last step change next button to confirm 
lastStep()
}
// when click previous btn check if the first step box fn
function clickPrevBtn() {
		// check is it the first box
		if (currentStep > 0) {
			currentStep--
			bulletIndex--
			showCurrentStep()
		}
		// if not the last step return next btn text
		lastStep()
}


showCurrentStep()
// hide all boxes and bullets and show the current box and bullet
function showCurrentStep() {

	// hide all boxes
	boxesArray.forEach(box => {

		if(!box.classList.contains('scale-0')) {
			box.classList.remove('scale-100')
			box.classList.add('scale-0')
		}
		if(!box.classList.contains('md:hidden')) {
			box.classList.add('md:hidden')
		}
	})

	// show the current box
	boxesArray[currentStep].classList.add('scale-100')
	boxesArray[currentStep].classList.remove('scale-0')
	boxesArray[currentStep].classList.add('md:block')
	boxesArray[currentStep].classList.remove('md:hidden')
	

	// delete all active bullets
	bullets.forEach(bullet => {
		bullet.classList.remove('active')
	})
	// show the current bullet
	bullets[bulletIndex].classList.add('active')


}
// Add event listener to the checkbox switch plans monthly | yearly
document.getElementById('switchBtn').addEventListener('change', function () {
	const slider = this.nextElementSibling; // Get the span element after the checkbox
	const switching = this.parentElement; // Get the parent element of the checkbox
	if (this.checked) {
		slider.style.transform = "translateX(100%)"; // Move the slider to the right when checked
		switching.style.backgroundColor = " hsl(213, 96%, 18%)"; // Change background color when checked

		monthlyChoise.classList.remove('text-secondry-Coolgray'); // remove default color
		monthlyChoise.classList.add('text-primary-Purplishblue'); // add active color

		yearlyChoise.classList.remove('text-primary-Purplishblue');
		yearlyChoise.classList.add('text-secondry-Coolgray');
	} else {
		slider.style.transform = "translateX(0)"; // Move the slider to the left when unchecked
		switching.style.backgroundColor = "hsl(228, 100%, 84%)"; // Reset background color when unchecked
		// add active color and remove transparent color from yearly
		yearlyChoise.classList.remove('text-secondry-Coolgray');
		yearlyChoise.classList.add('text-primary-Purplishblue');

		// remove active color and add defualt color from monthly
		monthlyChoise.classList.remove('text-primary-Purplishblue')
		monthlyChoise.classList.add('text-secondry-Coolgray')
	}
	
	finishPlan(this)
});

// change plans function
chnagePlan()
function chnagePlan() {
	// loop through the input checkbox
	chosePlan.forEach(plan => {
		plan.addEventListener('change', function(e) {
			// add active class if the input is checked
			if(e.target.checked) {
				e.target.parentElement.classList.add('active')
			} else {
				e.target.parentElement.classList.remove('active')
			}
		})
	})
	

}
// select switch btn 
const btn = document.getElementById('switchBtn')
finishPlan(btn)
// create finsh plan section content
function finishPlan(btn) {
	let stepFour = document.querySelector('.step-4')
	stepFour.innerHTML = ''
	let selectedPlan = 9
	// check who the clicked plan
	if(getPlan === "Advanced") {
		selectedPlan = 12
	} else if (getPlan === "Pro") {
		selectedPlan = 15
	} else {
		selectedPlan = 9
	}

	if(btn.checked) {
		stepFour.innerHTML += `
		<section class="finish_up bg-secondry-Magnolia rounded-md">
        <div class="flex items-center justify-between p-3 rounded-md"> 
          <div>
          <h4 class="text-primary-Purplishblue font-bold">Arcade (Yearly)</h4>
          <a id="change" class="hover:underline text-secondry-Coolgray" href="#">Change</a>
          </div>
            <div class="service font-bold text-primary-Marineblue">${selectedPlan * 10}/Yr</div>
        </div>
        <hr/>
        <div class="flex justify-between p-3 items-center">
          <p class="text-secondry-Coolgray">Online service</p>
          <div class="service text-primary-Marineblue font-medium">+$10/Yr</div>
        </div>
        <div class="flex justify-between p-3 items-center">
          <p class="text-secondry-Coolgray">Larger storage</p>
          <div class="service text-primary-Marineblue font-medium">+$20/Yr</div>
        </div>
      </section>
      <div class="service flex justify-between p-3 items-center">
        <p class="text-secondry-Coolgray">Total (per month)</p>
        <div class="text-primary-Marineblue font-medium">+$${(selectedPlan * 10) + 10 + 20}/Yr</div>
      </div>
		
		`
	} else {
		stepFour.innerHTML += `
		<section class="finish_up bg-secondry-Magnolia rounded-md">
        <div class="flex items-center justify-between p-3 rounded-md"> 
          <div>
          <h4 class="text-primary-Purplishblue font-bold">Arcade (Monthly)</h4>
          <a id="chnage" class="underline text-secondry-Coolgray" href="#">Change</a>
          </div>
            <div class="service font-bold text-primary-Marineblue">$${selectedPlan}/mo</div>
        </div>
        <hr/>
        <div class="flex justify-between p-3 items-center">
          <p class="text-secondry-Coolgray">Online service</p>
          <div class="service text-primary-Marineblue font-medium">+$1/mo</div>
        </div>
        <div class="flex justify-between p-3 items-center">
          <p class="text-secondry-Coolgray">Larger storage</p>
          <div class="service text-primary-Marineblue font-medium">+$1/mo</div>
        </div>
      </section>
      <div class="service flex justify-between p-3 items-center">
        <p class="text-secondry-Coolgray">Total (per month)</p>
        <div class="text-primary-Marineblue font-medium">+$${selectedPlan + 1 + 1}/mo</div>
      </div>
		`
	}

}

function isLastStep(text,bgColr) {
	nextButton.innerText = text
	nextButton.style.backgroundColor = bgColr
	nextBtnDesktop.innerText = text
	nextBtnDesktop.style.backgroundColor = bgColr
}

lastStep()
// if reach to the last step
function lastStep() {
    // Check if it's the last box
    if (currentStep >= boxesArray.length - 1) {
        // Change button text to 'Confirm

		isLastStep("Confirm","hsl(243, 100%, 62%)")
       
    } else {
        // Change button text back to 'Next Step'

		isLastStep('Next Step',"hsl(213, 96%, 18%)")
       
    } 
	 // Check if it's the last box
    if (currentStep >= boxesArray.length - 1) {
        // Change button text to 'Confirm'

		isLastStep("Confirm","hsl(243, 100%, 62%)")
       
    } else {
        // Change button text back to 'Next Step'

		isLastStep('Next Step',"hsl(213, 96%, 18%)")
       
    }
}


switchBullets()
// click bullets function
function switchBullets() {
	// loop through bullets and add active class to the clicked one
	bullets.forEach((bullet,index) => {
		bullet.addEventListener('click', function(e) {
			if(validationInputs()) {
				currentStep = index
				bulletIndex = index
				showCurrentStep()
				lastStep()

			}
		})
	})

}

// validation inputs 
function validationInputs() {
	// select error message elements
	const nameErrorMsg = document.querySelector('.error_name')
	const emailErrorMsg = document.querySelector('.error_email')
	const phoneErrorMsg = document.querySelector('.error_phone')
	let validName = false
	let validEmail = false
	let validPhone = false
	// if user name is empty 
	if(userName.value === "") {
		nameErrorMsg.innerHTML = "This field is required!"
		validName = false
	} else {
		nameErrorMsg.innerHTML = ""
		validName = true
	}
	// email pattern regex
	let emailRe = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/ig;

	// if email pattern don't match the user input
	if(!emailRe.test(userEmail.value)) {
		emailErrorMsg.innerHTML = "Invalid email!"
		validEmail = false
	} else {
		emailErrorMsg.innerHTML = "" // empty the error message if valid email
		validEmail = true
	}

	if(userPhone.value === "" || userPhone.value.length > 15) {
		phoneErrorMsg.innerHTML = "Invalid phone number!"
		validPhone = false
	} else {
		phoneErrorMsg.innerHTML = ""
		validPhone = true
	}

	if(validEmail === true && validName === true && validPhone === true) {
		return true
	} else {
		return false
	}
}

// delete all active classes from the plans 
function deleteClasses() {
	plans.forEach(plan => {
		plan.classList.remove('active')
	})
}
plans.forEach(plan => {

	plan.addEventListener('click', function(e) {
		deleteClasses()
		e.currentTarget.classList.add('active')
		
		// console.log(e.currentTarget.dataset.plan)
		// get selected plan
		getPlan = e.currentTarget.dataset.plan
		finishPlan(btn)
	})
})




