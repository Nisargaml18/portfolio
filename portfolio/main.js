document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: ["Student", "Web Developer", "Tech Enthusiast"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    };

    new Typed('.text', options);

    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach((certificate, index) => {
        certificate.style.animationDelay = `${index * 0.2}s`;
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.2}s`;
    });
});
