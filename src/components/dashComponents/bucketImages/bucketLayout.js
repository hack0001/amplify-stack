export const layout = [
  {
    id: "ImageName",
    label: "Image Name",
    type: "text",
    name: "name",
    width: "85%",
    readOnly: false,
    layout: "inline-block"
  },
  {
    id: "ImageDescription",
    label: "Image Description",
    type: "text",
    name: "description",
    width: "85%",
    readOnly: false,
    layout: "inline-block"
  },
  {
    id: "Image Size",
    label: "Image Size",
    type: "text",
    name: "size",
    width: "35%",
    readOnly: true,
    layout: "inline-block"
  },
  {
    id: "Image Width",
    label: "Image Width",
    type: "text",
    name: "width",
    width: "35%",
    readOnly: true,
    layout: "inline-block"
  },
  {
    id: "Image Height",
    label: "Image Height",
    type: "text",
    name: "height",
    width: "35%",
    readOnly: true,
    layout: "inline-block"
  },
  {
    id: "imageTypes",
    name: "type",
    label: "Image Type",
    type: "text",
    width: "35%",
    readOnly: true,
    layout: "inline-block"
  },
  {
    id: "ImageAttribution",
    label: "Image Attribution",
    type: "text",
    name: "imageAttribution",
    width: "35%",
    readOnly: false,
    layout: "inline-block"
  },
  {
    id: "ImageAttributionLink",
    label: "Image Attribution Link",
    type: "text",
    name: "imageAttributionLink",
    width: "35%",
    readOnly: false,
    layout: "inline-block"
  },
  {
    id: "imageTags",
    name: "tags",
    label: "Image Tags",
    type: "tags",
    tagArray: "tags",
    width: "100%",
    readOnly: false,
    layout: "inline-block"
  }
];
export const selectLayout = [
  {
    id: "category",
    label: "Image Category",
    type: "select",
    name: "category",
    width: "35%",
    layout: "inline-block",
    values: [
      {
        name: "Sport",
        type: "Sport",
        desc: "Sport"
      },
      {
        name: "Movie",
        type: "Movie",
        desc: "Movie"
      },
      {
        name: "Entrepreneur",
        type: "Entrepreneur",
        desc: "Entrepreneur"
      }
    ]
  }
];
