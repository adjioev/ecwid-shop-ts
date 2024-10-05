import type { Meta, StoryObj } from '@storybook/vue3';
import ProductSizeComponent from "@/components/Product/ProductSizeComponent.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Size Component',
    component: ProductSizeComponent,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        sizes: {
            control: "object",
            table: {
                category: "Props",
            },
        },
    },
    args: { },
} satisfies Meta<typeof ProductSizeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story =  {
    args: {
        sizes : [
            {name: "XXS", inStock: true},
            {name: "XS", inStock: true},
            {name: "S", inStock: true},
            {name: "M", inStock: true},
            {name: "L", inStock: true},
            {name: "XL", inStock: false},
        ]
    }
};

export const Empty: Story =  {
    args: {
        sizes : [ ]
    }
};

export const One: Story =  {
    args: {
        sizes : [
            {name: "S", inStock: true},
        ]
    }
};