(function (console, $hx_exports) { "use strict";
$hx_exports.module1 = $hx_exports.module1 || {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var module1_Dependency2 = function() {
	console.log("Module1 is up");
};
var module1_Interface1 = function() { };
var module1_Module1 = $hx_exports.module1.Module1 = function() {
	module1_Dependency2.call(this);
	var doc = window.document;
	this.view = doc.createElement("div");
	this.view.className = "module1";
	this.sub = new module1_sub_Dependency1();
	this.view.appendChild(this.sub.view);
};
module1_Module1.__interfaces__ = [module1_Interface1];
module1_Module1.__super__ = module1_Dependency2;
module1_Module1.prototype = $extend(module1_Dependency2.prototype,{
});
var module1_sub_Dependency1 = function() {
	var doc = window.document;
	this.view = doc.createTextNode("Hello module1");
};
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
