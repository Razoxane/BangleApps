(function(back) {
  const ORIENTATIONS = ['North', 'South', 'Equator'];
  let settings = require('Storage').readJSON('widmpsh.json',1)||{};
  if (typeof settings.orientation !== "string") settings.orientation = ORIENTATIONS[0]; // default value
  function save(key, value) {
    settings[key] = value;
    require('Storage').write('widmpsh.json', settings);
  }
  const appMenu = {
    '': {'title': 'Moon Orientation'},
    '< Back': back,
    'Orientation': {
      value: settings.orientation,
      format: () => settings.orientation,
      onchange: function () {
        // cycles through options
        const oldIndex = ORIENTATIONS.indexOf(settings.orientation)
        const newIndex = (oldIndex + 1) % ORIENTATIONS.length
        settings.orientation = ORIENTATIONS[newIndex]
        save('orientation')(settings.orientation)
      }
    }
  };
  E.showMenu(appMenu)
})
