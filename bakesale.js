$(function(){
    $('#apa-site').hide();
    $('#show-apa-site').click(function(event){
        event.preventDefault();
        $('#apa-site').show('slow');
        $('#show-apa-site').hide('slow')
    });
})