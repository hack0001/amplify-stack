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
                text: ""
              }
            ]
          }
        ]
      }
    ]
  }
});

// const testValue = Value.fromJSON({
//   document: {
//     nodes: [
//       {
//         object: "block",
//         type: "paragraph",
//         nodes: [
//           {
//             object: "text",
//             leaves: [
//               {
//                 text: "Enter Article Content Here."
//               }
//             ]
//           }
//         ]
//       },
//       {
//         object: "block",
//         type: "embed",
//         data: {
//           embed: "https://www.youtube.com/embed/FaHEusBG20c"
//         }
//       },
//       {
//         object: "block",
//         type: "embed",
//         data: {
//           embed:
//             "https://twitter.com/Jacob_Rees_Mogg/status/1155109590146662400"
//         }
//       },
//       {
//         object: "block",
//         type: "embed",
//         data: {
//           embed: "https://www.instagram.com/p/B0bHGUplTxm/"
//         }
//       },
//       {
//         object: "block",
//         type: "embed",
//         data: {
//           embed:
//             "https://vimeo.com/332745358?fbclid=IwAR0sEDoBHF0wyobGhEmrdZwfD1J-cMlNs2zWlRjDbqnEa9Alt4dw0QTMVYw"
//         }
//       },
//       {
//         object: "block",
//         type: "embed",
//         data: {
//           embed:
//             "https://www.youtube.com/watch?v=f6Cswdm601A&list=LL7mQWUKf30IWjo53wetK6gQ&index=645"
//         }
//       },
//       {
//         object: "block",
//         type: "embed",
//         data: {
//           embed:
//             "https://www.facebook.com/bbcnews/posts/10156895968512217?__xts__%5B0%5D=68.ARDukCc4i8_Qb07JD3Cm3w8_Ghr2RPMXHdLcmwk3IAZ2rlPwvvxdhnh5pOkYeCZkCTRrnEMEQoDncV0pBE6ME-LfBkZHzYQcMwoNs077T8T4P5tCQdPee-1ynyDHqxCs1PJxAGlShfsZXltiYeA1uWU8AZ71T1wHw9ggmFxtB-QYytUfpN9AMXa_vgYGmUJ2Ju3xgArKZC7cy-KKHvKmTqqIQbSNHugYHI1AY5RdhDuRUL_aGZ0KRnxtSk86WLlSly0e04iNSSSlTCda5yqDlBEYQrv_25zNM6uPX2LE8yLHzIkK2VRiRk6zWs5_wZqVxkeM_h6FCDqIyq8nSXSq&__tn__=-R"
//         }
//       },
//       {
//         object: "block",
//         type: "embed",
//         data: {
//           embed: "https://open.spotify.com/embed/album/4c2WjXHuK2BbKapEeAX10R"
//         }
//       }
//     ]
//   }
// });

export { initialValue };
