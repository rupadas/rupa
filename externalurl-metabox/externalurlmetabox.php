<?php 
/**
 * Plugin Name: External Metabox
 * Description: Adds a Externalurl metabox plugin to your site.
 * Version: 1.0
 * Author: Rupa
 * License: GPL2
 */
if ( !class_exists('externalurl_metabox') ) :
	class externalurl_metabox {

		private static $instance;

	    public static function get_instance() {
	        if ( !isset( self::$instance ) ) {
	            $class = __CLASS__;
	            self::$instance = new $class();
	        }

	        return self::$instance;
	    }

		protected function __construct() {

			add_action('admin_init', array($this,'add_externalurl_metabox') );
	        add_action('save_post', array($this,'save_external_url' ));
	        add_filter( 'the_content' , array($this,'displayurl')) ;
	        add_action('init', array($this, 'add_externalurl_css') );
    	}

		Public function add_externalurl_metabox() {

		    add_meta_box( 'external_url','External Url',  array($this,'external_url'), 'post', 'normal', 'high' ); 
		    $this->add_externalurl_css();
		}

		public function add_externalurl_css() {
        	wp_enqueue_style( 'externalurl-css', plugins_url( 'externalurl.css', __FILE__) );
    	}

		public function external_url($post) {

		    wp_nonce_field( 'externalurl_meta_box', 'externalurl_meta_box_nonce' );
		    $value = get_post_meta( $post->ID, 'external_url', true );
		    echo "<label>Externalurl</label>";
		    echo "<input type='text' name='external_url' id='external_url' value=' " . esc_attr( $value ) . "' />";
		}

		public function save_external_url($post_id) {

	        if ( ! isset( $_POST['externalurl_meta_box_nonce'] ) ) {
	            return;
	        }

	        if ( ! wp_verify_nonce( $_POST['externalurl_meta_box_nonce'], 'externalurl_meta_box' ) ) {
	        	return;
	        }

	        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
	        	return;
	        }

	        if( !current_user_can( 'edit_post' ) ) return;

	        if ( ! isset( $_POST['external_url'] ) ) {
	        	return;
	        }

	        $my_data = sanitize_text_field( $_POST['external_url'] );

	        $res=update_post_meta($post_id, 'external_url', $my_data);    
		}

		public function displayurl() {
			global $post;
    		$externalurl= get_post_meta($post->ID,'external_url',true);
		?>
			<div class="externalurl">
                    <iframe src="<?php echo $externalurl ?>" allowFullScreen></iframe>
            </div> 
		<?php }
	}
externalurl_metabox::get_instance();

endif;	
	