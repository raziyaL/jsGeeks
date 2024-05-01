const fileInput = document.getElementById("file");
const slidesCont = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let imgFiles = [];
let currentSlide = 0;

fileInput.onchange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return alert('Файлы не найдены');

    imgFiles = imgFiles.concat(files);
    console.log(files, 'fff');
    slidesCont.innerHTML = '';

    imgFiles.forEach((file, index) => {
        const imgURL = URL.createObjectURL(file);
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
            <img src="${imgURL}" alt="Слайд ${index + 1}">
            <span class="delete-icon" data-index="${index}">X</span>
        `;
        slidesCont.appendChild(slide);
    });
    showSlide(currentSlide);
};

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) =>
        slide.style.display = i === index ? 'block' : 'none');

    const deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach((icon, i) => {
        icon.style.display = i === index && imgFiles.length > 1 ? 'block' : 'none';
    });
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < imgFiles.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

slidesCont.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-icon')) {
        const index = parseInt(event.target.dataset.index);
        imgFiles.splice(index, 1);
        if (currentSlide >= imgFiles.length) {
            currentSlide = Math.max(0, imgFiles.length - 1);
        }
        showSlide(currentSlide);
    }
});
