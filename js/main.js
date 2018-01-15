removeCheck=(x)=>{
    let remove = document.getElementsByClassName("remove");
    for (i = 0; i < remove.length; i++) {
        if(remove[i]){
            remove[i].style.display = "inline-block";  
        } 
    }
    if(remove[x]){
    remove[x].style.display = "none"
    }
}


let Remove = function(){
    this.parentElement.remove()
}
let v =0
if(v===0){
    let span = document.getElementsByClassName("RemoveS");
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener('click',  Remove);
    }
}

let add= document.getElementById('add')
add.addEventListener("click",()=>{
    let value=document.getElementById('input').value
    //let value= prompt("Enter New discriplines:")
    if(value.length>0){
        let newItem= `<input type="checkbox" id="${v}" name="oDesign" value="${value}"> <label class="remove" for="${v}" ><div class="siq"></div>${value}<span class="RemoveS">x</span> </label>`
        let div = document.createElement('div')        
        div.innerHTML = newItem

        let newE = document.getElementById('new')        
        newE.appendChild(div)

        /*let newElement= document.getElementById('clone').cloneNode(true)
        let input = newElement.children[0]
        input.setAttribute('id',v)
        input.setAttribute('value',value)   
        
        let label=newElement.children[1] 
        label.setAttribute('for',v)
        label.innerHTML= '<div class="siq"></div>'+ value + '<span class="RemoveS">x</span>'
        let newE = document.getElementById('new')
        newE.appendChild(input)
        newE.appendChild(label)
        */

        /*
        let input = document.createElement("input")
        input.setAttribute('id',v)
        input.setAttribute('name','oDesign')
        input.setAttribute('type',"checkbox")
        input.setAttribute('value',value)
    
        let label = document.createElement("label")
        label.setAttribute('for',v)
        label.setAttribute('class','remove')
       
        label.innerHTML= '<div class="siq"></div>'+ value + '<span class="RemoveS">x</span>'

        let newE = document.getElementById('new')
        newE.appendChild(input)
        newE.appendChild(label)
    */
        v++;
        document.getElementById('input').value=""
    }
    

    let span = document.getElementsByClassName("RemoveS");
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener('click',  Remove);
    }

})
let email = document.getElementById('E')
let rEmail = document.getElementById('rE')
checkit = ()=>{
    if( email.value !== rEmail.value){
        rEmail.setCustomValidity("not match")
    }else{ rEmail.setCustomValidity("")        
    }
}
rEmail.addEventListener('blur', checkit)
