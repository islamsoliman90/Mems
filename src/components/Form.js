import React from "react";

export default function Form ()
{
    let [ formData, setFormData ] = React.useState(
        {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            massage: "",
            isfriendly: false,
            employ: "",
            favcolor: ""
        } );
    function handely ( event )
    {
        setFormData( ( preData =>
        {
            const { name, value, type, checked } = event.target;
            return {
                ...preData,
                [ name ]: type == "checkbox" ? checked : value

            };

        } ) );
    }
    function handlysubmit ( event )
    {
        event.preventDefault();
        if ( formData.username == "" )
        {

            console.log( "username is empty" );
        } else if ( formData.password != formData.confirmPassword )
        {
            console.log( "password not match" );

        } else if ( formData.isfriendly )
        {
            console.log( "submite" );
        } else
        {
            console.log( "be friendly" );

        }
    }
    return (
        <form onSubmit={ handlysubmit }>
            <input type="text" name="username" placeholder="Username" onChange={ handely } value={ formData.username } />
            <input type="password" name="password" placeholder="password" onChange={ handely } value={ formData.password } />
            <input type="password" name="confirmPassword" placeholder="confirm password" onChange={ handely } value={ formData.confirmPassword } />
            <input type="email" name="email" placeholder="email" onChange={ handely } value={ formData.email } />
            <textarea name="massage" placeholder="massage" onChange={ handely } value={ formData.massage } />
            <div>
                <input type="checkbox" id="isfriend" name="isfriendly" onChange={ handely } checked={ formData.isfriendly } />
                <label htmlFor="isfriend">Are you friendly</label>
            </div>
            <fieldset>
                <legend>Current empolyee status</legend>
                <div className="radio">
                    <input type="radio" name="employ" id="unemployed" value="unemployed" onChange={ handely } checked={ formData.employ === "unemployed" } />
                    <label htmlFor='unemployed'>unemployed</label>
                </div>
                <div className="radio">
                    <input type="radio" name="employ" id="part" value="part-time" onChange={ handely } checked={ formData.employ === "part-time" } />
                    <label htmlFor='part'>Part-time</label>
                </div>
                <div className="radio">
                    <input type="radio" name="employ" id="full" value="full-time" onChange={ handely } checked={ formData.employ === "full-time" } />
                    <label htmlFor='full'>full-time</label>
                </div>
            </fieldset>
            <br />
            <label htmlFor="favColor">What Is Your Favorite Color </label>
            <select
                id="favColor"
                name="favColor"
                onChange={ handely }
                value={ formData.favColor }
            >
                <option value="">--choose-Color--</option>
                <option value="red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="yellow">yellow</option>
                <option value="pink">pink</option>
            </select>
            <button>Submit Form</button>
        </form>
    );
}