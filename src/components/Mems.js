import React, { useEffect } from 'react';
export default function Mems ()
{
    let [ memsData, setMemsData ] = React.useState(
        {
            "url": "",
            "topText": "",
            "bottomText": ""
        }
    );
    let [ apiMems, setApiMems ] = React.useState( [] );
    useEffect( () =>
    {
        fetch( "https://api.imgflip.com/get_memes" )
            .then( res => res.json() )
            .then( res => res.data.memes )
            .then( data => setApiMems( data ) );

    }, [] );
    console.log( apiMems.length );

    function generateMeme ()
    {
        setMemsData( ( update ) =>
        {
            let random = Math.floor( Math.random() * apiMems.length );
            let img = apiMems[ random ].url;
            console.log( img );
            return {
                ...update,
                url: img
            };
        } );
    }
    let image = memsData.url;
    function handlyInput ( event )
    {
        setMemsData( ( update ) =>
        {
            let { name, value } = event.target;
            return {
                ...update,
                [ name ]: value
            };
        } );
    }
    return (
        <div className="form">
            <input type="text" className="form--input toptxt" placeholder="top-mems" name='topText' value={ memsData.topText } onChange={ handlyInput } />
            <input type="text" className="form--input bottomtxt" placeholder="bottem-mems" name='bottomText' value={ memsData.bottomText } onChange={ handlyInput } />
            <button className="form--buttom" onClick={ generateMeme }>Get a new meme image  🖼</button>
            <div className="mems">
                { memsData.url !== "" && <img className='mems--image' src={ image } /> }
                <h2 className='top-txt'>{ memsData.topText }</h2>
                <h2 className='bottom-txt'>{ memsData.bottomText }</h2>
            </div>
        </div>
    );
}
