"use strict";
const estrelas = document.querySelectorAll("#estrelas button");
const campoSatisfacao = document.querySelector("#satisfacao");
estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {
        if (!campoSatisfacao)
            return;
        campoSatisfacao.value = estrela.dataset.valor ?? "0";
        console.log(estrela.dataset.valor);
    });
});
