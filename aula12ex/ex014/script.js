 function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var ola = window.document.getElementById('bom')
    var data = new Date()
    var hora = 21//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        ola.innerHTML = 'BOM DIA!'
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        ola.innerHTML = 'BOA TARDE!'
        img.src = 'foto-tarde.png'
        document.body.style.background = '#ce5706'
    } else {
        //BOA NOITE!
        ola.innerHTML = 'BOA NOITE!'
        img.src = 'foto-noite.png'
        document.body.style.background = '#2d2d2d'
    }
 }
 