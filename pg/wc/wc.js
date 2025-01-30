let currentPage = 1;

function nextPage(pageNumber) {
    const currentPageElement = document.getElementById(`page${pageNumber}`);
    const nextPageElement = document.getElementById(`page${pageNumber + 1}`);
    
    currentPageElement.style.transform = 'translateX(-100%)';
    nextPageElement.style.transform = 'translateX(0)';
    
    updateDots(pageNumber + 1);
    currentPage = pageNumber + 1;
}

function updateDots(pageNumber) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[pageNumber - 1].classList.add('active');
}

function startApp() {
    // Aqui você pode redirecionar para a página principal do seu site
    window.location.href = '/index.html';
}

// Adicionar funcionalidade aos pontos de navegação
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const pageNumber = index + 1;
        if (pageNumber !== currentPage) {
            const currentPageElement = document.getElementById(`page${currentPage}`);
            const targetPageElement = document.getElementById(`page${pageNumber}`);
            
            if (pageNumber > currentPage) {
                currentPageElement.style.transform = 'translateX(-100%)';
                targetPageElement.style.transform = 'translateX(0)';
            } else {
                currentPageElement.style.transform = 'translateX(100%)';
                targetPageElement.style.transform = 'translateX(0)';
            }
            
            updateDots(pageNumber);
            currentPage = pageNumber;
        }
    });
});
