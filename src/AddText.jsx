import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./CounterSlice";
import { deleteTask } from "./CounterSlice";
import { editTask,updateEditedTask } from "./CounterSlice";

function AddText() {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");
  const [editedText,setEditedText] = useState('')
  

  const dispatch = useDispatch();
  let tempDispalyArray = useSelector(function (state) {
    return state.counter.input;
  });

  let check = useSelector(function (state) {
    return state.counter.check;
  });

  let isEdit = useSelector(function (state) {
    return state.counter.isEdit;
  });

  let editTask2 = useSelector(function(state){
    return state.counter.editTask
  })
  console.log(tempDispalyArray);
  // const [displayText, setDisplayText] = useState('');
  // let [check, setCheck] = useState(false);

  function handleChange(e) {
    if (check) {
      setInputText(e.target.value);
    } else {
      setInputText(e.target.value);
    }
  }
  function handleText(e) {
    setText(e.target.value);
  }

  console.log(inputText);

  function handleClick() {
    dispatch(addTask(inputText));
    setInputText("");

    console.log(inputText);

    // console.log(inputText);
    // setInputText("");
  }

  function handleEditChange(e){
    setEditedText(e.target.value)
  }

  function handleUpdatedChanges(){
dispatch(updateEditedTask(editedText))
setEditedText('')
  }

  return (
    <>
      <div>
        <div className="flex justify-center p-[27px] text-2xl ">
          <h1>TO-DO LIST</h1>
        </div>

        <div className="mt-[180px] ">
          <div>
            {isEdit ? (
              <div>
                <div>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => handleEditChange(e)}
                    className="w-[65rem] h-[40px] color-gray border border-b-sky-600"
                  />

                  <button className="border-black   ml-[40px] text-1xl w-[124px] h-[39px] border  border-b-sky-600
                  " onClick={()=>handleUpdatedChanges()}>
                    update
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <input
                    type="text"
                    value={check ? inputText : ""}
                    onChange={(e) => handleChange(e)}
                    className="w-[65rem] h-[40px] color-gray border border-b-sky-600"
                  />

                  <button
                    className="border-black   ml-[40px] text-1xl w-[124px] h-[39px] border  border-b-sky-600"
                    onClick={() => handleClick()}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {tempDispalyArray.map((ele, i, arr) => {
            return (
              <div key={i} className="mt-[10px] flex  ">
                {/* <input type='text' className="border border-b-sky-600 w-[65rem] h-[40px]" value={} /> */}
                <div>
                  {" "}
                  <input
                    type="text"
                    value={ele}
                    onChange={(e) => e.target.value}
                  />
                  <button
                    type="button"
                    className="border border-b-sky-600 ml-[10px] w-[82px] h-[38px]"
                    onClick={() => dispatch(editTask({ ele: ele, id: i }))}
                  >
                    Edit
                  </button>{" "}
                  <button
                    type="button"
                    className="border border-b-sky-600 w-[82px] h-[38px]"
                    onClick={() => dispatch(deleteTask(i))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default AddText;