import Head from "next/head";
import withLayout from "../lib/withLayout";
import { withRouter } from "next/router";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomoret Store</title>
    </Head>
    <h1>{props.router.query.title}</h1>
    <p>lalalalalala</p>
  </div>
);

export default withLayout(withRouter(Post));
