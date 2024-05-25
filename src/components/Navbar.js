import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid" >
                        <a className="navbar-brand" href="/">NewsMind</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News Catogries
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/business">Business</a></li>
                                        <li><a class="dropdown-item" href="/entertainment">Entertainment</a></li>
                                        <li><a class="dropdown-item" href="/general">General</a></li>
                                        <li><a class="dropdown-item" href="/health">Health</a></li>
                                        <li><a class="dropdown-item" href="/science">Science</a></li>
                                        <li><a class="dropdown-item" href="/sports">Sports</a></li>
                                        <li><a class="dropdown-item" href="/Technology">Technology</a></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
