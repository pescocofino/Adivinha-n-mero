const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const elementoChute = document.getElementById('chute')

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-br'
  recognition.start()

  recognition.addEventListener('result', onSpeak)

  function onSpeak(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  }

function exibeChuteNaTela(chute){
  elementoChute.innerHTML = "<div>Voçê disse: <div> <span class="
}