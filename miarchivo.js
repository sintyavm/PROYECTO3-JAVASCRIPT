const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer =document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos=[
{
    id: 1,
    nombre: "Huevos",
    precio: 55,
    img:
    "https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_008371/tienda_008371_abc9acefc96feaf9ab64c254cc801c68a4543cde_producto_large_90.jpg",
    cantidad: 1,
},
{
    id: 2,
    nombre: "Leche",
    precio: 70,
    img:
    "https://eqonatura.com/wp-content/uploads/2020/09/not.jpg",
    cantidad: 1,
},
{
    id: 3,
    nombre: "Harina",
    precio: 65,
    img:
    "https://verdenaturalmarket.pe/575-large_default/harina-de-trigo-integral-precocida-500gr-buncker.jpg",
    cantidad: 1,
},
{
    id: 4,
    nombre: "Azucar",
    precio: 80,
    img:
    "https://plazavea.vteximg.com.br/arquivos/ids/2240222-512-512/20199904.jpg",
    cantidad: 1,
},
];

let carrito = [];
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    if(repeat){
        carrito.map((prod) =>{
            if (prod.id === product.id){
                prod.cantidad++;
            }
        });
    }else{   
    carrito.push({
        id:product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
    });
} 
    console.log(carrito);
    });
});
//35


// verCarrito.addEventListener("click", () => {
const pintarCarrito =() =>{

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;

    //43
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = ` 
           <img src="${product.img}">
           <h3>${product.nombre}</h3>
           <p>${product.precio} $</p>
           <p>Cantidad: ${product.cantidad}</p>
           <p>Total: ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent);

        console.log(carrito.length);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalBuying =document.createElement("div") ;
totalBuying.className = "total-content";
totalBuying.innerHTML = ` total a pagar: ${total} $` ;
modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });
    pintarCarrito();
}
