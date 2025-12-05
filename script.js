// Atualizar o ano no rodapé
document.getElementById('anoAtual').textContent = new Date().getFullYear();

// Função para mudar de página (Esconde as divs e mostra a escolhida)
function mudarPagina(idPagina) {
    
    // 1. Esconder todas as secções
    var seccoes = document.querySelectorAll('[id^="seccao-"]');
    for (var i = 0; i < seccoes.length; i++) {
        seccoes[i].classList.add('escondido');
    }

    // 2. Mostrar a secção certa
    var alvo = document.getElementById('seccao-' + idPagina);
    if (alvo) {
        alvo.classList.remove('escondido');
    }

    // 3. Atualizar o sublinhado no menu
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    
    var linkAtivo = document.getElementById('link-' + idPagina);
    if (linkAtivo) {
        linkAtivo.classList.add('active');
    }

    // 4. Voltar ao topo da página
    window.scrollTo(0, 0);

    // 5. Fechar menu no telemóvel (se estiver aberto)
    var menu = document.getElementById('menuPrincipal');
    if (menu.classList.contains('show')) {
        // Usa o Bootstrap para fechar
        var bsCollapse = bootstrap.Collapse.getInstance(menu);
        if (bsCollapse) bsCollapse.hide();
    }
}

// Lógica da Calculadora
var slider = document.getElementById('input-range');
if (slider) {
    slider.addEventListener('input', function() {
        var valor = this.value;
        
        document.getElementById('mostrador-arvores').innerText = valor;
        
        // Cálculos aproximados
        // 0.025 toneladas por árvore
        var co2 = (valor * 0.025).toFixed(1).replace('.', ',');
        document.getElementById('resultado-co2').innerText = co2;
        
        // 1000 árvores por hectare
        var area = (valor / 1000).toFixed(1).replace('.', ',');
        document.getElementById('resultado-area').innerText = area;
    });
}

// Botão para voltar ao topo
var btnTopo = document.getElementById("btn-topo");

window.onscroll = function() {
    // Só mostra o botão se descermos 100px
    if (document.documentElement.scrollTop > 100) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Enviar formulário (Simulação)
var form = document.getElementById('formularioContacto');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
}