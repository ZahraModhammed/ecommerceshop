import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/js/all.min';

$(document).ready(function() {
 $('[data-toggle="tooltip"]').tooltip();

 $(".add-to-cart-btn").click(function(){
        alert("اضاف المنتج الى عربة الشراء")
 });

 $("#copyright").text("جميع الحقوق محفوظة للمتجر سنة" + new Date().getFullYear());

 $('.product-option input[type="radio"]').change(function() {
       $(this).parents('.product-option').siblings().removeClass("active");
       $(this).parents('.product-option').addClass("active");
 });

//   عندما تتغير كمية المنتج
 $('[data-product-quantity]').change(function() {
   
      // اجلب الكمية الجديدة
     var newquantity = $(this).val();

      // ابحث عن السطر الذي يحتوي معلومات هذا المنتج
      var parent = $(this).parents('[data-product-info]');

      // اجلب سعر القطهة الواحدة من معلومات المنتج
      var pricePerUntil = parent.attr('data-product-price');

      // السعر الاجمالي للمنتج هو سعر القطعة مضرويا بعددها

      var totalPriceForProduct = newquantity * pricePerUntil;

      parent.find('.total-price-for-product').text(totalPriceForProduct + "$");

      calculateTotalPrice();
 });

  $('[data-remove-from-cart]').click(function(){
     $(this).parents('[data-product-info]').remove();
     
     calculateTotalPrice();
  });

   function calculateTotalPrice() {
     var totalPriceForAllProducts= 0;

     $('[data-product-info]').each(function(){

      var pricePerUntil = $(this).attr('data-product-price');

      var quantity = $(this).find('[data-product-quantity]').val();

      var totalPriceForProduct = pricePerUntil * quantity;

      totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct

     });

     $('#total-price-for-all-products').text(totalPriceForAllProducts + '$')
   }
});