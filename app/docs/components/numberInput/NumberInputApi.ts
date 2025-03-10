export const numberInputApiData = [
  {
    id: 1,
    propsName: "value",
    propsType: "number",
    propsDescription: "The current value of the NumberInput.",
    default: "100",
  },
  {
    id: 2,
    propsName: "sizing",
    propsType: ["sm", "md", "lg"],
    propsDescription: "Size of the NumberInput component.",
    default: "md",
  },
  {
    id: 3,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Indicates whether the NumberInput is disabled.",
    default: "false",
  },
  {
    id: 4,
    propsName: "helperText",
    propsType: "ReactNode",
    propsDescription: "Additional helper text to assist the user.",
    default: "null",
  },
  {
    id: 5,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription:
      "An optional icon to display within the NumberInput component.",
    default: "None",
  },
  {
    id: 6,
    propsName: "iconPosition",
    propsType: ["right", "left"],
    propsDescription: "Position of the icon within the NumberInput.",
    default: "None",
  },
  {
    id: 7,
    propsName: "setValue",
    propsType: "Function",
    propsDescription: "Function to update the value of the NumberInput.",
    default: "Function",
  },
];
