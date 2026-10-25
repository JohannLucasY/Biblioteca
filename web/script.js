"use strict";
const estrelas = document.querySelectorAll("#estrelas button");
const campoSatisfacao = document.querySelector("#satisfacao");
estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {
        if (!campoSatisfacao)
            return;
        campoSatisfacao.value = estrela.dataset.valor ?? "0";
        estrela.classList.add("ativa");
        const nota = Number(estrela.dataset.valor);
        estrelas.forEach((outra) => {
            const numero = Number(outra.dataset.valor);
            if (numero <= nota) {
                outra.classList.add("ativa");
            }
            else {
                outra.classList.remove("ativa");
            }
            console.log(nota);
        });
    });
});
