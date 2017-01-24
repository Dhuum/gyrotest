cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-gyroscope.Orientation",
        "file": "plugins/cordova-plugin-gyroscope/www/Orientation.js",
        "pluginId": "cordova-plugin-gyroscope",
        "clobbers": [
            "Orientation"
        ]
    },
    {
        "id": "cordova-plugin-gyroscope.gyroscope",
        "file": "plugins/cordova-plugin-gyroscope/www/gyroscope.js",
        "pluginId": "cordova-plugin-gyroscope",
        "clobbers": [
            "navigator.gyroscope"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-gyroscope": "0.1.4"
};
// BOTTOM OF METADATA
});