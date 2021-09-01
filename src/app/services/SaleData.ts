export class ProductCategoryData {
  ProductCategory_ID: any;
  ProductCategory_Name: string | undefined;
  ProductCategroy_Description: string | undefined;
}


//putting this on hold for now

// export class Product {
//     Product_ID: any;
//     ProductCategory_ID: any;
//     ProductType_ID: any;
//     ProductName: string | undefined;
//     QuantityOnHand: Number | undefined;
//     Barcode: string | undefined;

//     Flavour?: [
//         {
//             Flavour_ID: any;
//             Flavour_Name: string;
//             Product_ID: any;
//         }
//     ];

//     ProductSize?:
//     [{
//         _Product_Size_ID:any;
//         _Size_ID:any;
//         Product_ID:any;
//         Size: string;
//     }]
// }

//retrieves data using ProductSize
export class ProductSizeData {

  _Product_Size_ID: any;
  _Size_ID: any;
  Product_ID: any;
  Size: string | undefined;
  Price: any;
  QuantityOnHand: Number | undefined;
  Barcode: string | undefined;


  Product?:
      {
          Product_ID: any;
          ProductCategory_ID: any;
          ProductType_ID: any;
          ProductName: string | undefined;

      }

}

export class CartItemData
{
  Quantity: any;
  _Product_Size_ID: any;

  _Product_Size?:
  {
      ProductName: string | undefined;
      Price: any;
      Size: any;
      Measurement: string | undefined;
      QuantityOnHand: any;
  }
}
