var A_ARAI = A_ARAI || {};
A_ARAI.SAMPLE = {};

A_ARAI.SAMPLE.ClickCounter = function(clickBtn, counterBtn){
	this.count = 0;
	this.$target = clickBtn;
	this.$counter = counterBtn;

	this.bindEvent();
};
A_ARAI.SAMPLE.ClickCounter.prototype = {
	bindEvent : function(){
		var _self = this;
		this.$target.on('click', function(){
			_self.count++;
		});
		this.$counter.on('click', function(){
			alert(_self.count);
		});
	}
};
$(function(){
	new A_ARAI.SAMPLE.ClickCounter($('#jsiTarget'), $('#jsiResult'));
});