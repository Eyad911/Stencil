# ey-items-card Component

The ey-items-card component is a Stencil web component designed to display a list of items in a card format. Each item includes a thumbnail image, label, price, and quantity. This component is flexible, allowing the input data to be provided either as an array of objects or a JSON string.

## Table of Contents

- Properties
- Watchers
- Lifecycle Methods
- Rendering
- Example Usage
- Item Interface
- Styling
- Additional Information

## Properties

### arrayData

- Type: Item[] | string
- **Description** : The data source for the component. It can be either an array of Item objects or a JSON string representing the array of Item objects.

## Watchers

### arrayDataWatcher

- **Description** : This watcher method is triggered whenever the arrayData property changes. It checks the type of the new value and, if it is a JSON string, parses it into an array of Item objects and assigns it to the private _arrayData property. If it is already an array of Item objects, it directly assigns it to _arrayData.

## Lifecycle Methods

### componentWillLoad

- **Description** : This lifecycle method is called just before the component is rendered. It ensures the arrayData is correctly parsed and assigned by calling the arrayDataWatcher method.

## Rendering

The render method generates the HTML structure for the component. Each item in the _arrayData array is displayed with its thumbnail, label, price, and quantity.

### HTML Structure

- **Container** : The outermost div has several CSS classes for styling, including padding, background color, and border.

- **Item** : Each item is wrapped in a div with padding. It includes:
 - **Thumbnail** : An (img) element displaying the item's thumbnail image.
 - **Details** :  A (div) containing the item's label and price.
 - **Quantity and Total Price** : A (div) displaying the item's quantity and total price (calculated as quantity multiplied by price).

## Styling

The component uses Tailwind CSS classes for styling, including spacing, colors, font styles, and more.

## Example Usage

```
 <ey-items-card
      array-data='[
{
  "id": "001",
  "label": "JBL QuietComfort 45 wireless bluetooth headphones",
  "thumbnail": "https://cdn.salla.sa/oRmZv/bi7pdht4SRGPLmziP5fDcuFyuDOwz4FypJ5svKxU.jpg",
  "qty": 1,
  "price": {        
    "currency": "SAR",
    "amount": 1500
  }      
},
{
  "id": "002",
  "label": "JBL Active Noise Cancelling Headphones",
  "thumbnail": "https://cdn.salla.sa/oRmZv/9wgo7gyYLL6WsYwugU1zZEn3nypaI93MDCPiPhI5.png",
  "qty": 1,
  "price": {        
    "currency": "SAR",
    "amount": 750
  }     
},
]'
    ></ey-items-card>

```

## Item Interface

```
export interface Item {
    id: string;
  label: string;
  price: {
    amount: number;
    currency: string;
  };
  qty: number;
  thumbnail: string;
    }
```

## Styling

To customize the styles, you can modify the items-card.css file or adjust the Tailwind CSS classes used in the render method.

## Additional Information

For more details on using Stencil components, refer to the [Stencil documentation](https://stenciljs.com/docs/introduction). This will provide you with comprehensive information on how to create and work with Stencil components effectively.





<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type               | Default     |
| ----------- | ------------ | ----------- | ------------------ | ----------- |
| `arrayData` | `array-data` |             | `Item[] \| string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
