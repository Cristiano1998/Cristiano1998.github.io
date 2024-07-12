let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    let valorInput = input.value;
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="clicado(${contador})" class="item-icone">
                <i id="icone_${contador}" class="fa-regular fa-circle"></i>

            </div>
            <div onclick="clicado(${contador})" class="item-nome">
            ${valorInput}
               

            </div>
            <div  class="item-botao">
                <button onclick="remover(${contador})" class="delete"><i class="fa-solid fa-trash"></i> Deletar</button>

            </div>
        </div>`

        main.innerHTML += novoItem;
        input.value="";
        input.focus();
    }
}

input.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
    }
})

function remover(id){
    let btnRemover = document.getElementById(id);
    btnRemover.remove();
}


function clicado(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");

    if(classe == "item"){
        item.classList.add("clicado");

        item.parentNode.appendChild(item);

        let icone = document.getElementById("icone_"+ id);
        icone.classList.remove("fa-circle");
        icone.classList.add("fa-circle-check");

    }else{
        item.classList.remove("clicado");

        let icone = document.getElementById("icone_"+ id);
        icone.classList.add("fa-circle");
        icone.classList.remove("fa-circle-check");

    }

}