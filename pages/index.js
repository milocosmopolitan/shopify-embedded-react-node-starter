import { Layout, Page, EmptyState } from '@shopify/polaris';

const Index = () => (
  <Page>
    <Layout>
      <EmptyState
        heading="Discount your products temporarily"
        action={{
          content: 'Select products',
          onAction: () => console.log('clicked'),
        }}
        image={img}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
    
  </Page>
);

export default Index;