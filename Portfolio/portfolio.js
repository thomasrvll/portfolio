/* A
    Controlando a navgação em pag única
               
*/

// Adicionando um ouvinte de eventos que será acionado quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Selecionando links de navegação e seções de conteúdo.
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Iterando sobre cada link da navegação para adicionar um evento.
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previnindo o comportamento padrão do link (que no caso, seria recarregar a página).
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            navLinks.forEach(navLink => {
                navLink.classList.remove('active-link');
            });
            
            document.getElementById(targetId).classList.add('active');

            // Adicionando a classe active-link ao link que foi clicado para poder destacar ele.
            this.classList.add('active-link');
        });
    });
});