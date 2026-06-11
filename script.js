// Executa a função toda vez que a página carrega para iniciar zerado
document.addEventListener("DOMContentLoaded", () => {
    atualizarProgresso();
    
    // Adiciona o evento de atualizar o progresso automaticamente ao clicar em qualquer checkbox
    const checkboxes = document.querySelectorAll('.item-check input');
    checkboxes.forEach(box => {
        box.addEventListener('change', actualizarProgresso);
    });
});

function actualizarProgresso() {
    const checkboxes = document.querySelectorAll('.item-check input');
    const marcados = document.querySelectorAll('.item-check input:checked').length;
    const total = checkboxes.length;
    
    // Calcula a porcentagem
    const porcentagem = Math.round((marcados / total) * 100);
    
    // Atualiza a barra de progresso visual
    const barra = document.getElementById('progresso-barra');
    const textoPorcentagem = document.getElementById('progresso-texto');
    
    if (barra && textoPorcentagem) {
        barra.style.width = porcentagem + "%";
        textoPorcentagem.innerText = porcentagem + "% concluído";
    }
}

function verificarSeguranca() {
    const oleoChecked = document.getElementById('oleo').checked;
    const freiosChecked = document.getElementById('freios').checked;
    const protetorChecked = document.getElementById('protetor').checked;
    const pneusChecked = document.getElementById('pneus').checked;
    
    const painelResultado = document.getElementById('resultado');

    if (oleoChecked && freiosChecked && protetorChecked && pneusChecked) {
        painelResultado.className = "status-painel seguro";
        painelResultado.innerHTML = "✅ STATUS VERDE: Trator seguro para o trabalho! Ótima jornada.";
        
        // RECURSO INOVADOR: O aplicativo fala com o usuário (Acessibilidade)
        falarTexto("Trator seguro para o trabalho. Tenha uma ótima jornada!");
    } else {
        painelResultado.className = "status-painel perigo";
        painelResultado.innerHTML = "⚠️ ATENÇÃO: Verifique todos os itens pendentes antes de ligar o motor!";
        
        falarTexto("Atenção. Verifique os itens pendentes antes de ligar o motor.");
    }
}

// Função auxiliar para fazer o navegador falar (Sintetizador de voz)
function falarTexto(texto) {
    if ('speechSynthesis' in window) {
        const mensagem = new SpeechSynthesisUtterance(texto);
        mensagem.lang = 'pt-BR';
        window.speechSynthesis.speak(mensagem);
    }
}
