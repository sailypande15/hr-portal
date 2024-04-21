import React from "react";
import { Link } from "react-router-dom";

function TrainingPortal(){
    return(
        <div class="container">
        <h1 class="mt-5 text-white">Training Portal</h1>
        <div class="row mt-4">
            <div class="col-md-4 pt-4" style={{backgroundColor:"#969DB4"}}>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Upcming Trainings</h5>
                        <ul style={{listStyle:"none"}}>
                        <li class="card-text">Cyber Security<spna className="small">&nbsp;[last date : 30-April 2024]</spna></li>
                        <li class="card-text">Data Protection <spna className="small">&nbsp;[last date : 30-April 2024]</spna></li>
                        </ul>
                    </div>

                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <h5 className="card-title">Training Completion Status</h5>
                        <p className="card-text">You have completed 50% of the training.</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                                aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" id="training" title="training" src="https://www.youtube.com/embed/YJInlE99vSs?rel=0" allowfullscreen width={"100%"} height={"350px"}></iframe>
                </div>
            </div>
            </div>
            
        
        <div class="row mt-4">
            <div class="col-md-12 p-4" style={{backgroundColor:"#969DB4"}}>
                <h3 className="text-white">Training Videos</h3>
                <div class="list-group">
                    <Link to={"/"} class="list-group-item list-group-item-action">Video 1</Link>
                    <Link to={"/"} class="list-group-item list-group-item-action">Video 2</Link>
                    <Link to={"/"} class="list-group-item list-group-item-action">Video 3</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TrainingPortal;