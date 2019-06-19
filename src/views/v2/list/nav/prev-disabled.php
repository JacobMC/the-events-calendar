<?php
/**
 * View: List View Nav Disabled Previous Button
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/views/v2/list/nav/prev-disabled.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @var string $link The URL to the previous page, if any, or an empty string.
 *
 * @version TBD
 *
 */
?>
<button class="tribe-common-c-nav__prev" disabled>
	<?php echo esc_html( sprintf( __( 'Previous %s', 'the-events-calendar' ), tribe_get_event_label_plural() ) ); ?>
</button>
