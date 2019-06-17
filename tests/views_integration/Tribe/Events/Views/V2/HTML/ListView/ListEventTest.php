<?php
namespace Tribe\Events\Views\V2\Views\HTML\ListView;

use Tribe\Events\Views\V2\TestHtmlCase;
use Tribe\Events\Test\Factories\Event;

class ListEventTest extends TestHtmlCase {

	public function setUp() {
		parent::setUp();
		$this->factory()->event = new Event();
	}


	/**
	 * @test
	 */
	public function it_should_contain_correct_html_classes() {

		$args  = [
			'start_date' => '2018-01-01 09:00:00',
			'end_date'   => '2018-01-01 11:00:00',
			'timezone'   => 'Europe/Paris',
			'title'      => 'A test event',
		];

		$event = tribe_events()->set_args( $args )->create();

		$template = $this->template->template( 'list/event', [ 'event' => $event ] );
		$html = $this->document->html( $template );

		$this->assertEquals(
			$html->find( '.tribe-events-calendar-list__event' )->count(),
			1,
			'List Event HTML needs to contain one ".tribe-events-calendar-list__event" element'
		);

		$this->assertFalse(
			$html->find( '.tribe-events-calendar-list__event' )->is( '.tribe-events-calendar-list__event--featured' ),
			'List Event HTML shouldnt to contain ".tribe-events-calendar-list__event--featured" class if not featured'
		);

	}

	/**
	 * @test
	 */
	public function it_should_contain_featured_when_featured() {

		$args  = [
			'start_date' => '2018-01-01 09:00:00',
			'end_date'   => '2018-01-01 11:00:00',
			'timezone'   => 'Europe/Paris',
			'title'      => 'A featured test event',
			'featured'   => true,
		];

		$event = tribe_events()->set_args( $args )->create();

		$template = $this->template->template( 'list/event', [ 'event' => $event ] );
		$html = $this->document->html( $template );

		$this->assertEquals(
			$html->find( '.tribe-events-calendar-list__event--featured' )->count(),
			1,
			'List Event HTML needs to contain one ".tribe-events-calendar-list__event--featured" element when having a featured event'
		);

	}
}
