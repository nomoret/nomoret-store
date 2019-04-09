import Head from "next/head";
import PostLink from "../components/PostLink";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>Home | Nomoret Store</title>
    </Head>
    <h1>Posts:</h1>
    <ul>
      <li>
        <PostLink title={"somthing"} />
      </li>
      <li>
        <PostLink title={"somthing new"} />
      </li>
    </ul>
  </div>
);

export default withLayout(Index);
