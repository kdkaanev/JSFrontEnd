function solve(){

    BASE_URL =  'https://randomuser.me/api/'
    const imgDiv = document.getElementById('image')
    const btn = document.getElementById('click')
    const nameDoc = document.getElementById('name')
    const cellNum = document.getElementById('cell')
    btn.addEventListener('click',btnHandler)

    function btnHandler(){
        
        nameDoc.innerHTML = ''
        imgDiv.innerHTML = ''
        cellNum.textContent = ''
        fetch(BASE_URL)
            .then((res) => res.json())
            .then(data=>{
            let info = data.results
            
                    
        let picUrl = info[0].picture.large
    
        let img = document.createElement('img')
        img.setAttribute('src', picUrl);
        imgDiv.appendChild(img)
        let infoName = info[0]   
        console.log(infoName)
        imgDiv.addEventListener('click', imgDivHandler)
        function imgDivHandler(){
            nameDoc.innerHTML = ''
         
         
        let {cell, name} = infoName
        cellNum.textContent = 'Tel.: ' + cell
        let {title, first, last} = name
        let nameTable = document.createElement('div')
        
        nameTable.textContent = `${title} ${first} ${last}`
        nameDoc.appendChild(nameTable)
        }
       
        

    }
        )
                    
    }
   

    
}

solve()