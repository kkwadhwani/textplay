function textInterval(id, text, interval){
    const h1 = document.getElementById(id)
    let t = text
    const textArray = t.split("")
    let newText = ""
    let l = t.length
    let a = 0
    setInterval(()=>{
      newText= newText+textArray[a]
      h1.textContent=newText
      a++
      if(a>l){
     
        h1.textContent=""
        a=0
        newText=""
        
      }
    }, interval)
    
    }
    
textInterval("text", "I love programming", 200)