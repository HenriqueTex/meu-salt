// Scripts personalizados para o site Salt ERP

document.addEventListener("DOMContentLoaded", function () {
  // Botão Voltar ao Topo
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Animação suave para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Formulário de demonstração
  // Formulário de demonstração apontando para JSONPlaceholder
  const demoForm = document.getElementById("demo-form");
  if (demoForm) {
    demoForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      // Desabilita botão e mostra texto de envio
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";

      // Monta o payload a partir dos campos do form
      const formData = new FormData(this);
      console.log(this);
      const payload = Object.fromEntries(formData.entries());
      console.log(payload);
      try {
        // POST real para o JSONPlaceholder
        const response = await fetch("https://formspree.io/f/movwqbwq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Status ${response.status}`);
        }

        const result = await response.json();
        console.log("Resposta da API:", result);

        // Atualiza UI após sucesso
        submitButton.textContent = "Enviado com sucesso!";
        Array.from(this.elements).forEach((el) => (el.disabled = true));

        const successMessage = document.createElement("div");
        successMessage.className = "alert alert-success mt-3";
        successMessage.textContent =
          "Obrigado pelo interesse! Um especialista entrará em contato em até 24h.";
        this.appendChild(successMessage);

        // Reseta tudo após 5 segundos
        setTimeout(() => {
          this.reset();
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          successMessage.remove();
          Array.from(this.elements).forEach((el) => (el.disabled = false));
        }, 5000);
      } catch (err) {
        console.error("Erro no envio:", err);
        submitButton.textContent = "Falha ao enviar";
        // opcional: mensagem de erro ao usuário
        const errorMessage = document.createElement("div");
        errorMessage.className = "alert alert-danger mt-3";
        errorMessage.textContent =
          "Ocorreu um erro ao enviar. Tente novamente mais tarde.";
        this.appendChild(errorMessage);

        // reabilita botão após 3s
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          errorMessage.remove();
        }, 3000);
      }
    });
  }

  // Ativar tooltips do Bootstrap
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Ativar popovers do Bootstrap
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Navbar fixa com mudança de cor ao rolar
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Contador de estatísticas (simulado)
  const counters = document.querySelectorAll(".counter");

  if (counters.length > 0) {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-target"));
          const duration = 2000; // 2 segundos
          const step = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, options);

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  }
});
