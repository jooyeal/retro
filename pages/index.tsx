import { GiphyFetch } from "@giphy/js-fetch-api";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Background from "../components/Background";

interface Props {
  gifs: any;
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
}

const gf = new GiphyFetch(process.env.GIPHY_API_KEY || "");
const fetchGifs = (offset: number) => {
  return gf.search("retro", { offset, limit: 3 });
};

const Home = ({ gifs, pagination }: Props) => {
  const [gifsState, setGifsState] = useState(gifs);
  const [page, setPage] = useState(1);

  const load = async () => {
    if (pagination.total_count > page * pagination.count) {
      const { data } = await fetchGifs(page);
      setGifsState([...gifsState, ...data]);
      setPage((prev) => prev + 5);
    }
  };

  return (
    <div>
      <Head>
        <title>RETRO</title>
        <meta name="description" content="retro design website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <div className="p-8">
        <InfiniteScroll pageStart={0} loadMore={load} hasMore={true}>
          <div className="flex flex-wrap justify-center gap-6">
            {gifs
              ? gifsState.map((gif: any, index: number) => (
                  <Image
                    key={index}
                    className="rounded-xl"
                    src={gif.images.preview_gif.url}
                    width={256}
                    height={256}
                  />
                ))
              : null}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, pagination } = await fetchGifs(5);
  return {
    props: {
      gifs: data,
      pagination,
    },
  };
};

export default Home;
