import React from "react"

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav--firstline">
                    <div className="nav--title">.sneakers</div>
                    <div className="input-group mb-3 nav--search-bar">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </span>
                    </div>
                    {/* <div className="nav--limited-offer">Limited Offer</div> */}
                </div>
                <div className='nav--secondline'>
                    <a className="nav--categories">AIR FORCE</a>
                    <a className="nav--categories">JORDAN</a>
                    <a className="nav--categories">BLAZER</a>
                    <a className="nav--categories">CRATER</a>
                    <a className="nav--categories">HIPPIE</a>
                </div>
            </nav>
        </>
    )
}