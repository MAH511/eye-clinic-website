
Session.set("image number", undefined);

Template.condition_images_template.events({
    'click .js-condition-image':function(event){
    	var image_id = this._id;
    	var name= ConditionImages.findOne({_id:image_id}).img_alt;
		console.log(Conditions.findOne({name:name}));
		Session.set("image number", name);
		console.log(Session.get("image number",name));
	},
	'click .js-learn-more':function(event){
		var image_id=this._id;
		var name= ConditionImages.findOne({_id:image_id}).img_alt;
		console.log(Conditions.findOne({name:name}));
		Session.set("image number", name);
		console.log(Session.get("image number",name));

	},
});


Template.condition_details_template.events({
    'click .js-back-button':function(){
		Session.set("image number", undefined);
		return;
	}
});





