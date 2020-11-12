// show cart 

(function() {
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart');
  });
})();

// add items to the cart 

(function(){

const cartBtn = document.querySelectorAll('.store-item-icon');



cartBtn.forEach(function(btn){
    btn.addEventListener('click',function(event){
        
        
     if(event.target.parentElement.classList.contains('store-item-icon'))
       {
           let fullpath = event.target.parentElement.previousElementSibling.src;
           
           let pos = fullpath.indexOf("image") + 5;
           let partpath = fullpath.slice(pos);
           

       const item={};
       item.img=` img-card${partpath}`;

       console.log(item.img);
       
let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;


     item.name = name; 

let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
let finalprice = price.slice(2).trim();

item.price = finalprice; 

const cartitem = document.createElement('div');
cartitem.classList.add(
"cart-item",
"d-flex",
"justify-content-between",
"text-capitalize",
"my-3", 
);

const trash = document.createElement('div');
trash.classList.add('.fa-trash');

cartitem.innerHTML= 
` <img src= ${item.img} class="img-fluid rounded-circle" id= "item-img" alt=""><div class="cart-item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name} </p><span>Dt</span><span id="cart-item-price" class="cart-item-price"class="mb-0">${item.price}</span></div><a href="#" id="cart-item-remove" class="cart-item-remove"><i class="fas fa-trash"></i></a>`;
 

       
//select cart
const cart = document.getElementById('cart');
const total = document.querySelector('.cart-total-container'); 

cart.insertBefore(cartitem, total);
  console.log(cartitem);
   alert('done : item added to the cart');


showTotals();  


      }
        
    }); 

  });

  

// remove items


(function deleteItem() {

    console.log('deleting item')





    const deletebtns = document.querySelectorAll('.fa-trash')



    console.log(deletebtns)



    deletebtns.forEach((btn) => {

        console.log(btn)

        btn.addEventListener('click', (e) => {

            console.log(e.target.parentElement.parentElement)

            const target = e.target.parentElement.parentElement

            target.remove()

            // update total on delete call 

            showTotal()

        })

    })







})(); 



 
// show totals
function showTotals(){
 const total= []; 
 const items = document.querySelectorAll('.cart-item-price');
  items.forEach(function(item) {
    total.push(parseFloat(item.textContent));
 });
    const totalmoney = total.reduce(function(total,item){
    total+= item; 
    return total; 
},0);
const finalmoney = totalmoney.toFixed(2);



document.getElementById('cart-total').textContent = finalmoney;
document.querySelector('.item-total').textContent = finalmoney;
document.getElementById('item-count').textContent = total.length;



}
})
