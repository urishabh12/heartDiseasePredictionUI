import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietchart',
  templateUrl: './dietchart.component.html',
  styleUrls: ['./dietchart.component.scss'],
})
export class DietchartComponent implements OnInit {
  constructor() {}

  dietPlan1: any[] = [
    {
      title: 'Whole Grains',
      summary:
        'Whole grains contain all the three nutrient-rich parts: germ, endosperm, and bran. These whole grains can be from brown rice, oats, barley, whole wheat, rye, buckwheat, and quinoa. They have a high content of fibre, which helps to reduce “bad” LDL cholesterol, which eventually decreases the risk of heart diseases.',
    },
    {
      title: 'Green Leafy Vegetables',
      summary:
        'Vegetables such as kale, spinach, and collard greens are full of minerals, vitamins, and antioxidants. These are excellent sources of vitamin K, which protects your arteries. They contain high amounts of dietary nitrates, which eventually reduce blood pressure, and decrease arterial stiffness, and they also improve cell function inside the blood vessels.',
    },
    {
      title: 'Berries',
      summary:
        'Some of the highly nutritious berries include strawberries, blackberries, blueberries, and raspberries. The reason doctors prescribe the consumption of berries is that they contain vital nutrients that promote optimum heart health. Berries are not only rich in antioxidants such as anthocyanins, but they also protect your heart against inflammation and oxidative stress, which reduces the chances of heart attacks.',
    },
    {
      title: 'Avocados',
      summary:
        'Avocados are excellent sources of heart-healthy monounsaturated fats. These good fats are linked to a reduction in cholesterol levels and reduce risks of heart disease. A study comprising 17,567 people revealed that those who consumed avocados had reduced the chances of any metabolic syndrome by half as compared to those who don’t consume them.',
    },
    {
      title: 'Fatty Fish & Fish Oil*',
      summary:
        'Fatty fish contain massive amounts of omega-3 fatty acids, which is a key ingredient that keeps your heart healthy. Some of the most popular fatty fish are mackerel, tuna, salmon, and sardines. Consuming salmon thrice a week significantly decreases diastolic blood pressure. Moreover, eating fish regularly leads to lower levels of cholesterol, systolic blood pressure, blood triglycerides, and fasting blood sugar.',
    },
    {
      title: 'NOT TO EAT',
      summary: 'Sugar, Salt, Fat, Bacon, Red Meat, Soda, Baked foods',
    },
  ];
  dietPlan2: any[] = [
    {
      title: 'Walnuts',
      summary:
        'Walnuts are huge sources of fibre and several micronutrients such as copper, magnesium, and manganese. Research showed that incorporating some servings of walnuts in your regular diet helps protect you against heart diseases. In fact, consuming walnuts helps reduce “bad” cholesterol by up to 16% and lowers diastolic blood pressure by 2–3 mm Hg. Walnuts also decrease inflammation and oxidative stress.',
    },
    {
      title: 'Avocados',
      summary:
        'Avocados are excellent sources of heart-healthy monounsaturated fats. These good fats are linked to a reduction in cholesterol levels and reduce risks of heart disease. A study comprising 17,567 people revealed that those who consumed avocados had reduced the chances of any metabolic syndrome by half as compared to those who don’t consume them.',
    },
    {
      title: 'Berries',
      summary:
        'Some of the highly nutritious berries include strawberries, blackberries, blueberries, and raspberries. The reason doctors prescribe the consumption of berries is that they contain vital nutrients that promote optimum heart health. Berries are not only rich in antioxidants such as anthocyanins, but they also protect your heart against inflammation and oxidative stress, which reduces the chances of heart attacks.',
    },
    {
      title: 'Whole Grains',
      summary:
        'Whole grains contain all the three nutrient-rich parts: germ, endosperm, and bran. These whole grains can be from brown rice, oats, barley, whole wheat, rye, buckwheat, and quinoa. They have a high content of fibre, which helps to reduce “bad” LDL cholesterol, which eventually decreases the risk of heart diseases.',
    },
    {
      title: 'Green Leafy Vegetables',
      summary:
        'Vegetables such as kale, spinach, and collard greens are full of minerals, vitamins, and antioxidants. These are excellent sources of vitamin K, which protects your arteries. They contain high amounts of dietary nitrates, which eventually reduce blood pressure, and decrease arterial stiffness, and they also improve cell function inside the blood vessels.',
    },
    {
      title: 'NOT TO EAT',
      summary: 'Sugar, Salt, Fat, Bacon, Red Meat, Soda, Baked foods',
    },
  ];
  dietPlan3: any[] = [
    {
      title: 'Breakfast',
      summary:
        ' A bowl (30 g) of any Indian traditional homemade breakfast such as upma, poha, idli, boiled moong, dosa, dhokla, khandvi, thepla, paratha, etc. Cook it with very little oil and supplement it with a glass of milk or curd, or any protein-rich food like egg whites in the form of a boiled egg or an omelet (max 2 egg whites).',
    },
    {
      title: 'Mid-morning',
      summary:
        'Have 100 g of any seasonal fruit. If you are a diabetic, then avoid or limit fruits such as bananas, mangoes, chickoos, grapes, and custard apples.',
    },
    {
      title: 'Lunch',
      summary:
        'It should comprise of 2 rotis (without oil/ghee) or 3 phulkas or 1 medium bowl of rice. It should also include a big plate of salad, 1 cup of vegetable curry, 1 medium bowl of curd and 1 medium bowl of dal. If you are non-vegetarian, dal can be replaced with chicken (curry, grilled or roasted but not fried) or fish such as mackerel (curry but not fried). If you have to follow a fluid-restricted diet, then eating curd is better than drinking buttermilk or chaas.',
    },
    {
      title: 'Evening',
      summary:
        'Drink a cup of green tea/coffee with a small bowl (50 g) of kurmura/bhel/chaat/khakra.',
    },
    {
      title: 'Dinner',
      summary:
        'Have 2 multigrain rotis or 2 jowar/bajra bhakris or a bowl of khichdi or kadi rice. A bowl of vegetable curry, a plate of salad, and a bowl of dal or curd.',
    },
    {
      title: 'Bedtime',
      summary:
        '1 cup of turmeric milk (haldi doodh) or turmeric latte, which is nothing but a glass of warm milk with a pinch of turmeric and dry ginger powder.',
    },
  ];
  dietPlan4: any[] = [
    {
      title: 'Morning (on an empty stomach)',
      summary: ' Have 5-6 almonds and 4-5 walnuts with a glass of warm water.',
    },
    {
      title: 'Breakfast',
      summary:
        ' A bowl (30 g) of any Indian traditional homemade breakfast such as upma, poha, idli, boiled moong, dosa, dhokla, khandvi, thepla, paratha, etc. Cook it with very little oil and supplement it with a glass of milk or curd, or any protein-rich food like egg whites in the form of a boiled egg or an omelet (max 2 egg whites).',
    },
    {
      title: 'Mid-morning',
      summary:
        'Have 100 g of any seasonal fruit. If you are a diabetic, then avoid or limit fruits such as bananas, mangoes, chickoos, grapes, and custard apples.',
    },
    {
      title: 'Lunch',
      summary:
        'It should comprise of 2 rotis (without oil/ghee) or 3 phulkas or 1 medium bowl of rice. It should also include a big plate of salad, 1 cup of vegetable curry, 1 medium bowl of curd and 1 medium bowl of dal. If you are non-vegetarian, dal can be replaced with chicken (curry, grilled or roasted but not fried) or fish such as mackerel (curry but not fried). If you have to follow a fluid-restricted diet, then eating curd is better than drinking buttermilk or chaas.',
    },
    {
      title: 'Evening',
      summary:
        'Drink a cup of green tea/coffee with a small bowl (50 g) of kurmura/bhel/chaat/khakra.',
    },
    {
      title: 'Dinner',
      summary:
        'Have 2 multigrain rotis or 2 jowar/bajra bhakris or a bowl of khichdi or kadi rice. A bowl of vegetable curry, a plate of salad, and a bowl of dal or curd.',
    },
    {
      title: 'Bedtime',
      summary:
        '1 cup of turmeric milk (haldi doodh) or turmeric latte, which is nothing but a glass of warm milk with a pinch of turmeric and dry ginger powder.',
    },
  ];
  dataSource: any[];
  displayedColumns: string[];

  ngOnInit(): void {
    this.displayedColumns = ['title', 'summary'];
    let ind = Math.floor(Math.random() * 10) % 4;
    if (ind == 0) {
      this.dataSource = this.dietPlan1;
    } else if (ind == 1) {
      this.dataSource = this.dietPlan2;
    } else if (ind == 2) {
      this.dataSource = this.dietPlan3;
    } else {
      this.dataSource = this.dietPlan4;
    }
  }
}
