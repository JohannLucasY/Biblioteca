const estrelas = document.querySelectorAll<HTMLButtonElement>("#estrelas button");

const campoSatisfacao = document.querySelector<HTMLInputElement>("#satisfacao");

estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {
        if (!campoSatisfacao) return;
        campoSatisfacao.value = estrela.dataset.valor ?? "0";

        const nota = Number(estrela.dataset.valor);

        estrelas.forEach((outra) => {
            const numero = Number(outra.dataset.valor);

            if (numero <= nota) {
                outra.classList.add("ativa");
            } else {
                outra.classList.remove("ativa");
            }
        });

        console.log(nota);
    });
});

const formulario = document.querySelector<HTMLFormElement>("#form-livro");

formulario?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("Livro enviado");
});