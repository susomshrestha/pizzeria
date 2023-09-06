import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu = [
    {
      title: 'pizza',
      items: [
        {
          name: 'Crispy Chicken',
          desc: 'Buttermilk dipped Chiken layered with a delightful combination of a smoky barbecue sauce, mozzarella cheese, sweet chili peppers, sweet corn and red onions',
          priceM: 23,
          priceL: 28,
          priceXL: 32,
        },
        {
          name: 'Meat And Cheese',
          desc: 'Buttermilk dipped Chiken layered with a delightful combination of a smoky barbecue sauce, mozzarella cheese, sweet chili peppers, sweet corn and red onions',
          priceM: 23,
          priceL: 28,
          priceXL: 32,
        },
        {
          name: 'BBQ Chicken',
          desc: 'Roasted Chicken layered with a delightful combination of a smoky barbecue sauce, mozzarella cheese red onions',
          priceM: 23,
          priceL: 28,
          priceXL: 32,
        },
      ],
    },
    {
      title: 'chicken',
      items: [
        {
          name: 'Chicken Strips',
          desc: 'Buttermilk dipped Chiken layered with a delightful combination of a smoky barbecue sauce, mozzarella cheese, sweet chili peppers, sweet corn and red onions',
          priceM: 15,
          priceL: 25,
        },
        {
          name: 'Chicken Wings',
          desc: 'Buttermilk dipped Chiken layered with a delightful combination of a smoky barbecue sauce, mozzarella cheese, sweet chili peppers, sweet corn and red onions',
          priceM: 16,
          priceL: 25,
        }
      ],
    },
  ];
}
