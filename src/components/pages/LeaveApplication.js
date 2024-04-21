import React from "react";

function LeaveApplication(){
    return(
        <div class="container-fluid">
            <div class="row mt-3">
                    <div class="col-12">
                        <h1 class="text-center text-white">Leave Application Dashboard</h1>
                    </div>
            </div>
            <div className="row">
                <div className="col-4">                 
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="card  mb-3">
                        <div class="card-header text-white bg-primary">Total Leaves</div>
                        <div class="card-body">
                            <h5 class="card-title">10</h5>
                            <p class="card-text">Total number of leaves taken.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card  mb-3">
                        <div class="card-header text-white bg-success">Remaining Leaves</div>
                        <div class="card-body">
                            <h5 class="card-title">20</h5>
                            <p class="card-text">Number of leaves left.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card  mb-3">
                        <div class="card-header  bg-danger text-white">Pending Approvals</div>
                        <div class="card-body">
                            <h5 class="card-title">3</h5>
                            <p class="card-text">Number of leave requests pending for approval.</p>
                        </div>
                        </div>
                    </div>
            </div>
                </div>
                <div className="col-8">
                   <div class="row mt-5 justify-content-center">
                    <div class="col-md-6">
                        
                        <div class="card">
                        <div class="card-header bg-secondary">
                            Apply for Leave
                        </div>
                        <div class="card-body">
                            <form>
                            <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Leave Type</span>
                            <select class="form-control" id="leaveType" name="leaveType">
                                <option value="sick">Sick Leave</option>
                                <option value="vacation">Vacation Leave</option>
                                <option value="personal">Personal Leave</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Start Date</span>
                                <input type="date" class="form-control" id="startDate" name="startDate"/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">End Date</span>
                                <input type="date" class="form-control" id="endDate" name="endDate"/>
                            </div>
                            <div class="form-group pb-4">
                                <label for="reason">Reason</label>
                                <textarea class="form-control" id="reason" name="reason" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
                </div>
            </div>

            
            
  </div>

    )
}
export default LeaveApplication;
