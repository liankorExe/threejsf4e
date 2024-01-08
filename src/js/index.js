// Animation de rotation du modèle 3D
const rotateAnimation = gsap.to(model.rotation, { y: Math.PI * 2, duration: 2, repeat: -1, ease: 'power1.inOut' });

// Ajoute des éléments au fur et à mesure du défilement
const elementsAnimation = gsap.timeline({ paused: true });
elementsAnimation.fromTo('.element1', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 });
elementsAnimation.fromTo('.element2', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");

// Gère l'animation en fonction du défilement
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.body.clientHeight - window.innerHeight));
  rotateAnimation.progress(scrollPercent);
  elementsAnimation.progress(scrollPercent);
});
