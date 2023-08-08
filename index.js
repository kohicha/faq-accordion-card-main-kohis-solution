const faqAnswer = document.querySelectorAll('.faq-answer');

const faqArrow = document.querySelectorAll('.faq-arrowdown');

const faqQuestion = document.querySelectorAll('.faq-question');

const faqButton = document.querySelectorAll('.faq-btn');

for(let i = 0; i < faqButton.length; i++){
    faqButton[i].addEventListener('click', function () {
        faqAnswer[i].classList.toggle('hidden')
        faqQuestion[i].classList.toggle('font-bold');
        faqArrow[i].classList.toggle('rotate-180')
    })
}



