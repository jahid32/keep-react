export const carouselDataApi = [
  {
    id: 1,
    propsName: "indicators",
    propsType: "boolean",
    propsDescription: "Whether to display indicators for carousel items.",
    default: "false",
  },
  {
    id: 2,
    propsName: "showControls",
    propsType: "boolean",
    propsDescription: "Whether to display navigation controls (Next/Previous).",
    default: "true",
  },
  {
    id: 3,
    propsName: "leftControl",
    propsType: "ReactNode",
    propsDescription:
      "Custom ReactNode to be used as the left navigation control.",
    default: "Icon",
  },
  {
    id: 4,
    propsName: "rightControl",
    propsType: "ReactNode",
    propsDescription:
      "Custom ReactNode to be used as the right navigation control.",
    default: "Icon",
  },
  {
    id: 5,
    propsName: "slide",
    propsType: "boolean",
    propsDescription: "Whether to enable automatic sliding of carousel items.",
    default: "false",
  },
  {
    id: 6,
    propsName: "slideInterval",
    propsType: "number",
    propsDescription:
      "Interval in milliseconds for automatic slide transitions.",
    default: "500",
  },
  {
    id: 7,
    propsName: "indicatorsType",
    propsType: ["dot", "ring", "bar", "square", "squareRing"],
    propsDescription: "Type of indicators to display.",
    default: "dot",
  },
  {
    id: 8,
    propsName: "indicatorsTypeColors",
    propsType: ["white", "slate"],
    propsDescription:
      "Color variant for the indicators based on the selected type.",
    default: "white",
  },
];
