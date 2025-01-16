import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";

const fetchUser = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return res.json();
};

const createData = async (newvalue) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newvalue),
  });
  return res.json();
};

const updateData = async (updatedItem) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${updatedItem.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }
  );
  return res.json();
};

const deleteData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

function Query_file() {
  const { data, isLoading, isError } = useQuery(["users"], fetchUser);
  const queryClient = useQueryClient();

  const [inputdata, setInputData] = useState({
    title: "",
    body: "",
  });

  const createMutation = useMutation(createData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const updateMutation = useMutation(updateData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    createMutation.mutate({ title: inputdata.title, body: inputdata.body });
    setInputData({ title: " ", body: "" });
  };

  const handleUpdate = (id) => {
    const updateData = { id, title: "update title", body: "update body" };
    updateMutation.mutate(updateData);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <>
      <div>Query_file</div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Your Title"
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, title: e.target.value }))
          }
          value={inputdata.title}
          style={{ border: "1px solid black", margin: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter Your Description"
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, body: e.target.value }))
          }
          value={inputdata.body}
          style={{ border: "1px solid black", margin: "10px" }}
        />
        <button
          type="submit"
          style={{ border: "1px solid black", margin: "10px" }}
        >
          Submit
        </button>
      </form>
      {data &&
        data.map((i, index) => {
          return (
            <>
              <div key={index}>
                <h5 className="font-semibold">{i.title}</h5>
                <p>{i.body}</p>
                <button
                  className="border border-black m-2 p-1"
                  onClick={() => handleUpdate(i.id)}
                >
                  Update
                </button>
                <button className="border border-black m-2 p-1" onClick={() => handleDelete(i.id)}>Delete</button>
              </div>
            </>
          );
        })}
    </>
  );
}

export default Query_file;

