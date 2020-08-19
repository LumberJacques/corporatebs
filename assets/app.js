( function() {

    let selectRand = max => Math.floor( Math.random() * ( max || 1 ) );
    let btn = document.querySelector( '#generatePitch' );
    let stage = document.querySelector( '#pitchStage' );
    let main = document.querySelector( '#mainStage' );

    if ( !btn || !stage ) return alert( 'Unable to initialize app.' );

    let master = {
        pronoun: ['Our', 'The', 'This'],
        noun_1: ['product', 'service', 'enterprise', 'offering', 'innovation', 'app', 'web service'],
        noun_2: ['approach', 'exit strategy', 'synergy', 'touch-point', 'engagement', 'alignment', 'pain-point', 'return on investment', 'solution', 'survival strategy'],
        verb_1: ['adds value', 'shifts the paradigm', 'creates a disruptive innovation', 'pushes the envelope', 'promotes accountability', 'brings value to the table', 'disruptively innovates', 'upsets the status quo', 'sets the new normal', 'streamlines the process'],
        verb_2: ['disrupting the status quo', 'making it pop', 'seamlessly integrating with existing structures', 'leveraging Big Data', 'taking a granular approach', 'aligning best practices', 'setting a clear goal', 'growing organically', 'shifting the paradigm', 'communicating strategically', 'increasing market-share', 'breaching untapped markets', 'focusing on the customer', 'upcycling under-utilized assets', 'upselling the unwary'],
        preposition: ['through', 'utilizing', 'via', 'in', 'using'],
        adjective: ['client-centric', 'holistic', 'strategic face-time', 'value-added', 'mission-critical', 'customer-focused', 'disruptively innovative', 'impactful', 'diversified', 'outside-the-box', 'sustainable', 'cloud-based', 'strategic communication', 'strategic'],
        label: ['Synergize!', 'Add Value!', 'Drive Customers!', 'Touch Base!', 'Shift the Paradigm!', 'Push the Envelope!'],
        colour: ['#18e5ff', '#9518ff', '#18bdff', '#ff18fd', '#ff186f', '#ff1a18', '#ff8118', '#ffa818', '#50ff18', '#18ff4f', '#18ffaf'],
        getSegment: function( target ) {
            return this.hasOwnProperty( target ) ? this[target][selectRand( this[target].length )] : '';
        },
        constructSentence: function() {
            return `${this.getSegment( 'pronoun' )} ${this.getSegment( 'noun_1' )} ${this.getSegment( 'verb_1' )} by ${this.getSegment( 'verb_2' )} ${this.getSegment( 'preposition' )} ${( function( adj ) { return ['a', 'e', 'i', 'o', 'u'].indexOf( adj.charAt( 0 ) ) > -1 ? 'an ' + adj : 'a ' + adj; } )( this.getSegment( 'adjective' ) )} ${this.getSegment( 'noun_2' )}.`;
        }
    };

    function updateUI() {

        let uiColour = master.getSegment( 'colour' );
        let label = master.getSegment( 'label' );

        while ( label == btn.innerHTML ) label = master.getSegment( 'label' );

        document.querySelectorAll( '.genStripe' ).forEach( item => item.style.backgroundColor = uiColour );
        document.querySelectorAll( '.targetColour' ).forEach( item => item.style.color = uiColour );
        btn.style.backgroundColor = uiColour;

        stage.innerHTML = master.constructSentence();


        btn.innerHTML = label;

        setTimeout( () => {
            btn.classList.remove( 'processing' );
            main.classList.remove( 'processing' );
        }, 500 );

    }

    btn.addEventListener( 'click', function( e ) {

        if ( btn.classList.contains( 'processing' ) ) return;
        btn.classList.add( 'processing' );
        main.classList.add( 'processing' );

        setTimeout( updateUI, 500 );

    } );

    document.querySelector( 'body' ).classList.remove( 'noShow' );
    setTimeout( updateUI, 0 );

} )();
