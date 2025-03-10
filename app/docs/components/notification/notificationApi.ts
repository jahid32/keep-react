export const notificationApi = [
  {
    id: 1,
    propsName: "additionalContent",
    propsType: "ReactNode",
    propsDescription: "Additional content to include in the notification.",
    default: "Content",
  },
  {
    id: 2,
    propsName: "infoIcon",
    propsType: "ReactNode",
    propsDescription: "An icon to display as additional information.",
    default: "<Cookie/>",
  },
  {
    id: 3,
    propsName: "dismiss",
    propsType: "boolean",
    propsDescription: "Determines whether the notification can be dismissed.",
    default: "false",
  },
  {
    id: 4,
    propsName: "headerBannerSrc",
    propsType: "string",
    propsDescription: "Source URL for the header banner image.",
    default: "None",
  },
  {
    id: 5,
    propsName: "onDismiss",
    propsType: "boolean | (() => void)",
    propsDescription: "Function to call when the notification is dismissed.",
    default: "false",
  },
  {
    id: 6,
    propsName: "showNotification",
    propsType: "boolean",
    propsDescription: "Determines if a notification should be shown.",
    default: "false",
  },
  {
    id: 7,
    propsName: "position",
    propsType: ["top-left", "top-right", "bottom-left", "bottom-right"],
    propsDescription: "Sets the position of the notification.",
    default: "top-left",
  },
];
