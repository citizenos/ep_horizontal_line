var eejs = require('ep_etherpad-lite/node/eejs/');
var Changeset = require("ep_etherpad-lite/static/js/Changeset");

function eejsBlock_editbarMenuLeft(hook_name,args,cb){
	args.content += eejs.require('ep_horizontal_line/templates/hrLineButton.ejs');
	return cb();

}

function getLineHTMLForExport(hook, context){
	var hr = checkHrInLine(context.attribLine,context.apool);
	if(hr){
		context.lineContent = '<hr></hr>';
	}
}


function checkHrInLine(lineAttrib,pool){
	var hr= null;
	if(lineAttrib){
		var iter = Changeset.opIterator(lineAttrib);
		if(iter.hasNext()){

			var op = iter.next();
			hr =  Changeset.opAttributeValue(op,'hrline',pool);
 		}

	}
	return hr;
}

function eejsBlock_styles (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_horizontal_line/templates/styles.html", {}, module);
  return cb();
}


exports.eejsBlock_editbarMenuLeft = eejsBlock_editbarMenuLeft;
exports.getLineHTMLForExport = getLineHTMLForExport;
exports.eejsBlock_styles = eejsBlock_styles;