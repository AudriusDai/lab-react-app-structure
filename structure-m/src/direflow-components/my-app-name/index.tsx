import { DireflowComponent } from "direflow-component";
import MyApp from "../../app";

export default DireflowComponent.create({
  component: MyApp,
  configuration: {
    tagname: "my-app-name",
  },
  plugins: [
    {
      name: "font-loader",
      options: {
        google: {
          families: ["Advent Pro", "Noto Sans JP"],
        },
      },
    },
  ],
});
