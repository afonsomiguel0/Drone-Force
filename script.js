// ==========================================
// 1. ATUALIZAR O ANO NO RODAPÉ
// ==========================================
var dataAtual = new Date();
document.getElementById('anoAtual').textContent = dataAtual.getFullYear();

// ==========================================
// 2. FUNÇÃO DE NAVEGAÇÃO (SPA - Single Page Application)
// ==========================================
function mudarPagina(idPagina) {
    // 1. Esconder todas as secções que começam por 'seccao-'
    var seccoes = document.querySelectorAll('[id^="seccao-"]');
    for (var i = 0; i < seccoes.length; i++) {
        seccoes[i].classList.add('escondido');
    }

    // 2. Mostrar apenas a secção que queremos
    var paginaAlvo = document.getElementById('seccao-' + idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.remove('escondido');
    }

    // 3. Atualizar a cor do menu (classe 'active')
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    
    var linkAtivo = document.getElementById('link-' + idPagina);
    if (linkAtivo) {
        linkAtivo.classList.add('active');
    }

    // 4. Voltar ao topo
    window.scrollTo(0, 0);

    // 5. Fechar o menu no telemóvel se estiver aberto (Bootstrap)
    var menu = document.getElementById('menuPrincipal');
    if (menu.classList.contains('show')) {
        var bsCollapse = new bootstrap.Collapse(menu, {
            toggle: false
        });
        bsCollapse.hide();
    }
}

// ==========================================
// 3. EFEITO DE TEXTO A ESCREVER (TYPEWRITER)
// ==========================================
var palavras = ["Inteligente", "Sustentável", "Eficaz", "Académica"];
var indicePalavra = 0;

function escreverTexto() {
    var elemento = document.getElementById("texto-dinamico");
    if (elemento) {
        elemento.innerText = palavras[indicePalavra];
        // Avançar para a próxima palavra (usando resto da divisão para loop infinito)
        indicePalavra = (indicePalavra + 1) % palavras.length;
    }
}
// Executar a função a cada 2000 milissegundos (2 segundos)
setInterval(escreverTexto, 2000);

// ==========================================
// 4. CALCULADORA DE IMPACTO
// ==========================================
var slider = document.getElementById('input-range');

// Se o slider existir na página, adicionamos o evento
if (slider) {
    slider.addEventListener('input', function() {
        var valor = this.value;
        
        // Atualizar o número de árvores
        document.getElementById('mostrador-arvores').innerText = parseInt(valor).toLocaleString('pt-PT');
        
        // Calcular CO2 (Assumimos 0.025 t por árvore)
        var co2 = (valor * 0.025).toFixed(1).replace('.', ',');
        document.getElementById('resultado-co2').innerText = co2;
        
        // Calcular Hectares (Assumimos 1000 árvores por ha)
        var area = (valor / 1000).toFixed(1).replace('.', ',');
        document.getElementById('resultado-area').innerText = area;
    });
}

// ==========================================
// 5. BOTÃO VOLTAR AO TOPO
// ==========================================
var btnTopo = document.getElementById("btn-topo");

// Função que verifica o scroll
window.onscroll = function() {
    // Se o scroll for maior que 100px, mostra o botão
    if (document.documentElement.scrollTop > 100) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Evento de clique para subir
if (btnTopo) {
    btnTopo.addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

// ==========================================
// 6. FORMULÁRIO (SIMULAÇÃO)
// ==========================================
var formulario = document.getElementById('formularioContacto');

if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede a página de recarregar
        
        var btn = this.querySelector('button');
        var textoOriginal = btn.innerText;
        
        btn.innerText = 'A enviar...';
        btn.disabled = true;

        // Simula um envio com atraso de 1.5 segundos
        setTimeout(function() {
            alert('Mensagem enviada com sucesso! (Isto é uma simulação)');
            btn.innerText = textoOriginal;
            btn.disabled = false;
            formulario.reset(); // Limpa os campos
        }, 1500);
    });
}