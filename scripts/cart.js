var totalValue = 0;
  var ttvalue = totalValue
let arr = JSON.parse(localStorage.getItem("cartit")) || []
    
showcart(arr)
showTotal(totalValue)
function showcart(arr){
  document.getElementById("itemofcart").textContent = "";
        totalValue = 0;
  arr.forEach((elem,index)=>{
    totalValue+= Number(elem.price)
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      div4.innerHTML = `<button id="inc"> + </button>  
          <button id="point">1</button>
           <button id="dec"> -</button>`
           let div5 = document.createElement("div");
           

        let title = document.createElement("p")
    title.textContent = elem.title

    

    let sub = document.createElement("p");
    sub.textContent = elem.color

    let price = document.createElement("p");
    price.textContent = "₹"+ elem.price

    let img = document.createElement("img");
    img.src= elem.image_url
    let ico = document.createElement("i");
    ico.setAttribute("class","fas fa-trash-alt")
    ico.addEventListener("click",function(){
          removeItem(elem,index)
      })
      div1.append(img)
      div2.append(title,sub)
      div3.append(price)
      div5.append(ico)
    // document.getElementById("itemdetail").append(title,sub);
    // document.getElementById("item").append(img)
    // document.getElementById("pricee").append(price)

    document.getElementById("itemofcart").append(div1,div2,div4,div3,div5)
  })
}


function showTotal(totalValue){
  let total =  document.getElementById("totalpp")
     
        
        total.textContent = `₹ ${totalValue.toFixed(2)}`;
      ttvalue = totalValue
      document.getElementById("totalppp").textContent = "₹"+ ttvalue
        
    }


   function removeItem(elem,index){
       
    arr.splice(index,1);
    localStorage.setItem("cartit",JSON.stringify(arr))
    
    showcart(arr);
    showTotal(totalValue);
    


   }

function couponn(){
  let a = document.getElementById("coupen").value;
  coupon(totalValue,a)
}

   function coupon(totalValue,a){
    if(a=="masai10"){
      ttvalue = Math.floor(totalValue - (totalValue*0.1))
    }
    document.getElementById("totalppp").textContent = `₹ ${ttvalue.toFixed(2)}`;
    // showTotal(totalValue)
   }


      
    

    // document.getElementById("totalpp").textContent = total
    // document.getElementById("totalppp").textContent = total


    


    