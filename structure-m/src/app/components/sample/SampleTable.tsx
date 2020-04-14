import React, { FC } from "react";
import { connect } from "react-redux";

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
  return { samples: state.samples };
}

export default connect(mapStateToProps, null)(SampleTable);
