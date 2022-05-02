import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Content() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function submitTask(event) {
    event.preventDefault();
    dispatch({
      type: "SET_BACKLOG",
      payload: task,
    });
    setTask("");
  }

  function handleInProgress(id, task) {
    dispatch({
      type: "SET_INPROGRESS",
      payload: task,
    });

    dispatch({
      type: "REMOVE_BACKLOG",
      payload: id,
    });
  }

  function handleEvaluation(id, task) {
    dispatch({
      type: "SET_EVALUATION",
      payload: task,
    });

    dispatch({
      type: "REMOVE_INPROGRESS",
      payload: id,
    });
  }

  function handleDone(id, task) {
    dispatch({
      type: "SET_DONE",
      payload: task,
    });

    dispatch({
      type: "REMOVE_EVALUATION",
      payload: id,
    });
  }

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
              onChange={handleChange}
              value={task}
            />
            <button
              type="submit"
              onClick={submitTask}
              className="btn btn-primary w-25"
            >
              Save to Backlog
            </button>
          </form>
        </div>
        <div className="col-md-6"></div>
      </div>

      <div className="row mt-4">
        {/* Backlog */}
        <div className="col-md-3">
          <div className="card">
            <div className="m-2 alert alert-dark fw-bold" role="alert">
              Backlog
            </div>
            {state.backlogList.map((task, idx) => {
              return (
                <>
                  <div className="card mx-2 mb-2" key={idx}>
                    <div className="card-body">
                      <p className="card-text">{task}</p>
                      <button
                        onClick={() => {
                          handleInProgress(idx, task);
                        }}
                        className="btn btn-secondary"
                      >
                        Take
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* In Progress */}
        <div className="col-md-3">
          <div className="card">
            <div className="m-2 alert alert-warning fw-bold" role="alert">
              In Progress
            </div>
            {state.inprogressList.map((task, idx) => {
              return (
                <>
                  <div className="card mx-2 mb-2">
                    <div className="card-body">
                      <p className="card-text">{task}</p>
                      <button
                        onClick={() => {
                          handleEvaluation(idx, task);
                        }}
                        className="btn btn-secondary"
                      >
                        Evaluate
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Evaluation */}
        <div className="col-md-3">
          <div className="card">
            <div className="m-2 alert alert-info fw-bold" role="alert">
              Evaluation
            </div>
            {state.evaluationList.map((task, idx) => {
              return (
                <>
                  <div className="card mx-2 mb-2" key={idx}>
                    <div className="card-body">
                      <p className="card-text">{task}</p>
                      <button
                        onClick={() => {
                          handleDone(idx, task);
                        }}
                        className="btn btn-secondary"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Done */}
        <div className="col-md-3">
          <div className="card">
            <div className="m-2 alert alert-success fw-bold" role="alert">
              Done
            </div>
            {state.doneList.map((task, idx) => {
              return (
                <>
                  <div className="card mx-2 mb-2" key={idx}>
                    <div className="card-body">
                      <p className="card-text">{task}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
