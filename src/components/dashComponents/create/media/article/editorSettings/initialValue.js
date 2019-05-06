import { Value } from "slate";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "Enter Article Content Here."
              }
            ]
          }
        ]
      },
      {
        object: "block",
        type: "embed-video",
        data: {
          video: "https://www.youtube.com/embed/FaHEusBG20c"
        }
      }
    ]
  }
});

export default initialValue;
