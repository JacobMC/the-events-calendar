<?php
/**
 * View: List View Nav Template
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/views/v2/list/nav.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @var string $prev_url The URL to the previous page, if any, or an empty string.
 * @var string $next_url The URL to the next page, if any, or an empty string.
 *
 * @version 4.9.3
 *
 */
?>
<nav class="tribe-common-c-nav">
	<ul class="tribe-common-c-nav__list">
		<li class="tribe-common-c-nav__list-item">
			<?php
			if ( $prev_url ) {
				$this->template( 'list/nav/prev', [ 'link' => $prev_url ] );
			} else {
				$this->template( 'list/nav/prev-disabled' );
			}
			?>
		</li>

		<li class="tribe-common-c-nav__list-item">
			<?php
			if ( $next_url ) {
				$this->template( 'list/nav/next', [ 'link' => $next_url ] );
			} else {
				$this->template( 'list/nav/next-disabled' );
			}
			?>
		</li>
	</ul>
</nav>
