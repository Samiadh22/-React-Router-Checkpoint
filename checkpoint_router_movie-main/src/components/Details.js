import React from 'react'

function Details({List,match}) {
    console.log(match)
const found = List.find((elm) => elm.id == match.params.id) 

    return (
        <div>
            <h2>{found.name}</h2>
            <div class="card mb-3">
            <img src={found.image} class="card-img-top" alt={found.name} />
            <div class="card-body">
                <h5 class="card-title">{found.name}</h5>
                <p class="card-text">{found.description}</p>
                <p class="card-text"><small class="text-muted">{found.rating}</small></p>
                <div>
                    {found.trailer}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Details
