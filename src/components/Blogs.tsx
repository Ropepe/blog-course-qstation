import React from "react";

interface IProps {}

const Blogs: React.FC<IProps> = () => {
  return (
    <div className="bg-teal-500">
      <button className="bg-teal-500">Dio za blogove</button>
      <h1 className="text-sm text-gray-500">Hello world!</h1>
    </div>
  );
};

export default Blogs;
