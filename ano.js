function calcular(){
    var an = document.getElementById ('ano')
    var mos = document.querySelector('div#japo')
    var seg = document.querySelector('div#segunda')
    var a = Number(an.value)
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if(an.value == 0 || an.value < 1912){
        window.alert ('Ano de nascimento invalido!')
    }
    an.value = ''
    an.focus() 
    seg.innerHTML = ""
    
    if(a >= 2019  ){
        var he = a - 2019
        var h1 = he + 1
        seg.innerHTML += `${a} é Heiwa ano ${h1}<br>`
        img.setAttribute('src' , 'heiwa1.png')
         
    }
    else if (a >= 1989  ){
        var h = a - 1989
        var h2 = h + 1
        seg.innerHTML +=`${a} é Heisei ano ${h2}<br>` 
        img.setAttribute('src' , 'heisei.png')
    }
    else if (a >= 1926 ){
        var s = a - 1926
        var h3 = s +1
        seg.innerHTML += `${a} é Showa ano ${h3}<br> `
        img.setAttribute('src' , 'showa.png')
    }
    else if( a >= 1912 ){ 
        var t = a - 1912
        var h4 = t + 1
        seg.innerHTML += `${a} é Taisho ano ${h4}<br>`
        img.setAttribute('src' , 'taisho.png')
        
    }
    seg.appendChild(img)
}

    
        

   