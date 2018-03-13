$(document).ready(function(){
  function readURL(input) {
      let storeAsKey = $(input).data('store-as');
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#previewImage').attr('src', e.target.result);
              localStorage[storeAsKey] = e.target.result;
          }
          reader.readAsDataURL(input.files[0]);
      }
  }

  $("#photo").change(function() {
      $('#start-section').hide()
      $('#upload-section').show()
      readURL(this);
  });

  $("[data-fetch-from-storage]").each(function() {
    let $input = $(this);
    let storedAsKey = $input.data("fetch-from-storage");
    if (storedAsKey) {
      $input.attr('src', localStorage[storedAsKey])  
    }
  });

  $("[data-clear-local-storage").each(function() {
    localStorage["webcam"] = undefined;
    localStorage["document"] = undefined;
  });

})
