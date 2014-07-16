/*global $:false */
'use strict';

$(function() {
  // kitchen sink stuff

  $('.tooltip-test').tooltip();
  $('.popover-test').popover();

  $('.tooltip-demo').tooltip({
    selector: '[data-toggle="tooltip"]',
    container: 'body'
  });

  $('.popover-demo').popover({
    selector: '[data-toggle="popover"]',
    container: 'body'
  });

  // show/hide kitchen sink

  var showKitchenSink = sessionStorage.getItem('showKitchenSink');
  if (!showKitchenSink) {
    sessionStorage.setItem('showKitchenSink', 'true');
  } else {
    var val = showKitchenSink === 'true';
    $('#kitchenSink').toggle(val);
    $('#showKitchenSink').prop('checked', val);
  }

  $('#showKitchenSink')
    .change(function() {
      sessionStorage.setItem('showKitchenSink', String(this.checked));
      $('#kitchenSink').toggle(this.checked);
    });

  // context

  function loadContext(context) {
    sessionStorage.setItem('context', context);

    // update the dropdown text
    $('#currentContext').text(context);

    // remove previous context style
    $('head link[data-context]').remove();

    // add new context style
    $('<link>', {
      rel: 'stylesheet',
      href: '../dist/css/ui-framework-' + context + '.css',
      'data-context': context
    }).appendTo('head');

    // load context test HTML
    if (context !== 'core') {
      $('#context').load('contexts/' + context + '.html');
    } else {
      $('#context').empty();
    }
  }

  var context = sessionStorage.getItem('context') || 'core';
  loadContext(context);

  $('#contextDropdown a')
    .click(function() {
      var context = $(this).text();
      loadContext(context);
    });
});
