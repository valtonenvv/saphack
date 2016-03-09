jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Orders in the list
// * All 3 Orders have at least one Order_Details

sap.ui.require([
	"sap/ui/test/Opa5",
	"maxipoint/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"maxipoint/test/integration/pages/App",
	"maxipoint/test/integration/pages/Browser",
	"maxipoint/test/integration/pages/Master",
	"maxipoint/test/integration/pages/Detail",
	"maxipoint/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "maxipoint.view."
	});

	sap.ui.require([
		"maxipoint/test/integration/MasterJourney",
		"maxipoint/test/integration/NavigationJourney",
		"maxipoint/test/integration/NotFoundJourney",
		"maxipoint/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});