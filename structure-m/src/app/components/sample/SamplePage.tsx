import React, { FC } from "react";
import SampleTable from "./SampleTable";

interface IProps {}

const SamplePage: FC<IProps> = (props) => {
  return (
    <div className="bottom">
      <h1>{"Sample:"}</h1>
      <SampleTable></SampleTable>
    </div>
  );
};

SamplePage.defaultProps = {};

export default SamplePage;
