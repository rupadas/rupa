
function insertDiary(selector,mode) {
	if(mode=='resource') {
		var mode='resourceDay';
	}
	else if(mode=='day') {
		var mode='agendaDay';
	}
	else if(mode=='week') {
		var mode='agendaWeek';
	}
	jQuery.getJSON("text.js",function(data){

	var window=$(selector).fullCalendar({
            columnFormat: {
            week: ' M/d ddd',
            },
            timeFormat: 'H:mm{-H:mmtt }',
			header: {
            	left: 'prev,next today',
            	center: 'title',
            	right: mode
       		},
            events: 'event.js',               
       		resources: data,
       		editable: true,
       		eventDrop: updateEvent,		
    		eventResize: updateEvent,  		 		
	});	
        window.fullCalendar('changeView',mode);
    });	       
}
function updateEvent(event,dayDelta,minuteDelta,allDay,revertFunc) {
    
     	/*$.ajax({
    		url:'',
    		type:'POST',
    		data:({
    			id:event.id,
    			title:event.title,
    			start:event.start,
    			end:event.end,	
    		}),
    		success: function(data) {			
    		}
    	});*/
}		
	

