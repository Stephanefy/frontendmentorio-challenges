// import { useState, useEffect } from 'react';

// interface Props {
//     path: string;
// }


// const DynamicImage = ({ path } : Props) => {
//     const [image, setImage] = useState<string | undefined>(undefined)

//     useEffect(async () => {
//         let importedIcon = await import(path);
//         setImage(importedIcon.default);
//       }, []);

//   return (
//     <div>DynamicImage</div>
//   )
// }

// export default DynamicImage