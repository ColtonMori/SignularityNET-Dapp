import React from "react";
import { storiesOf } from "@storybook/react";
import Key from "./";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

storiesOf("Key", module)
  .addParameters({ props: { propTables: [Key] } })
  .addDecorator(withLiveEditScope({ React, Key }))
  .addLiveSource("live source", `return <Key text="Key component of Code Snippet" />`);
