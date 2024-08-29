import React from "react";
import FormCommantair from "./FormCommantair";
type Comment = {
  name: String;
  say: String;
};

type Blog = {
  id: number;
  title: String;
  author: String;
  img: string;
  comments: Array<Comment>;
};

type Props = {
  blog: Blog;
  handleSubmit: Function;
};

function CardBlog({ blog, handleSubmit }: Props) {
  return (
    <div className="border flex flex-col gap-2 shadow-lg w-full ml-2 mt-2 bg-gray-100 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold ">{blog.author}</h2>
          <h4 className="text-xl  ">{blog.title}</h4>
        </div>
        <div>
          <img src={blog.img} className="max-h-[450px] rounded-lg pl-4" />
        </div>
        <div>
          <h3 className="text-xl font-bold ">All Commets</h3>
          <div className="flex flex-col min-w-[40vw] w-fit gap-2">
            {blog.comments.map((e, i) => (
              <div key={i} className="bg-gray-50 w-full py-1 pl-4 rounded-lg">
                <h3 className="font-bold">{e.name}</h3>
                <p className="pl-4">{e.say}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormCommantair handleSubmit={handleSubmit} blogId={blog.id} />
    </div>
  );
}

export default CardBlog;
