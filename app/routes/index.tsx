import { Button } from '@looma/core';
import { Card } from '~/components/Card';
import { Footer, Header, Layout, Main, Sidebar } from '~/layout';

export default function Index() {
  return (
    <Layout>
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
      <Header>
        <h1>Welcome to Remix</h1>
      </Header>
      <Main>
        <Button variant="primary">Buttonn</Button>
        <Card />
        <div>content!</div>
      </Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Layout>
  );
}
