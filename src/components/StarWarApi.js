import React, { useEffect, useState } from "react";

export default function StarWar ()
{
    console.log( "StarWar" );

    const [ starWarState, setStarWarState ] = useState( {} );
    const [ count, setCount ] = useState( 1 );
    useEffect( () =>
    {
        fetch( "https://api.imgflip.com/get_memes" )
            .then( res => res.json() )
            .then( data => setStarWarState( data ) );

    }, [ count ] );

    return (
        <div>
            <pre style={ { width: "100%", height: "fit", display: "block" } }>{ JSON.stringify( starWarState ) }</pre>
            <p >{ count }</p>
            <button style={ { width: "100%", height: "50px" } } onClick={ () => setCount( prenum => ++prenum ) }>GEt Data</button>
        </div >
    );
}