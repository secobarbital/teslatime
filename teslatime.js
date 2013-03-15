(function() {
  function decorate() {
    var form;

    if ($('a[href="/login"]').length) {
      renderForm();
    } else {
      $.get('/vehicles', function(vehicles) {
        if (!$('#vehicles').length) {
          $('body').append('<ol id="vehicles"></ol>');
        }
        vehicles.forEach(renderVehicle);
      });
    }
  }

  function renderForm() {
    $('<form action="/login" method="post">')
    .append('<label for="user_session_email">Email</label>')
    .append('<input name="user_session[email]" id="user_session_email" type="text">')
    .append('<label for="user_session_password">Password</label>')
    .append('<input name="user_session[password]" id="user_session_password" type="password">')
    .append('<input type="submit">')
    .appendTo(document.body);
  }

  function renderVehicle(vehicle) {
    var k, li, baseUrl;

    baseUrl = '/vehicles/' + vehicle.id;

    $('<li class="vehicle"></li>')
    .append('<pre>' + JSON.stringify(vehicle, null, '  ') + '</pre>')
    .append('<a href="' + baseUrl + '/mobile_enabled">mobile_enabled</a><br>')
    .append('<a href="' + baseUrl + '/command/charge_state">charge_state</a><br>')
    .append('<a href="' + baseUrl + '/command/climate_state">climate_state</a><br>')
    .append('<a href="' + baseUrl + '/command/drive_state">drive_state</a><br>')
    .append('<a href="' + baseUrl + '/command/gui_settings">gui_settings</a><br>')
    .append('<a href="' + baseUrl + '/command/vehicle_state">vehicle_state</a><br>')
    .append('<a href="' + baseUrl + '/command/charge_port_door_open">charge_port_door_open</a><br>')
    .append('<a href="' + baseUrl + '/command/charge_standard">charge_standard</a><br>')
    .append('<a href="' + baseUrl + '/command/charge_max_range">charge_max_range</a><br>')
    .append('<a href="' + baseUrl + '/command/charge_start">charge_start</a><br>')
    .append('<a href="' + baseUrl + '/command/charge_stop">charge_stop</a><br>')
    .append('<a href="' + baseUrl + '/command/flash_lights">flash_lights</a><br>')
    .append('<a href="' + baseUrl + '/command/honk_horn">honk_horn</a><br>')
    .append('<a href="' + baseUrl + '/command/door_unlock">door_unlock</a><br>')
    .append('<a href="' + baseUrl + '/command/door_lock">door_lock</a><br>')
    .append('<a href="' + baseUrl + '/command/auto_conditioning_start">auto_conditioning_start</a><br>')
    .append('<a href="' + baseUrl + '/command/auto_conditioning_stop">auto_conditioning_stop</a><br>')
    .appendTo('#vehicles');
  }

  $(document)
  .on('submit', 'form[action="/login"]', function(e) {
    e.preventDefault();
    form = $(this);
    $.post(form.attr('action'), form.serialize(), function(data, textStatus, jqXHR) {
      var html, body;
      html = $('<div></div>').append($.parseHTML(data));
      $('meta[name=csrf-token]').each(function() {
        this.content = html.find('meta[name=csrf-token]').attr('content')
      });
      body = data.substring(data.indexOf('<body>') + 6, data.indexOf('</body>'));
      $('body').html(body);
      decorate();
    });
  })
  .on('click', 'a[href^="/vehicles"]', function(e) {
    var $el;

    e.preventDefault();
    $el = $(this);
    $.get(this.href, function(data) {
      var response = $('<pre></pre>').append(JSON.stringify(data, null, '  '));

      $('<div></div>')
      .append(response)
      .append('[<a href="#">clear</a>]')
      .insertAfter($el);
    });
  })
  .on('click', 'a:contains(clear)', function(e) {
    e.preventDefault();
    $(this).parent().remove();
  });

  $(function() {
    decorate();
  });
})();
