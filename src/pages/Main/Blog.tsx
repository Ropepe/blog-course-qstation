import * as React from "react";
import Card from "../../components/Card/Card";

interface IBlogProps {
  infos: any;
}

const Blog: React.FunctionComponent<IBlogProps> = ({ infos }) => {
  return (
    <>
      <Card
        title={infos.title}
        description={infos.body}
        userId={infos.userId}
        id={infos.id}
      />
    </>
  );
};

export default Blog;
