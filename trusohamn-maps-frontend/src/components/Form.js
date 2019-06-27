import React from 'react';


function Form(props) {


    const postPoint = (e) => {
        e.preventDefault();

        const data = new URLSearchParams();
        for (const pair of new FormData(e.target)) {
            data.append(pair[0], pair[1]);
        }

        fetch("http://localhost:8000/api/points", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        })
            .then((res) => {
                console.log('success');
                props.removeData();
            }
            )
    }

    return (
        props.mode === 'explore' ? '' :
            <div>
                <form onSubmit={postPoint} class="flexcontainer" action="http://localhost:8000/api/points" method="post" >
                <h3>Add new location  </h3>
                    <input className="d-none" readOnly type="number" step="any" name="lon" id="lon" value={props.lon}></input>
                    <input className="d-none" readOnly type="number" step="any" name="lat" id="lat" value={props.lat}></input>
                    <input placeholder="place name" type="text" name="name" id="name"></input>
                    <input placeholder="place decription" type="text" name="description" id="description"></input>
                    <button type="submit" className="btn btn-dark btn-sm">Go</button>
                </form>
            </div>


    )
}
// class="d-none"
// action="http://localhost:8000/api/points" method="post"
export default Form;