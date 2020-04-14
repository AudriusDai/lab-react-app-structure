import React, { FC } from "react";
import { connect } from "react-redux";
import { selectSamples } from "../../redux/selectors";

type SampleTableProps = {
  samples?: Array<any>;
};

const SampleTable: FC<SampleTableProps> = ({ samples }) => {
  return (
    <div>
      <h3>Sample table.</h3>
      {samples &&
        samples.map((x: any) => (
          <div>
            {" "}
            {x.name} {x.description}{" "}
          </div>
        ))}
    </div>
  );
};

SampleTable.defaultProps = {
  samples: [],
};

function mapStateToProps(state: any) {
  return { samples: selectSamples(state) };
}

export default connect(mapStateToProps, null)(SampleTable);
