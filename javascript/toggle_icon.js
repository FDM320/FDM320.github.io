$('#top-navbar').on('shown.bs.collapse', function() {
    $(".custom-toggle-top").addClass('fa-angle-up').removeClass('fa-angle-down');
	$('.fixed-top').css('background', 'rgba(0,0,0,.5');
  });

$('#top-navbar').on('hidden.bs.collapse', function() {
    $(".custom-toggle-top").addClass('fa-angle-down').removeClass('fa-angle-up');
	$('.fixed-top').css('background', 'rgba(0,0,0,0');
  });	
  
$('#bottom-navbar').on('shown.bs.collapse', function() {
    $(".custom-toggle-bottom").addClass('fa-angle-down').removeClass('fa-angle-up');
	$('.fixed-bottom').css('background', 'rgba(0,0,0,0.5');
  });

$('#bottom-navbar').on('hidden.bs.collapse', function() {
    $(".custom-toggle-bottom").addClass('fa-angle-up').removeClass('fa-angle-down');
	$('.fixed-bottom').css('background', 'rgba(0,0,0,0');
  });	