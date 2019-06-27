import React, { useState } from 'react';

function Description(props) {
    const [reviews, setReviews] = useState('');
    const fetchMorePointData = () => {
        console.log('click');
        //get request to api/points/:id
        fetch("http://localhost:8000/api/points/" + props.pointDescription.id)
            .then(res => res.json())
            .then(res => {
                console.log(res.rev)
                const rev = res.rev.map(e => {
                    return (
                    <div>
                        <h3>e.review </h3>
                        <p> e.description </p>
                        <h4>e.rating</h4>
                    </div>
                    )
                })
                setReviews(rev);
            });
    }

    const submitReview = (e) => {
        e.preventDefault();
        const data = new URLSearchParams();
        for (const pair of new FormData(e.target)) {
            data.append(pair[0], pair[1]);
        }

        fetch("http://localhost:8000/api/points/" + props.pointDescription.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        })
            .then((res) => {
                console.log('success');
            }
            )
        console.log('submitting revieww');
    }

    return (
        <div>
            <h1>
                {props.pointDescription.name}
            </h1>
            <p>
                {props.pointDescription.description}
                <br />
                rating: {props.pointDescription.rating}
            </p>
            <button type="click" onClick={fetchMorePointData} className="btn btn-dark btn-sm">Show reviews</button>

            {reviews}
            <form onSubmit={submitReview}>
                <input required name="review"></input>
                <input name="description"></input>
                <input required min="1" max="10" name="rating" type="number"></input>
                <button type="submit" className="btn btn-dark btn-sm">Review</button>
            </form>
        </div>
    )
}

export default Description;