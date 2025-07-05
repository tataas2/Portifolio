function enviarWhatsApp(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const numero = '5511952630864';


    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const textoFormatado = encodeURIComponent(texto);
    const url = `https://wa.me/${numero}?text=${textoFormatado}`;
    window.open(url, '_blank');
}




