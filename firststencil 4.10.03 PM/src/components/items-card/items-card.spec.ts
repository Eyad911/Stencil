import { newSpecPage } from '@stencil/core/testing';
import { ItemsCard } from './items-card';
import { Item } from './item';

describe('ItemsCard', () => {
  it('should build', () => {
    expect(new ItemsCard()).toBeTruthy();
  });

  it('should render correctly with arrayData', async () => {
    const page = await newSpecPage({
      components: [ItemsCard],
      html: `<ey-items-card></ey-items-card>`,
    });

    let component = page.rootInstance as ItemsCard;
    component.arrayData = [
      {
        thumbnail: 'https://example.com/image.jpg',
        label: 'Test Item',
        price: { currency: 'USD', amount: 100 },
        qty: 1,
      },
    ] as Item[];

    component.arrayDataWatcher(component.arrayData);

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <ey-items-card>
        <div class="w-full px-[8px] bg-[#baf3e6] bg-opacity-10 border-[2px] border-[#BAF3E626] rounded-[6px]">
          <div class="py-[10px]">
            <div class="flex space-x-8">
              <div class="flex space-x-3">
                <img src="https://example.com/image.jpg" class="w-[45px] h-[45px] rounded-[22.5px]" alt="Test Item" />
                <div class="w-[225px]">
                  <p class="text-[#004d5a] font-normal text-xs/[16px] underline">Test Item</p>
                  <p class="mt-[4px] text-[#999999] opacity-90 text-[10px]/[16px] space-x-1">USD 100</p>
                </div>
              </div>
              <div class="flex justify-between text-[#333333] text-xs/[16px] font-bold w-full items-center p-2">
                <p>1</p>
                <p>USD 100.00</p>
              </div>
            </div>
          </div>
        </div>
      </ey-items-card>
    `);
  });
});