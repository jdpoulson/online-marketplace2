$(document).ready(function() {
  $("form#marketplace").submit(function(event) {
    var NameInput = $("input#name").val();
    var AddressInput = $("input#address").val();
    var ProductInput = $("input:radio[name=product]:checked").val();

    $(".name").text(NameInput);
    $(".address").text(AddressInput);
    $(".radio").text(ProductInput);

    $("#confirmation").show();
    $("#marketplace").hide();
    event.preventDefault();
  });
});
