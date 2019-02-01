$('#top-navbar').on('shown.bs.collapse', function() {
    $(".custom-toggle-top").addClass('fa-angle-up').removeClass('fa-angle-down');
  });

$('#top-navbar').on('hidden.bs.collapse', function() {
    $(".custom-toggle-top").addClass('fa-angle-down').removeClass('fa-angle-up');
  });	
  
$('#bottom-navbar').on('shown.bs.collapse', function() {
    $(".custom-toggle-bottom").addClass('fa-angle-down').removeClass('fa-angle-up');
  });

$('#bottom-navbar').on('hidden.bs.collapse', function() {
    $(".custom-toggle-bottom").addClass('fa-angle-up').removeClass('fa-angle-down');
  });	