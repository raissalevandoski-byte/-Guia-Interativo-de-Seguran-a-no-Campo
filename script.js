function verificarSeguranca() {
    // Puxa os elementos do HTML usando o ID
    const oleoChecked = document.getElementById('oleo').checked;
    const freiosChecked = document.getElementById('freios').checked;
    const protetorChecked = document.getElementById('protetor').checked;
    const pneusChecked = document.getElementById('pneus').checked;
    
    const painelResultado = document.getElementById('resultado');

    // Lógica condicional: Se TUDO estiver marcado (true)
    if (oleoChecked && freiosChecked && protetorChecked && pneusChecked) {
        painelResultado.className = "status-painel seguro";
        painelResultado.innerHTML = "✅ STATUS VERDE: Trator seguro para o trabalho! Ótima jornada.";
    } else {
        // Se faltar qualquer um dos itens
        painelResultado.className = "status-painel perigo";
        painelResultado.innerHTML = "⚠️ ATENÇÃO: Verifique todos os itens pendentes antes de ligar o motor! Risco de acidente.";
    }
}
