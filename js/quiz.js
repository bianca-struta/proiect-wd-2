
const steps = document.querySelectorAll('.quiz-step');
const nextBtn = document.getElementById('next-button');
const submitBtn = document.getElementById('submit-button');
const resultBox = document.getElementById('quiz-result');
let currentStep = 0;

nextBtn.addEventListener('click', () => {
    const radios = steps[currentStep].querySelectorAll('input[type="radio"]');
    if ([...radios].some(r => r.checked)) {
        steps[currentStep].hidden = true;
        currentStep++;
        if (currentStep < steps.length) {
        steps[currentStep].hidden = false;
        }
        if (currentStep === steps.length - 1) {
            nextBtn.hidden = true;
            submitBtn.hidden = false;
        }
    } else {
        alert("Selectează un răspuns.");
        }
    });

document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = new FormData(this);
    const answers = [...form.values()];
    const counts = { carte: 0, creativ: 0, relax: 0 };

    answers.forEach(val => counts[val]++);
    const result = Object.entries(counts).reduce((a, b) => b[1] > a[1] ? b : a)[0];

    let msg = '';
    if (result === 'carte') {
    msg = 'Îți recomandăm <strong>„Picnic & Poezie”</strong> – o experiență relaxantă de lectură în aer liber alături de poeți locali.';
    } else if (result === 'creativ') {
    msg = 'Îți recomandăm <strong>„Workshop: Recenzii creative & blogging de carte”</strong> – ideal dacă vrei să îți exprimi părerea într-un mod original.';
    } else if (result === 'relax') {
    msg = 'Îți recomandăm <strong>„Maraton de lectură nocturnă”</strong> – o seară chill cu ciocolată caldă și cărți bune.';
    }

    resultBox.innerHTML = msg;
    resultBox.hidden = false;
    this.hidden = true;
});
