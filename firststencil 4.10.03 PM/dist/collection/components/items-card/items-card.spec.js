import { newSpecPage } from "@stencil/core/testing";
import { ItemsCard } from "./items-card";
// Sample data for testing
const sampleArrayData = [
    {
        id: '1',
        thumbnail: 'https://via.placeholder.com/45',
        label: 'Item 1',
        price: {
            currency: 'USD',
            amount: 12.5,
        },
        qty: 2,
    },
    {
        id: '2',
        thumbnail: 'https://via.placeholder.com/45',
        label: 'Item 2',
        price: {
            currency: 'USD',
            amount: 23.99,
        },
        qty: 1,
    },
];
describe('ey-items-card', () => {
    // This test verifies that the component renders correctly when arrayData is passed as an array of objects
    it('should render correctly with arrayData as an object', async () => {
        const page = await newSpecPage({
            components: [ItemsCard],
            html: `<ey-items-card></ey-items-card>`,
        });
        page.root.arrayData = sampleArrayData;
        await page.waitForChanges();
        expect(page.root).toMatchSnapshot();
    });
    // This test checks that the component renders correctly when arrayData is provided as a JSON string.
    it('should render correctly with arrayData as a string', async () => {
        const page = await newSpecPage({
            components: [ItemsCard],
            html: `<ey-items-card></ey-items-card>`,
        });
        page.root.arrayData = JSON.stringify(sampleArrayData);
        await page.waitForChanges();
        expect(page.root).toMatchSnapshot();
    });
    // This test ensures that the component correctly parses arrayData when it is provided as a JSON string.
    it('should parse arrayData correctly when passed as a string', async () => {
        const page = await newSpecPage({
            components: [ItemsCard],
            html: `<ey-items-card></ey-items-card>`,
        });
        page.root.arrayData = JSON.stringify(sampleArrayData);
        await page.waitForChanges();
        expect(page.rootInstance['_arrayData']).toEqual(sampleArrayData);
    });
    // This test verifies that the component handles invalid JSON strings gracefully by not crashing and instead setting _arrayData to an empty array.
    it('should handle invalid JSON string gracefully', async () => {
        const page = await newSpecPage({
            components: [ItemsCard],
            html: `<ey-items-card></ey-items-card>`,
        });
        page.root.arrayData = 'invalid JSON string';
        await page.waitForChanges();
        expect(page.rootInstance['_arrayData']).toEqual([]);
    });
    // This test ensures that the component handles arrayData being undefined gracefully by not crashing and instead setting _arrayData to an empty array.
    it('should handle undefined arrayData gracefully', async () => {
        const page = await newSpecPage({
            components: [ItemsCard],
            html: `<ey-items-card></ey-items-card>`,
        });
        page.root.arrayData = undefined;
        await page.waitForChanges();
        expect(page.rootInstance['_arrayData']).toEqual([]);
    });
});
//# sourceMappingURL=items-card.spec.js.map
