export const searchBarApiData = [
  {
    id: 1,
    propsName: "placeholder",
    propsType: "string",
    propsDescription: "Placeholder text for the search input.",
    default: "search anything",
  },
  {
    id: 2,
    propsName: "color",
    propsType: ["gray", "info", "error", "warning", "success"],
    propsDescription:
      "Specifies the color variant of the search input component.",
    default: "gray",
  },
  {
    id: 3,
    propsName: "size",
    propsType: ["sm", "md", "lg"],
    propsDescription: "Sets the size of the search input component.",
    default: "lg",
  },
  {
    id: 4,
    propsName: "addon",
    propsType: "ReactNode",
    propsDescription:
      "Additional content or components added as a search input addon.",
    default: "ICON",
  },
  {
    id: 5,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription: "Icon displayed within the search input component.",
    default: "ICON",
  },
  {
    id: 6,
    propsName: "addonPosition",
    propsType: ["left", "right"],
    propsDescription: "Specifies the position of the search input addon.",
    default: "right",
  },
  {
    id: 7,
    propsName: "iconPosition",
    propsType: ["left", "right"],
    propsDescription:
      "Specifies the position of the icon within the search input.",
    default: "right",
  },
  {
    id: 8,
    propsName: "handleOnChange",
    propsType: "function",
    propsDescription: "Callback function when the search input value changes.",
    default: "(e) => void",
  },
  {
    id: 9,
    propsName: "children",
    propsType: "ReactNode",
    propsDescription:
      "Child components and content to be placed within the search input component.",
    default: "Search Result",
  },
  {
    id: 10,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Disables interactions with the search input component.",
    default: "false",
  },
  {
    id: 11,
    propsName: "bordered",
    propsType: "boolean",
    propsDescription: "Displays a border around the search input component.",
    default: "false",
  },
  {
    id: 12,
    propsName: "withBg",
    propsType: "boolean",
    propsDescription:
      "Applies a background style to the search input component.",
    default: "false",
  },
];
