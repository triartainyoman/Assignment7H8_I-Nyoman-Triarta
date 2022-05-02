import React from "react";

function Content() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <form className="d-flex">
            <input
              type="text"
              name="task"
              id="task"
              className="form-control me-3 w-75"
              placeholder="New Task"
            />
            <button className="btn btn-primary w-25">Save to Backlog</button>
          </form>
        </div>
        <div className="col-md-6"></div>
      </div>

      <div className="row mt-4">
        {/* Backlog */}
        <div className="col-md-3">
          <div className="card p-2">
            <div className="alert alert-dark fw-bold" role="alert">
              Backlog
            </div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">Task</p>
                <button className="btn btn-secondary">Take</button>
              </div>
            </div>
          </div>
        </div>
        {/* In Progress */}
        <div className="col-md-3">
          <div className="card p-2">
            <div className="alert alert-warning fw-bold" role="alert">
              In Progress
            </div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">Task</p>
                <button className="btn btn-secondary">Evaluate</button>
              </div>
            </div>
          </div>
        </div>
        {/* Evaluation */}
        <div className="col-md-3">
          <div className="card p-2">
            <div className="alert alert-info fw-bold" role="alert">
              Evaluation
            </div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">Task</p>
                <button className="btn btn-secondary">Done</button>
              </div>
            </div>
          </div>
        </div>
        {/* Done */}
        <div className="col-md-3">
          <div className="card p-2">
            <div className="alert alert-success fw-bold" role="alert">
              Done
            </div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">Task</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
