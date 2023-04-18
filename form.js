const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step =>{
        return step.classList.contains("active")
    })


console.log(currentStep);

if(currentStep < 0){
    currentStep = 0;
    showCurrentStep();
    
}

multiStepForm.addEventListener('click', e=>{
    if(e.target.matches("[data-next]")){
        currentStep += 1;
    } else if(e.target.matches("[data-previous]")){
        currentStep -=1;
    }
    showCurrentStep();
console.log(currentStep);

})


function showCurrentStep(){
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)
    })
}
