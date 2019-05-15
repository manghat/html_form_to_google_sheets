$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };
  var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxF5Xe80oCQj7IWdBNmQCvVsXLXHevpfTisLK7t_0vbAh_NkvNT/exec'

  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    // console.log($form.serializeObject())
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject(),
      success: function(data, status, xhr) { // success callback function
        $('p').append(data).append("<b>Appended text</b>");
        console.log(data, status);
      },
      error: function(jqXhr, textStatus, errorMessage) { // error callback
        $('p').append('Error: ' + errorMessage);
        console.log(textStatus, errorMessage)
      }
    })
  })