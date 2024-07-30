"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCounterValue,
  deleteCounterValue,
  editCounterValue,
  toggleCompletionStatus,
} from "@/redux/features/counterSlice/CounterSlice";

const OrgInput = () => {
  const [value, setValue] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const countervalue = useSelector(
    (store: any) => store.CounterSlice.countervalue
  );
  const completionStatus = useSelector(
    (store: any) => store.CounterSlice.completionStatus
  );

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (value.trim()) {
      if (isEditing !== null) {
        dispatch(editCounterValue({ index: isEditing, newValue: value }));
        setIsEditing(null); // Reset editing state
      } else {
        dispatch(addCounterValue(value));
      }
      setValue("");
    }
  };

  const deleteHandler = (index: number) => {
    dispatch(deleteCounterValue(index));
  };

  const editHandler = (index: number, currentValue: string) => {
    setValue(currentValue);
    setIsEditing(index);
  };

  const completeHandler = (index: number) => {
    dispatch(toggleCompletionStatus(index));
  };

  return (
    <div className="h-screen">
      <div className="flex w-full justify-center items-center gap-4 mt-2">
        <input
          type="text"
          className="block rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="h-10 px-6 flex items-center rounded-lg justify-center bg-blue-600 text-sm font-semibold text-white shadow-inner shadow-blue-900/10 focus:outline-none hover:bg-blue-500 focus:bg-blue-600 focus:outline-2 focus:outline-blue-300"
        >
          {isEditing !== null ? "Save" : "Add Todo"}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {countervalue?.map((val: any, index: number) => (
          <div
            key={index}
            className={`flex justify-around gap-2 py-4 mt-6 ${
              completionStatus[index] ? "bg-green-200" : "bg-[#f3f4f6]"
            }`}
          >
            <p className={`${completionStatus[index] ? "line-through" : ""}`}>
              {val}
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => editHandler(index, val)}
                className="bg-green-600 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteHandler(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => completeHandler(index)}
                className="bg-[#0d9488] text-white px-2 py-1 rounded"
              >
                {completionStatus[index] ? "Completed" : "UnComplete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgInput;
