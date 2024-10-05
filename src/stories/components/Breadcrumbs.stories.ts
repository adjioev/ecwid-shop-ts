import type { Meta, StoryObj } from '@storybook/vue3';
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Breadcrumbs',
    component: BreadcrumbsComponent,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        pages: {
            control: "object",
            table: {
                category: "Props",
            }
        },
    },
    args: { },
} satisfies Meta<typeof BreadcrumbsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */


export const Primary: Story =  {
    args:
        {
            pages: [
                { name: 'Home', href: '/', current: false },
                { name: 'Shop', href: '/shop', current: false },
                { name: 'Category', href: '/category', current: false },
                { name: 'Product', href: '/product', current: true },
            ],
        },
};
