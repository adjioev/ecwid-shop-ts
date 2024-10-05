import type { Meta, StoryObj } from '@storybook/vue3';
import ProductComponent from "@/components/Product/ProductComponent.vue";
import { products } from "../data/products.ts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Product',
  component: ProductComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    productData: {
      control: "object",
      table: {
        category: "Props",
      },
    },
  },
  args: { },
} satisfies Meta<typeof ProductComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */


export const Primary: Story =  {
  args: {
    productData: products[0]
  },
};
