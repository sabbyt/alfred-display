const moment = require('moment');
var widgetLoc;

exports.render = function(id, options) {
  widgetLoc = document.getElementById(id);

  // set up variables as per options
  var dateFormat = ((options.dayLong) ? 'dddd, ' : 'ddd, ')
  + ((options.monthLong) ? 'MMMM' : 'MMM')
  + ' D YYYY';
  var timeFormat = (options.twentyFour) ? ('H:mm') : ('h:mm a');

  // update time widget
  function updateWidget() {
    var now = moment();
    widgetLoc.innerHTML = now.format(dateFormat) + '<br />'
    + '<span class="time-clock">' + now.format(timeFormat) + '</span>';
  }

  // update time every 10 seconds
  updateWidget();
  return setInterval(updateWidget, 10000);
};
