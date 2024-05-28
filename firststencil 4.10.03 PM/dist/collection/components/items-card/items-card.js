import { h } from "@stencil/core";
export class ItemsCard {
    constructor() {
        this._arrayData = [];
        this.arrayData = undefined;
    }
    arrayDataWatcher(newValue) {
        if (typeof newValue === 'string') {
            try {
                this._arrayData = JSON.parse(newValue) || [];
            }
            catch (error) {
                // console.error('Invalid JSON string provided for arrayData', error);
                this._arrayData = [];
            }
        }
        else if (Array.isArray(newValue)) {
            this._arrayData = newValue;
        }
        else {
            this._arrayData = [];
        }
    }
    componentWillLoad() {
        this.arrayDataWatcher(this.arrayData);
    }
    render() {
        return (h("div", { key: 'e5578aa4b7527696afd2048d9859c38079d3e15e', class: "w-full px-[8px] bg-[#baf3e6] bg-opacity-10 border-[2px] border-[#BAF3E626] rounded-[6px]" }, this._arrayData.map((item, index) => (h("div", { key: index, class: "py-[10px]" }, h("div", { class: "flex space-x-8" }, h("div", { class: "flex space-x-3" }, h("img", { src: item.thumbnail, class: "w-[45px] h-[45px] rounded-[22.5px]", alt: item.label }), h("div", { class: "w-[225px]" }, h("p", { class: "text-[#004d5a] font-normal text-xs/[16px] underline" }, item.label), h("p", { class: "mt-[4px] text-[#999999] opacity-90 text-[10px]/[16px] space-x-1" }, item.price.currency, " ", item.price.amount))), h("div", { class: "flex justify-between text-[#333333] text-xs/[16px] font-bold w-full items-center p-2" }, h("p", null, item.qty.toString()), h("p", null, item.price.currency, " ", item.price.amount.toFixed(2)))), index !== this._arrayData.length - 1 && (h("div", { style: {
                borderTop: '2px solid rgba(186, 243, 230, 1)',
                marginTop: '20px',
            } })))))));
    }
    static get is() { return "ey-items-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["items-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["items-card.css"]
        };
    }
    static get properties() {
        return {
            "arrayData": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Item[] | string",
                    "resolved": "Item[] | string",
                    "references": {
                        "Item": {
                            "location": "import",
                            "path": "./item",
                            "id": "src/components/items-card/item.tsx::Item"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "array-data",
                "reflect": false
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "arrayData",
                "methodName": "arrayDataWatcher"
            }];
    }
}
//# sourceMappingURL=items-card.js.map
