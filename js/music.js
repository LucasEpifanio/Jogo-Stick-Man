document.addEventListener('DOMContentLoaded', function() {
    var meuAudio = document.getElementById('meuAudio');
    
    meuAudio.addEventListener('play', function() {
        console.log('Áudio iniciado');
        // Oculta o botão PLAY quando o áudio inicia
        document.getElementById('playButton').style.display = 'none';
    });

    meuAudio.addEventListener('pause', function() {
        console.log('Áudio pausado');
    });

    meuAudio.addEventListener('ended', function() {
        console.log('Áudio concluído');
        // Exibe novamente o botão PLAY quando o áudio termina
        document.getElementById('playButton').style.display = 'block';
    });

    // Adiciona um manipulador de eventos para o botão PLAY
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        meuAudio.play();
    });
});


