$(function () {

  var $list, $newItemForm, $newItemButton;
  var item = '';
  $list = $("ul");
  $newItemForm = $('#newItemForm');
  $newItemButton = $("#newItemButton");

  $('li').hide().each(function (index) {

    $(this).delay(450 * index).fadeIn(1600);

  });


  function updateCount() {
    var items = $('li').length;
    $('#counter').text(items).fadeIn(1600);

  }

  updateCount();
  $newItemButton.show();
  $newItemForm.hide();

  $('#showForm').click(function () {
    $newItemButton.hide();
    $newItemForm.show();

  })

  $newItemForm.on('submit', function (e) {
    e.preventDefault();
    var text = $('input:text').val();
    if (text) {
      $list.append($('<li>', { text }));
      $('input:text').val('');
      updateCount();
    }
  });

  $list.on('click', 'li', function () {
    var $this = $(this);
    var complete = $this.hasClass('complete');

    if (complete === true) {
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function () {
        $this.remove();
        updateCount();
      });

    } else {
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function () {
        $this.remove();
        updateCount();
      });

    }

  });


});