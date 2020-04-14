import React, { FC } from "react";
import SampleTable from "./SampleTable";
import { addSample } from "../../redux/actions";
import { connect } from "react-redux";

interface IProps {
  addSample: (sample: any) => void;
}

const SamplePage: FC<IProps> = (props) => {
  const onButtonClick = () => {
    props.addSample({ name: "new sample", description: "new description" });
  };

  return (
    <div className="bottom">
      <h1>{"Sample:"}</h1>
      <SampleTable></SampleTable>
      <button onClick={onButtonClick}>Add sample</button>
    </div>
  );
};

SamplePage.defaultProps = {};

const mapDispatchToProps = {
  addSample,
};

export default connect(null, mapDispatchToProps)(SamplePage);
