(function(back) {
  function settings() {
    let settings = require('Storage').readJSON("widpmsh.settings.json", true) || {};
    if (settings.orientation===undefined) settings.orientation="North";
    return settings;
  }
  function updateSetting(setting, value) {
    let settings = require('Storage').readJSON("widpmsh.settings.json", true) || {};
    settings[setting] = value;
    require('Storage').writeJSON("widpmsh.settings.json", settings);
  }

  var orientations = ["North", "South"];
  var currentOrientation = settings().orientation;
  var mainmenu = {
    "" : { "title" : "Messages" },
    "< Back" : back,
    'Orientation': {
      value: settings().orientation,
      format: o => orientations[o],
      onchange: o => {
        updateSetting("orientation", orientations[o]);
      }
    },
  };
  E.showMenu(mainmenu);
})
