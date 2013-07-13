Menubar.Edit = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );
	container.onMouseOver( function () { options.setDisplay( 'block' ) } );
	container.onMouseOut( function () { options.setDisplay( 'none' ) } );
	container.onClick( function () { options.setDisplay( 'block' ) } );

	var title = new UI.Panel();
	title.setTextContent( 'Edit' ).setColor( '#666' );
	title.setMargin( '0px' );
	title.setPadding( '8px' );
	container.add( title );

	//

	var options = new UI.Panel();
	options.setClass( 'options' );
	options.setDisplay( 'none' );
	container.add( options );

	// clone

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Clone' );
	option.onClick( function () { editor.cloneObject( editor.selected ); } );
	options.add( option );

	// flatten

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Flatten' );
	option.onClick( function () { editor.flattenObject( editor.selected ); } );
	options.add( option );

	// delete

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Delete' );
	option.onClick( function () { editor.removeObject( editor.selected ); } );
	options.add( option );

	//

	return container;

}
