export const layout = [
  {
    id: "ImageName",
    label: "Image Name",
    type: "text",
    name: "imageName",
    width: "85%"
  },
  {
    id: "ImageDescription",
    label: "Image Description",
    type: "text",
    name: "imageDescription",
    width: "85%"
  },
  {
    id: "ImageAttribution",
    label: "Image Attribution",
    type: "text",
    name: "imageAttribution",
    width: "85%"
  },
  {
    id: "ImageAttributionLink",
    label: "Image Attribution Link",
    type: "text",
    name: "imageAttributionLink",
    width: "85%"
  },
  {
    id: "imageTags",
    name: "imageTags",
    label: "Image Tags",
    type: "tags",
    tagArray: "imageTags",
    width: "100%"
  }
];
export const selectLayout = [
  {
    id: "imageTypes",
    label: "Image Type",
    type: "select",
    name: "imageType",
    width: "40%",
    layout: "inline-block",
    values: [
      {
        name: "JPEG",
        type: "image/jpeg",
        desc: "Decent Quality"
      },
      {
        name: "PNG",
        type: "image/png",
        desc: "Best Quality"
      }
    ]
  },
  {
    id: "category",
    label: "Image Category",
    type: "select",
    name: "imageCategory",
    width: "40%",
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
