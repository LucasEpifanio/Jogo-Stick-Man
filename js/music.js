document.addEventListener('DOMContentLoaded', function() {
    var meuAudio = document.getElementById('meuAudio');
    
    meuAudio.addEventListener('ended', function() {
        console.log('Áudio concluído');
        // Reinicia a reprodução quando o áudio termina
        meuAudio.currentTime = 0;
        meuAudio.play();
    });

    // Adiciona um manipulador de eventos para o botão PLAY
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        meuAudio.play();
        playButton.style.display = 'none'; // Oculta o botão PLAY quando o áudio inicia
    });
});


