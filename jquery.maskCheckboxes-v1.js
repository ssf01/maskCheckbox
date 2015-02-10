(function( $ ){

  $.fn.maskCheckboxes = function() {
      return this.each( function() {
          var $this = $(this),
              isChecked = $this.prop('checked'),
              type = $this.attr('type');
          
          $this.next().addClass('checkbox-text')
          $this.wrap('<span class="ui-mask mask-'+type+'"></span>');

          if ( isChecked ) {
              $this.parent().addClass('checked');
          }   
          /* Check */

          $this.on('change', function (e) {
            var checkbox = $(this).prop('checked');

            if(type === 'checkbox'){
              
              $this.parent().toggleClass('checked', checkbox); 
            } else {
              
              var allRadio = $('.mask-radio').find(':radio');

              allRadio.each(function(){ 
                var chekedRadio = $(this).prop('checked');

                $(this).parent().toggleClass('checked', chekedRadio);
                  
              });
            }
            
          });
      });
    }    
})( jQuery );

