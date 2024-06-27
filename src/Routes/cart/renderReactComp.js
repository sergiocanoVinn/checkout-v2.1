/* *********************  COMPONENTES ****************** */
import CardPriv from "../../Components/CardPriv";
import MyComp from "../../Components/MyComp";

/* *********************  RENDERIZADOR ****************** */
import Render from "../../Components/Render";

/* *********************  MyComp ****************** */
const loadMyComp = () => {
    const cardCart = setInterval(() => {
       const { hash } = window.location;
       if (hash === "#/cart"){
            Render({
               Comp: MyComp,
               props: { mess: "Hiii" },
               clearInterval,
               position: "after",
               clean: cardCart,
               id: 'my__comp__custom',
               ref: "#cart-choose-products"
           });
       }
   }, 500);
}

/* *********************  TARJETA PRIVILEGIO ****************** */
const loadCardPrivi = () => {

    const cardCart = setInterval(() => {
       const { hash } = window.location;
       if (hash === "#/cart"){
            Render({
               Comp: CardPriv,
               clearInterval,
               position: "after",
               clean: cardCart, 
               id: 'renderCardCart',
               class_: ".row-fluid.summary .span5.totalizers.summary-totalizers.cart-totalizers.pull-right .accordion-group"
           });
       }
   }, 500);

   const cardPay = setInterval(() => {
       const { hash } = window.location;
       if (hash !== "#/cart"){
            Render({
               Comp: CardPriv,
               clearInterval,
               position: "after",
               clean: cardPay, 
               id: 'renderCardPay',
               class_:".custom-cart-template-wrap .summary-template-holder .row-fluid.summary .accordion-group"
           });
       }
   }, 500);
}

$(window).on("load", async () => {
    loadCardPrivi()
    loadMyComp()
})

$(window).on("hashchange", async () => {
    loadCardPrivi()
})

