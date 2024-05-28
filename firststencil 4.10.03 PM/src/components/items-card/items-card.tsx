import { Component, Prop, h, Watch } from '@stencil/core';
import { Item } from './item';

@Component({
  tag: 'ey-items-card',
  styleUrl: 'items-card.css',
  shadow: true,
})
export class ItemsCard {
  private _arrayData: Item[] = [];

  @Prop() arrayData: Item[] | string;

  @Watch('arrayData')
  arrayDataWatcher(newValue: Item[] | string) {
    if (typeof newValue === 'string') {
      try {
        this._arrayData = JSON.parse(newValue) || [];
      } catch (error) {
        // console.error('Invalid JSON string provided for arrayData', error);
        this._arrayData = [];
      }
    } else if (Array.isArray(newValue)) {
      this._arrayData = newValue;
    } else {
      this._arrayData = [];
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.arrayData);
  }

  render() {
    return (
      <div class="w-full px-[8px] bg-[#baf3e6] bg-opacity-10 border-[2px] border-[#BAF3E626] rounded-[6px]">
        {this._arrayData.map((item, index) => (
          <div key={index} class="py-[10px]">
            <div class="flex space-x-8">
              <div class="flex space-x-3">
                <img src={item.thumbnail} class="w-[45px] h-[45px] rounded-[22.5px]" alt={item.label} />
                <div class="w-[225px]">
                  <p class="text-[#004d5a] font-normal text-xs/[16px] underline">{item.label}</p>
                  <p class="mt-[4px] text-[#999999] opacity-90 text-[10px]/[16px] space-x-1">
                    {item.price.currency} {item.price.amount}
                  </p>
                </div>
              </div>
              <div class="flex justify-between text-[#333333] text-xs/[16px] font-bold w-full items-center p-2">
                <p>{item.qty.toString()}</p>
                <p>
                  {item.price.currency} {item.price.amount.toFixed(2)}
                </p>
              </div>
            </div>
            {index !== this._arrayData.length - 1 && (
              <div
                style={{
                  borderTop: '2px solid rgba(186, 243, 230, 1)',
                  marginTop: '20px',
                }}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}
