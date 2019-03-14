$(document).ready(function() {
  console.log("Document fired up and ready.");
  $("#toggle").on("click", function() {
    $(this).toggleClass("active focus");
    console.log("Nav toggle was clicked.");
    $("#overlay").toggleClass("open");
  });
  $(function() {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('Error Loading ' + element.data('src'));
        }
    });
  });
  console.log("Lazy run successfully.")
  
});

console.log(
  "She says / It helps with the lights out / Her rabid glow / Is like braille to the night..."
);
