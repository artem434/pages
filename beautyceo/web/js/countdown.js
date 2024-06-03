$(document).ready(function(){
	$(".simpleCountdown").each(function(){
		var myDate = new Date();
		function returnEndDate (d,h,m) {
			myDate.setDate(myDate.getDate()+d);
			myDate.setHours(myDate.getHours()+h);
			myDate.setMinutes(myDate.getMinutes()+m);
			return myDate;
		}
		var note = $('#note');
		if($(this).data('cookies') == 'yep'){
			if($.cookie("timer")) {
				var dateEnd = $.cookie("timer");
			}
			else {
				var extraDate = $(this).data('extra').split(',');
				var dateEnd = returnEndDate(Number(extraDate[0]),Number(extraDate[1]),Number(extraDate[2]), Number(extraDate[3]), Number(extraDate[4]), Number(extraDate[5]));
				$.cookie("timer", dateEnd, {expires: null});
			};
			var ts = new Date(dateEnd);
		}
		else{
			var staticDate = $(this).data('date').split(',');
			var ts = new Date(Number(staticDate[0]),Number(staticDate[1]), Number(staticDate[2]),Number(staticDate[3]), Number(staticDate[4]), Number(staticDate[5]));
		};
		$(this).countdown({timestamp : ts});
	});
});