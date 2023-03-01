import { Button } from '@looma/core';
import { Footer, Header, Layout, Main, Sidebar } from '~/layout';

export default function Index() {
  return (
    <Layout>
      <Header>header</Header>
      <Sidebar>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </Sidebar>
      <Main>
        <h1>Welcome to Remix</h1>
        <Button variant="primary">Buttonn</Button>
        <div>content!</div>
      </Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Layout>
  );
}
