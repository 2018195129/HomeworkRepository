fetch("product.json")

.then((data)=>{
    return data.json();
})
.then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+= `<div class="card">
        <img src=${values.image} alt="ornaments" width="400px" height="400px">
        <p class="name">Name: ${values.name}</p>
        <p class="type">Type: ${values.type}</p>
        <p class="price">Price: ${values.price}</p>
      </div>`;
    });
    document.getElementById("cards").innerHTML=data1;
    })
.catch((err)=>{
    console.log(err);
})