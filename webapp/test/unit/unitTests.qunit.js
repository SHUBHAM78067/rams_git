/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"rams_git/rams_git/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
