import React from 'react';
import Data from '../memsData';
export default function Mems ()
{
    let [ memeImage, setMemeImage ] = React.useState( Data.mems[ 0 ].url );
    let [ memeTxtTop, setMemeTxtTop ] = React.useState( Data.mems[ 0 ].topText );
    let [ memeTxtBottom, setMemeTxtBttom ] = React.useState( Data.mems[ 0 ].bottomText );
    function generateMeme ()
    {

        let random = Math.floor( Math.random() * Data.mems.length );
        setMemeImage( () =>
        {
            return Data.mems[ random ].url;
        } );
        setMemeTxtTop( () =>
        {
            return Data.mems[ random ].topText;
        } );
        setMemeTxtBttom( () =>
        {
            return Data.mems[ random ].bottomText;
        } );
    }
    let image = `../img/${ memeImage }.jpg`;
    return (
        <div className="form">
            <input type="text" className="form--input toptxt" placeholder="top-mems" />
            <input type="text" className="form--input bottomtxt" placeholder="bottem-mems" />
            <button className="form--buttom" onClick={ generateMeme }>Get a new meme image  🖼</button>
            <div className="mems">
                <img className='mems--image' src={ image } />
                <h2 className='top-txt'>{ memeTxtTop }</h2>
                <h2 className='bottom-txt'>{ memeTxtBottom }</h2>
            </div>
        </div>
    );
}