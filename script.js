document.getElementById("cadastrar").onclick = function() {

    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let quantidade = document.getElementById("quantidade").value;

    if (nome == "" || preco == "" || quantidade == "") {
        alert("Preencha todos os campos!");
        return;
    }

    let item = document.createElement("li");

    item.innerHTML = nome + " | R$ " + preco +
        " | Estoque: " + quantidade +
        ' <button onclick="this.parentElement.remove()">Excluir</button>';

    document.getElementById("lista").appendChild(item);

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
};
