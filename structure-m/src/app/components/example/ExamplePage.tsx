import React, { FC } from "react";
import ExampleTable from "./ExampleTable";

interface IProps {}

const ExamplePage: FC<IProps> = (props) => {
  return (
    <div className="bottom">
      <h1>{"Example:"}</h1>
      <ExampleTable></ExampleTable>
    </div>
  );
};

ExamplePage.defaultProps = {};

export default ExamplePage;
