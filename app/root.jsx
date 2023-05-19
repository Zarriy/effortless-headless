import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import tailwind from './styles/tailwind-build.css';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import Layout from './components/layout';

export const links = () => {
  return [
    {rel: 'stylesheet', href: tailwind},
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export async function loader({context}) {
  const layout = await context.storefront.query(LAYOUT_QUERY, {
    variables: {
      handle: "header"
    }
  });
  return {layout};
}

export default function App() {
  const data = useLoaderData();
  console.log(data);
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout  > 
        <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout($handle: String!) {
    shop {
      name
      description
    }
    menu(handle: $handle){
      title
      items{
        id
        title
        url
      }
    }
  
  }
`;
