$("#formPesquisar").submit(function (e) { 
    e.preventDefault();
    texto = document.querySelector("#txtPesquisar").value;
    $.ajax({
        type: "post",
        url: "pesquisar.act.php",
        data: {texto: texto},
        success: function (response) {
            $("#resultadosPesquisa").html(response);
        },
    });
});

function limparPesquisa() {
    $("#resultadosPesquisa").html("");
    document.querySelector("#txtPesquisar").value = "";
    document.querySelector("#txtPesquisar").focus();
}