import Head from "next/head";
import PostLink from "../components/PostLink";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home | Nomoret Store</title>
        </Head>
        <h1>Movies:</h1>
        <ul>
          <li>
            <PostLink title={"somthing"} id={0} />
          </li>
          <li>
            <PostLink title={"somthing new"} id={1} />
          </li>
        </ul>
      </div>
    );
  }
}
// const Index = () => (
//   <div>
//     <Head>
//       <title>Home | Nomoret Store</title>
//     </Head>
//     <h1>Movies:</h1>
//     <ul>
//       <li>
//         <PostLink title={"somthing"} id={0} />
//       </li>
//       <li>
//         <PostLink title={"somthing new"} id={1} />
//       </li>
//     </ul>
//   </div>
// );

// export default Index;
