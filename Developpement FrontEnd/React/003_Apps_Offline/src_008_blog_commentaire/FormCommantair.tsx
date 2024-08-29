import React from "react";

type Props = {
  handleSubmit: Function;
  blogId: number;
};

function FormCommantair({ handleSubmit, blogId }: Props) {
  return (
    <div className="flex flex-col bg-white p-4 gap-4">
      <h2 className="text-xl">New Comment</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
        <input
          type="number"
          name="id"
          defaultValue={blogId}
          // value={blogId}
          hidden
        />
        <div className="flex gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            className="border rounded-lg pl-2"
            required
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="commantaire">commantaire:</label>
          <input
            type="text"
            name="say"
            placeholder="you commantaire"
            className="border rounded-lg pl-2"
            required
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-gray-900 text-white p-2 rounded-lg"
          >
            Comment
          </button>
          <button
            type="reset"
            className="text-gray-900 bg-gray-300 p-2 rounded-lg"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCommantair;
