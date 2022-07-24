function calcular(){
        var data = new Date()
        var no = data.getFullYear()
        var an = document.getElementById ('ano')
        var mos = document.querySelector('div#japo')
        var seg = document.querySelector('div#segunda')
        var a = Number(an.value)
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
    if(an.value == 0 || an.value < 1912 || Number(an.value) > no ){
        window.alert ('Ano de nascimento invalido!')
        seg.innerHTML=''
        img.setAttribute('src' , 'imagem/sakura1.png') 
    }
    else if(a >= 2019 ){
        var he = a - 2019
        var h1 = he + 1
        seg.innerHTML = `${a} é Heiwa ano ${h1}<br>`
        img.setAttribute('src' , 'imagem/heiwa1.png')
        
    }
    else if (a >= 1989  ){
        var h = a - 1989
        var h2 = h + 1
        seg.innerHTML =`${a} é Heisei ano ${h2}<br>` 
        img.setAttribute('src' , 'imagem/heisei.png')
    }
    else if (a >= 1926 ){
        var s = a - 1926
        var h3 = s +1
        seg.innerHTML = `${a} é Showa ano ${h3}<br> `
        img.setAttribute('src' , 'imagem/showa.png')
    }
    else if( a >= 1912 ){ 
        var t = a - 1912
        var h4 = t + 1
        seg.innerHTML = `${a} é Taisho ano ${h4}<br>`
        img.setAttribute('src' , 'imagem/taisho.png')
        
    }
        an.value = ''
        an.focus() 
        seg.appendChild(img)
}
        
    

    
        

   