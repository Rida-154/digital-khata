const customerOrder ={
    customerName: "Suresh",
    item: "Milk Powder",
    quantity: 2,
    pricePerUnit: 30
};

const totalBill=customerOrder.quantity * customerOrder.pricePerUnit;
console.log("Customer:"+customerOrder.customerName);
console.log("Order:"+customerOrder.item);
console.log("Total Amount:"+totalBill);
