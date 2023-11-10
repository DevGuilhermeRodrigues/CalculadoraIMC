document.getElementById('form').addEventListener("submit", function(event){
    event.preventDefault(event);

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let msg = document.getElementById("msg");

    if(!altura || !peso){
       msg.setAttribute('style', 'color: red; font-size: 1.5em')
       msg.textContent = 'Por favor, digite ambos os campos';
       return;
    };


    console.log(typeof alturaNum, typeof pesoNum)
  
    console.log("Até aqui tudo bem!")
});
