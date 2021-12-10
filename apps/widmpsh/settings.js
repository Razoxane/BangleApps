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
    if ("widmpsh" in WIDGETS) WIDGETS["widmpsh"].draw();
  }

  var mainmenu = {
    "" : { "title" : "Messages" },
    "< Back" : back,
    "Orientation": {
      value: settings.orientation|0,
      format: v => ["North", "South", "Equator"][v%3],
      onchange: v => {
        updateSetting('orientation', v%3);
      },
    },
  };
  E.showMenu(mainmenu);
})
