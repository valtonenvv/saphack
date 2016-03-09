jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"maxipoint/test/integration/NavigationJourneyPhone",
		"maxipoint/test/integration/NotFoundJourneyPhone",
		"maxipoint/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

