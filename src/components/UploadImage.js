// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { useDropzone } from "react-dropzone";

// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16,
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden",
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%",
// };

// export default function UploadImage() {
//   const [files, setFiles] = useState([]);
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: {
//       "image/*": [],
//     },
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       );
//     },
//   });

//   const thumbs = files.map((file) => (
//     <div
//       style={{
//         display: "inline-flex",
//         borderRadius: 2,
//         border: "1px solid #eaeaea",
//         marginBottom: 8,
//         marginRight: 8,
//         width: 100,
//         height: 100,
//         padding: 4,
//         boxSizing: "border-box",
//       }}
//       key={file.name}
//     >
//       <div style={thumbInner}>
//         <Image
//           src={file.preview}
//           style={img}
//           alt="" // Provide alt text or an empty string if decorative
//           width={100} // Specify width and height explicitly for next/image
//           height={100}
//           onLoad={() => {
//             URL.revokeObjectURL(file.preview);
//           }}
//         />
//       </div>
//     </div>
//   ));

//   useEffect(() => {
//     // Revoke data URIs on component unmount to avoid memory leaks
//     return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
//   }, [files]);

//   return (
//     <section className="container">
//       <div
//         {...getRootProps({ className: "dropzone" })}
//         style={{
//           display: "inline-flex",
//           borderRadius: 2,
//           border: "1px solid #eaeaea",
//           marginBottom: 8,
//           marginRight: 8,
//           width: 100,
//           height: 100,
//           padding: 4,
//           boxSizing: "border-box",
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
//       </div>
//       <aside style={thumbsContainer}>{thumbs}</aside>
//     </section>
//   );
// }
