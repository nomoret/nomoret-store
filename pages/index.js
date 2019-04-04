import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>Home | Nomoret Store</title>
    </Head>
    <h1>welcome to next js</h1>{" "}
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </div>
);

export default withLayout(Index);
