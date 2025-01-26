document.querySelectorAll('.fotos img').forEach(img => {
    img.addEventListener('click', () => {
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.style.position = 'fixed';
        fullscreenDiv.style.top = 0;
        fullscreenDiv.style.left = 0;
        fullscreenDiv.style.width = '100%';
        fullscreenDiv.style.height = '100%';
        fullscreenDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
        fullscreenDiv.style.display = 'flex';
        fullscreenDiv.style.justifyContent = 'center';
        fullscreenDiv.style.alignItems = 'center';
        fullscreenDiv.style.zIndex = 1000;
        fullscreenDiv.addEventListener('click', () => {
            document.body.removeChild(fullscreenDiv);
        });

        const fullscreenImg = document.createElement('img');
        fullscreenImg.src = img.src;
        fullscreenImg.style.maxWidth = '90%';
        fullscreenImg.style.maxHeight = '90%';

        fullscreenDiv.appendChild(fullscreenImg);
        document.body.appendChild(fullscreenDiv);
    });
});

