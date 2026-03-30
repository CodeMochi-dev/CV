/**
 * CV Portfolio - Main JavaScript
 * Author: Valentina Paz Llantén Robles
 * Description: UI interactions, animations, and dynamic elements.
 */

"use strict";

const App = {
  /**
   * Initializes all application modules
   */
  init() {
    this.initScrollReveal();
    this.initCardsHoverEffect();
    this.createBackToTopButton();
  },

  /**
   * Intersection Observer for scroll animations (Fade-in effect)
   */
  initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("js-visible");
          observer.unobserve(entry.target); // Dejar de observar una vez visible
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.classList.add("js-fade-in");
      observer.observe(section);
    });
  },

  /**
   * Rastrea la posición del mouse sobre las tarjetas para crear un efecto de brillo dinámico (Glassmorphism interactivo)
   */
  initCardsHoverEffect() {
    const cards = document.querySelectorAll(".skill-category");
    
    if (!cards.length) return;

    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  },

  /**
   * Crea dinámicamente el botón "Volver arriba" (Back to Top) 
   * y maneja su aparición y evento de smooth scroll.
   */
  createBackToTopButton() {
    const btn = document.createElement("button");
    btn.innerHTML = `<i data-lucide="chevron-up"></i>`;
    btn.className = "btn btn-primary rounded-circle shadow";
    btn.setAttribute("aria-label", "Volver arriba");
    btn.setAttribute("title", "Volver arriba");
    
    // Estilos en línea para aislar la dependencia de este componente específico
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: "0",
      visibility: "hidden",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // Transición súper suave
      zIndex: "1000",
      border: "none",
      cursor: "pointer",
      transform: "translateY(20px)",
      backgroundColor: "var(--primary)", // Usa el color principal del tema
      color: "white"
    });

    document.body.appendChild(btn);
    
    // Renderiza el nuevo ícono de Lucide si la librería existe globalmente
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Listener para mostrar/ocultar el scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btn.style.opacity = "1";
        btn.style.visibility = "visible";
        btn.style.transform = "translateY(0)";
      } else {
        btn.style.opacity = "0";
        btn.style.visibility = "hidden";
        btn.style.transform = "translateY(20px)";
      }
    });

    // Acción de subir al tope con animacion
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
};

// Punto de entrada de la aplicación, ejecutado cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
