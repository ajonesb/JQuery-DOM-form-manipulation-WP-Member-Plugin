
<?php
/*
Template Name: Registracion Page
*/


/**
 * The template for the structure of Registration page.
 *
 * This template is similar to the page.php template that displays all pages by default.  */

get_header(); ?>



<?php 
if(of_get_option('enable_parallax') == 1 && is_front_page() && get_option( 'show_on_front' ) == 'page'){
	get_template_part('index','parallax');
}else{
?>

      

<div class="mid-content clearfix">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">



      <div class="registrationpagecontainer">
                                        
                              <?php echo do_shortcode('[wp-members page="register"]'); ?>
         
<!--Javascript below to change layout of dynamic form which is all generated in php not html through the plug in files. -->
 
            <script type="text/javascript">
                        jQuery(document).ready(function($) {
                        /*Removes the form class from the registration form and adds this new class below to target better form*/                       
                            /*$('.div_text').addClass('text').removeClass('div_text');*/
                            $('form').addClass('registrateelementswrap').removeClass('.form'); 
                        }); 

                                           
                        /*creates new wrapper around class .text and .div_text */                       
                         jQuery(document).ready(function($) {
                                    $(".registrateelementswrap .text").each(function(index) {
                                        $(this).next(".div_text").andSelf().wrapAll("<div class='registerseperator' />")
                                    });
                                });

                        /* Removes the clear after the registerseperator added container div*/
                          jQuery(document).ready(function($) {                        
                         /*$('.registerseperator').next('clear').remove();*/
                         /*$(".registrateelementswrap br.clearboth").remove();*/
                         $("br").remove();
                         });                     
            </script>


      </div>

    </main><!-- #main -->
  </div><!-- #primary -->

        <?php get_sidebar(); ?>

</div><!--Mid content clear fix -->

<?php } ?>

<?php get_footer(); ?>
