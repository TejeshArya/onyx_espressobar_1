import { useState, useMemo } from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Search, Info, SlidersHorizontal, Sparkles, Coffee as CoffeeIcon, Egg, X } from "lucide-react";
import foodMenuImg from "@/assets/images/onyx_food_menu.jpg";
import drinksMenuImg from "@/assets/images/onyx_drinks_menu.jpg";
import coffeeBagsImg from "@/assets/images/coffee_bags.jpg";
import coldJuiceImg from "@/assets/images/cold_juice.jpg";
import icedDrinksTrayImg from "@/assets/images/iced_drinks_tray.jpg";
import latteCupImg from "@/assets/images/latte_cup.jpg";
import burgerHandImg from "@/assets/images/burger_hand.jpg";
import freakShakeImg from "@/assets/images/freak_shake.jpg";

// Categorized types
interface MenuItem {
  name: string;
  description?: string;
  price: string | { reg: string; lrg: string } | { cup: string; mug: string; large: string };
  tags?: ("V" | "VE" | "GF" | "GFO")[];
  category: "Mains & Breakfast" | "Burgers & Sandwiches" | "Coffee & Teas" | "Iced & Cold Drinks" | "Snacks & Sides";
  image?: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  // --- ONYX BREAKFAST & SWEET ---
  {
    category: "Mains & Breakfast",
    name: "Kids Breakfast",
    description: "Bacon, egg & hash brown served on toasted sourdough.",
    price: "$12",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Breakfast Burrito",
    description: "Baby spinach, cheddar, hash brown, 2 eggs, slow-cooked pulled pork, aioli & BBQ sauce wrapped in a toasted tortilla. (Vegetarian: swap pork for avocado & relish).",
    price: "$18",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Onyx Brekky Burger",
    description: "Crispy bacon, hash brown, melted cheddar, a fried egg, tomato relish, and BBQ sauce, served on a toasted brioche bun. Add halloumi or avocado for $4.",
    price: "$18",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500&h=380&fit=crop&auto=format",
    badge: "Best Seller"
  },
  {
    category: "Mains & Breakfast",
    name: "Big Breakfast",
    description: "Two eggs your way, served with roasted tomatoes, garlic mushrooms, creamy avocado, crispy hash brown, wilted spinach, and relish on toasted sourdough. Choose from bacon, chorizo, or a lentil fritter.",
    price: "$28",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Eggs On Toast",
    description: "Two eggs your way (poached, scrambled, or fried) served with two slices of toasted sourdough. Add custom sides below.",
    price: "$16",
    tags: ["V", "GFO"],
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Avocado Toast",
    description: "Smashed avocado on toasted sourdough, topped with a poached egg, cherry tomatoes, crumbled feta, pumpkin and sunflower seeds, beetroot relish, and a sprinkle of sumac. Served with lemon.",
    price: "$22",
    tags: ["V", "GFO"],
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=380&fit=crop&auto=format",
    badge: "Crowd Favourite"
  },
  {
    category: "Mains & Breakfast",
    name: "Onyx Benedict",
    description: "Two poached eggs on sourdough toast, served with wilted spinach, hollandaise sauce, and your choice of garlic mushrooms, avocado, bacon, chorizo, or smoked salmon.",
    price: "$18",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Onyx Pork Benny",
    description: "Two poached eggs on 16-hour slow-cooked pulled pork, baby spinach, and hollandaise sauce, served on a buttery, toasted croissant.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=380&fit=crop&auto=format",
    badge: "House Specialty"
  },
  {
    category: "Mains & Breakfast",
    name: "Lentil & Vegetable Fritter",
    description: "House-made lentil and vegetable fritter served with mixed greens, beetroot hummus, roasted capsicum hummus, cherry tomatoes, relish, and your choice of avocado or a poached egg.",
    price: "$24",
    tags: ["V", "VE", "GF"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Acai Bowl",
    description: "Acai blended with banana, berries, and coconut milk. Topped with crunchy house granola, shredded coconut, chia seeds, and fresh seasonal fruit.",
    price: "$18",
    tags: ["V", "VE", "GFO"],
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Classic Veg Omelette",
    description: "Fluffy three-egg omelette filled with fresh spinach, diced tomato, sautéed mushrooms, and melted cheddar. Served with toasted sourdough.",
    price: "$22",
    tags: ["V", "GFO"],
    image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Meat Lover's Omelette",
    description: "Loaded with bacon, chorizo, cheddar cheese, and sweet caramelised onions. Served with toasted sourdough.",
    price: "$24",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Smoked Salmon Omelette",
    description: "Sophisticated omelette with smoked salmon, capers, fresh dill, and smooth cream cheese. Served with toasted sourdough.",
    price: "$24",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Nutella French Toast",
    description: "Brioche French toast filled with thick Nutella, topped with vanilla ice cream, whipped cream, maple syrup, seasonal berries, and dynamic berry coulis.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=380&fit=crop&auto=format",
    badge: "Sweet Indulgence"
  },
  {
    category: "Mains & Breakfast",
    name: "Biscoff Pancakes",
    description: "Stack of fluffy buttermilk pancakes topped with rich Biscoff spread, crushed Biscoff cookies, vanilla ice cream, whipped cream, maple syrup, and seasonal fresh fruits.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Mains & Breakfast",
    name: "Kids Pancake",
    description: "Two fluffy mini pancakes served with maple syrup, a scoop of vanilla ice cream, and seasonal fruits.",
    price: "$14",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=380&fit=crop&auto=format"
  },

  // --- BURGERS, TOASTIES & SANDWICHES ---
  {
    category: "Burgers & Sandwiches",
    name: "Onyx Beef Burger & Chips",
    description: "Premium Wagyu beef patty, crispy cos lettuce, fresh tomato, Swiss cheese, caramelised onion, gherkins, aioli, and mild dijon mustard in a toasted brioche bun. Served with golden chips.",
    price: "$23",
    image: burgerHandImg,
    badge: "Must Try"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Onyx Pulled Pork Burger & Chips",
    description: "Slow-cooked pulled pork, home slaw, melted Swiss cheese, smoky BBQ sauce, and garlic aioli in a soft toasted brioche bun. Served with golden chips.",
    price: "$23",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Peri Peri Chicken Burger & Chips",
    description: "Grilled peri peri chicken breast, fresh lettuce, tomato, house slaw, pickled onion, melted cheese, and peri peri aioli in a toasted brioche bun. Served with golden chips.",
    price: "$23",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "BLT",
    description: "Crispy bacon strips, fresh lettuce, sliced heirloom tomato, and aioli on toasted Turkish bread. Add avocado for $2.",
    price: "$18",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Falafel Sandwich",
    description: "Crispy falafel, roasted capsicum hummus, fresh lettuce, tomato, tasty cheddar cheese, pickled onion, and creamy tzatziki on toasted Turkish bread.",
    price: "$18",
    tags: ["V"],
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Peri Peri Chicken Sandwich",
    description: "Grilled peri peri chicken, fresh lettuce, tomato, crunchy slaw, pickled onion, tasty cheese, and zesty peri peri aioli on toasted Turkish bread.",
    price: "$19",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Steak Sandwich",
    description: "Grilled tender steak, caramelised onion, heirloom tomato, lettuce, Swiss cheese, aioli, and dijon mustard on toasted Turkish bread.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=380&fit=crop&auto=format",
    badge: "Premium"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Lamb Sandwich",
    description: "Grilled spiced lamb backstrap, roasted capsicum hummus, cos lettuce, sliced tomato, pickled onion, and house tzatziki on toasted Turkish bread.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Vegan Toastie",
    description: "Roasted butternut pumpkin, baby spinach, caramelised onion, vine tomatoes, roasted capsicum hummus, and house tomato relish pressed on sourdough.",
    price: "$18",
    tags: ["V", "VE", "GFO"],
    image: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Mushroom & Halloumi Toastie",
    description: "Garlic herb mushrooms, grilled halloumi slices, sun-dried tomatoes, baby spinach, roasted capsicum hummus, and tomato relish pressed on sourdough.",
    price: "$18",
    tags: ["V", "GFO"],
    image: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Smoked Leg Ham Toastie",
    description: "Double smoked leg ham, creamy avocado, house-made tomato relish, sharp cheddar, and garlic aioli pressed on thick-cut sourdough.",
    price: "$18",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Slow Cooked Pulled Pork Toastie",
    description: "16-hour slow-cooked pulled pork, home slaw, Swiss cheese, rich smoky BBQ sauce, and aioli pressed on sourdough toast.",
    price: "$18",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Traditional Reuben Toastie",
    description: "Thick corned beef, melted Swiss cheese, tangy dill pickles, classic sauerkraut, and secret Reuben dressing pressed between golden sourdough.",
    price: "$18",
    tags: ["GFO"],
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Onyx Bowl",
    description: "Crispy falafels, roasted pumpkin, pickled onion, shredded carrots, creamy avocado, grilled halloumi, a poached egg, green leaves, roasted capsicum hummus, and beetroot hummus with honey mustard dressing.",
    price: "$22",
    tags: ["V", "GFO"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=380&fit=crop&auto=format"
  },
  {
    category: "Burgers & Sandwiches",
    name: "Onyx Salad",
    description: "A fresh mix of mesclun greens, cherry tomatoes, Spanish onion, capsicum, cucumber, and creamy feta - all drizzled with a tangy honey mustard dressing. Choose your protein: Falafel, Grilled Chicken, Grilled Steak, or Grilled Lamb.",
    price: "$22",
    tags: ["V", "GFO"],
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&h=380&fit=crop&auto=format"
  },

  // --- COFFEE & TEAS ---
  {
    category: "Coffee & Teas",
    name: "White (Ona Aspen Blend)",
    description: "Flat white, cappuccino, latte. Beautiful sweet notes from Ona Aspen blend. Choose Cup, Mug, or Large.",
    price: { cup: "$4.50", mug: "$5.20", large: "$6.20" },
    image: latteCupImg
  },
  {
    category: "Coffee & Teas",
    name: "Piccolo",
    description: "A single shot of Aspen blend espresso topped with warm steamed milk in a small glass.",
    price: "$4.50"
  },
  {
    category: "Coffee & Teas",
    name: "Long Black (Ona Single Origin)",
    description: "Double shot of Ona single origin espresso poured over hot water. Ask about today's origins.",
    price: { cup: "$4.50", mug: "$5.20", large: "$6.20" },
    image: coffeeBagsImg
  },
  {
    category: "Coffee & Teas",
    name: "Espresso",
    description: "Rich and robust double shot of espresso with perfect crema.",
    price: "$4.00"
  },
  {
    category: "Coffee & Teas",
    name: "Macchiato",
    description: "Double shot of espresso stained with a velvety spoonful of steamed milk.",
    price: "$4.00"
  },
  {
    category: "Coffee & Teas",
    name: "Chai Latte",
    description: "Spiced aromatic black tea blend infused with honey and steamed milk.",
    price: { cup: "$4.50", mug: "$5.20", large: "$6.20" }
  },
  {
    category: "Coffee & Teas",
    name: "Mocha",
    description: "Smooth espresso combined with premium Dutch cocoa powder and steamed milk.",
    price: { cup: "$5.00", mug: "$5.70", large: "$6.70" }
  },
  {
    category: "Coffee & Teas",
    name: "Dirty Chai",
    description: "Spiced chai latte boosted with a double shot of Ona Aspen blend espresso.",
    price: { cup: "$5.00", mug: "$5.70", large: "$6.70" }
  },
  {
    category: "Coffee & Teas",
    name: "Hot Chocolate",
    description: "Creamy, rich premium chocolate dissolved in silky steamed milk. Highly comforting.",
    price: { cup: "$4.50", mug: "$5.20", large: "$6.20" }
  },
  {
    category: "Coffee & Teas",
    name: "Matcha Latte",
    description: "Ceremonial grade green tea matcha powder whisked with textured steamed milk.",
    price: { cup: "$5.00", mug: "$5.70", large: "$6.70" }
  },
  {
    category: "Coffee & Teas",
    name: "Nutella Latte or Hot Choc",
    description: "Creamy cocoa or espresso combined with a rich dollop of real melted Nutella.",
    price: { cup: "$5.50", mug: "$6.20", large: "$7.20" },
    badge: "Nutella Special"
  },
  {
    category: "Coffee & Teas",
    name: "Caramilk Latte or Hot Choc",
    description: "Sweet caramelized white chocolate melted into rich hot espresso or milk.",
    price: { cup: "$6.00", mug: "$8.00", large: "$10.00" }
  },
  {
    category: "Coffee & Teas",
    name: "Biscoff Latte or Hot Choc",
    description: "Delicious caramelized Biscoff cookie butter dissolved in rich espresso and velvety milk.",
    price: { cup: "$6.00", mug: "$8.00", large: "$10.00" },
    badge: "Unique Blend"
  },
  {
    category: "Coffee & Teas",
    name: "Loose Leaf Specialty Teas (Tea Collective)",
    description: "Specialty loose leaf tea. Choose from: English Breakfast, Wild Earl Grey, Peppermint, Blueberry Sencha, Gingerbread Chai, Happiness Tea, or Lemon-grass & Ginger.",
    price: "$6.00"
  },

  // --- ICED & COLD DRINKS ---
  {
    category: "Iced & Cold Drinks",
    name: "Classic Milkshake",
    description: "Thick, creamy shakes. Choose from Chocolate, Caramel, Vanilla, or Strawberry.",
    price: "$7.50"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Kids Milkshake",
    description: "A fun, smaller serving size of our classic creamy milkshakes.",
    price: "$4.50"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Babycino",
    description: "Warm frothed milk with chocolate dust and a soft marshmallow.",
    price: "$2.50"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Puppycino",
    description: "Dog-friendly frothed lactose-free milk topped with a delicious dog treat.",
    price: "$2.50"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Ferrero Freak Shake",
    description: "Legendary shake layered with Nutella, Ferrero Rocher, Bueno chunks, crushed hazelnuts, chocolate fudge, and rich vanilla ice cream.",
    price: "$14.50",
    badge: "Freak Shake",
    image: freakShakeImg
  },
  {
    category: "Iced & Cold Drinks",
    name: "Cold Pressed Juices",
    description: "100% natural. Choose: Ginger Zinger (Carrot, apple, ginger, lemon), Refresh Me (Watermelon, apple, mint), Immune Booster (Orange, apple, ginger, lemon), or Tropical Dreams (Watermelon, apple, mango, passionfruit).",
    price: "$11.00",
    badge: "Healthy Pressed",
    image: coldJuiceImg
  },
  {
    category: "Iced & Cold Drinks",
    name: "Large Juices (OJ / Apple)",
    description: "A large glass of cold-pressed Premium Orange Juice or Premium Apple Juice.",
    price: "$9.00"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Gourmet Smoothies",
    description: "Blended with milk/ice cream: Banana Buzz, Amazonian (Acai/Berry), Bahama (Mango/Pineapple), Helena (Strawberry/Peach), Power Breakfast (Banana/Dates/Apple).",
    price: "$11.00"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Honey Avocado Smoothie",
    description: "An ultra-premium wellness blend of rich avocado, banana, chia seeds, pure honey, protein powder, vanilla ice cream, and milk.",
    price: "$14.00"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Iced Latte",
    description: "Double shot of espresso poured over ice and chilled milk.",
    price: { reg: "$5.20", lrg: "$6.20" }
  },
  {
    category: "Iced & Cold Drinks",
    name: "Iced Mocha",
    description: "Rich chilled espresso, chocolate syrup, milk, and ice.",
    price: { reg: "$5.70", lrg: "$6.70" }
  },
  {
    category: "Iced & Cold Drinks",
    name: "Iced Long Black",
    description: "Double shot of single origin espresso poured over chilled water and ice.",
    price: { reg: "$5.20", lrg: "$6.20" }
  },
  {
    category: "Iced & Cold Drinks",
    name: "Cold Brew",
    description: "12-hour slow-steeped. Served black or with a dash of milk over ice.",
    price: { reg: "$5.20", lrg: "$6.20" }
  },
  {
    category: "Iced & Cold Drinks",
    name: "Gourmet Loaded Iced Drinks",
    description: "Served in a tall glass loaded with fresh double cream & a scoop of premium vanilla ice cream. Choose: Iced Mocha, Iced Chocolate, Iced Coffee, or Biscoff Iced Latte.",
    price: "$8.00"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Kids Iced Chocolate",
    description: "Chilled sweet chocolate milk served over ice cubes for kids.",
    price: "$5.00"
  },
  {
    category: "Iced & Cold Drinks",
    name: "Iced Latte Tasting Board",
    description: "A stunning gourmet flight of 4 mini iced lattes. Choose 4 from: Butterscotch, Milk Choc Mocha, White Choc Mocha, Biscoff, Chai, or Dirty Chai.",
    price: "$18.00",
    badge: "Unique Flight",
    image: icedDrinksTrayImg
  },
  {
    category: "Iced & Cold Drinks",
    name: "Bottled Drinks",
    description: "Cold bottles: Spring Water ($3.50), Purreza Sparkling Refill ($5.00), Impressed Juices ($5.50), Coke ($5.00).",
    price: "$5.00"
  },

  // --- SNACKS & SIDES ---
  {
    category: "Snacks & Sides",
    name: "Banana Bread",
    description: "Toasted banana bread slice served hot with butter.",
    price: "$9.00"
  },
  {
    category: "Snacks & Sides",
    name: "Gluten-free Banana Bread",
    description: "Toasted gluten-free banana bread slice served hot with butter.",
    price: "$9.00",
    tags: ["GF"]
  },
  {
    category: "Snacks & Sides",
    name: "Papa's Bagel with Cream Cheese",
    description: "Toasted premium bagel served with a generous spread of cream cheese.",
    price: "$10.00"
  },
  {
    category: "Snacks & Sides",
    name: "Cheese Toastie",
    description: "Simple melted cheddar cheese pressed between thick white bread toast.",
    price: "$9.00",
    tags: ["V"]
  },
  {
    category: "Snacks & Sides",
    name: "Ham & Cheese Toastie",
    description: "Smoked leg ham and melted cheddar cheese pressed on thick-cut toast.",
    price: "$10.00"
  },
  {
    category: "Snacks & Sides",
    name: "Ham, Cheese & Tomato Toastie",
    description: "Smoked leg ham, melted cheddar, and ripe tomato pressed on toast.",
    price: "$11.00"
  },
  {
    category: "Snacks & Sides",
    name: "Ham & Cheese Croissant",
    description: "Buttery flaky croissant baked with double smoked leg ham and melted cheddar.",
    price: "$10.00"
  },
  {
    category: "Snacks & Sides",
    name: "Avocado, Tomato & Cheese Croissant",
    description: "Flaky fresh croissant baked with avocado, tomato slices, and melted cheddar.",
    price: "$10.00",
    tags: ["V"]
  },
  {
    category: "Snacks & Sides",
    name: "2 Slice Fruit Toast",
    description: "Two slices of thick-cut toasted fruit loaf served with butter.",
    price: "$8.00"
  },
  {
    category: "Snacks & Sides",
    name: "2 Slice Toasted Sourdough",
    description: "Two slices of golden toasted sourdough bread served with butter and your choice of spread.",
    price: "$8.00"
  }
];

const categoryList = [
  "All",
  "Mains & Breakfast",
  "Burgers & Sandwiches",
  "Coffee & Teas",
  "Iced & Cold Drinks",
  "Snacks & Sides"
];

// Extras configuration
const coffeeExtras = [
  { name: "Flavour Syrups", details: "Hazelnut, Caramel, Vanilla", price: "+50c" },
  { name: "Extra Espresso Shot", details: "Boost your caffeine level", price: "+50c" },
  { name: "Decaf Blend", details: "Bypass caffeine smoothly", price: "+50c" },
  { name: "Alternative Milks", details: "Bonsoy, Alternative Dairy Co Oat, Milk Lab (Macadamia, Lactose Free, Almond)", price: "+$1.00" }
];

// Sides configuration
const breakfastSides = [
  { name: "Hash Brown", price: "$4" },
  { name: "Avocado", price: "$4" },
  { name: "Grilled Halloumi", price: "$4" },
  { name: "Garlic Mushrooms", price: "$4" },
  { name: "Cherry Tomatoes", price: "$4" },
  { name: "Wilted Spinach", price: "$4" },
  { name: "Creamy Feta", price: "$4" },
  { name: "Relish", price: "$4" },
  { name: "Side of Chips", price: "$6" },
  { name: "Fried / Poached Egg", price: "$4" },
  { name: "Crispy Bacon", price: "$5" },
  { name: "Smoked Ham", price: "$5" },
  { name: "Pulled Pork", price: "$5" },
  { name: "Spiced Chorizo", price: "$5" },
  { name: "Grilled Chicken", price: "$5" },
  { name: "Smoked Salmon", price: "$7" },
  { name: "Grilled Lamb", price: "$8" },
  { name: "Grilled Steak", price: "$8" }
];

export function MenuSection() {
  const [menuViewMode, setMenuViewMode] = useState<"photos" | "digital">("photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Mains & Breakfast");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDietary, setSelectedDietary] = useState<"ALL" | "V" | "VE" | "GF">("ALL");
  const [showCustomizers, setShowCustomizers] = useState(false);

  const menuPhotos = [
    { title: "Food Menu", src: foodMenuImg, alt: "Onyx Espresso Bar Food Menu Page" },
    { title: "Drinks Menu", src: drinksMenuImg, alt: "Onyx Espresso Bar Drinks and Coffee Menu Page" },
  ];

  // Filtered menu logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      // Search match
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      // Dietary match
      const matchesDietary =
        selectedDietary === "ALL" || (item.tags && item.tags.includes(selectedDietary));

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  return (
    <section
      id="menu"
      className="section-padding"
      style={{
        background: "#F7F2EC",
        paddingBottom: "5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "0.75rem",
            }}
          >
            Taste the Craftsmanship
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
              color: "#1A1512",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Onyx Espresso Bar Menu
          </h2>
          <div
            style={{
              width: "80px",
              height: "2.5px",
              background: "#C49A3C",
              margin: "0 auto 1.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.05rem",
              color: "#7A6A5A",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Explore our curated selection of specialty coffees, hand-crafted food, milkshakes, and pressed juices. All day breakfast & lunch prepared fresh.
          </p>
        </div>

        {/* View Mode Tab Switcher */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {[
            { id: "photos", label: "Menu Pages (Photos)" },
            { id: "digital", label: "Interactive Digital Menu" },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setMenuViewMode(mode.id as any)}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.8rem 2.2rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                border: "2px solid #1A1512",
                background: menuViewMode === mode.id ? "#1A1512" : "transparent",
                color: menuViewMode === mode.id ? "#F7F2EC" : "#1A1512",
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {menuViewMode === "photos" ? (
          <div>
            {/* Gallery Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
                maxWidth: "960px",
                margin: "0 auto 3.5rem",
              }}
            >
              {menuPhotos.map((photo, idx) => (
                <div
                  key={photo.title}
                  style={{
                    background: "#FFFFFF",
                    padding: "1.5rem",
                    border: "1px solid rgba(26,21,18,0.08)",
                    boxShadow: "0 4px 25px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onClick={() => setLightboxIndex(idx)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 35px rgba(26,21,18,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 25px rgba(0,0,0,0.02)";
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "480px",
                      overflow: "hidden",
                      border: "1px solid rgba(26,21,18,0.05)",
                      marginBottom: "1.5rem",
                      position: "relative",
                      background: "#F7F2EC",
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(26,21,18,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        opacity: 0,
                        transition: "opacity 0.25s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                    >
                      Click to Zoom & View
                    </div>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "#1A1512",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "0.85rem",
                      color: "#7A6A5A",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Expand to view full size
                  </p>
                  <a
                    href={photo.src}
                    download={photo.title.toLowerCase().replace(" ", "_") + ".png"}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C49A3C",
                      textDecoration: "none",
                      borderBottom: "2px solid #C49A3C",
                      paddingBottom: "3px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1A1512";
                      e.currentTarget.style.borderBottomColor = "#1A1512";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#C49A3C";
                      e.currentTarget.style.borderBottomColor = "#C49A3C";
                    }}
                  >
                    Download Page
                  </a>
                </div>
              ))}
            </div>

            {/* Complete Menu PDF download Callout */}
            <div
              style={{
                background: "#EDE5D8",
                padding: "2.5rem",
                textAlign: "center",
                borderLeft: "4px solid #C49A3C",
                maxWidth: "800px",
                margin: "0 auto 1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#1A1512",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  marginBottom: "1.25rem",
                }}
              >
                Need a copy on the go? Download our full menu as a print-ready PDF.
              </p>
              <button
                onClick={() => alert("The full print-ready PDF menu download will be set up when the final PDF file is provided. In the meantime, you can download each page photo directly.")}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  background: "#1A1512",
                  border: "none",
                  cursor: "pointer",
                  padding: "1rem 2.5rem",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#C49A3C")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1512")}
              >
                Download PDF Menu (Placeholder)
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Search and Filters Bar */}
            <div
              style={{
                background: "#FFFFFF",
                padding: "1.5rem",
                borderRadius: "0px",
                boxShadow: "0 4px 30px rgba(26,21,18,0.03)",
                border: "1.5px solid rgba(26,21,18,0.08)",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "2.5rem",
              }}
            >
              {/* Search box */}
              <div style={{ position: "relative", flex: "1 1 300px" }}>
                <Search
                  size={18}
                  color="rgba(26,21,18,0.4)"
                  style={{
                    position: "absolute",
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search dishes, coffee, ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.9rem",
                    color: "#1A1512",
                    background: "#F7F2EC",
                    border: "1.5px solid rgba(26,21,18,0.1)",
                    padding: "0.75rem 1rem 0.75rem 2.8rem",
                    width: "100%",
                    borderRadius: "0px",
                  }}
                />
              </div>

              {/* Dietary filters */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#7A6A5A",
                    textTransform: "uppercase",
                    marginRight: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <SlidersHorizontal size={14} /> Filters:
                </span>
                {[
                  { id: "ALL", label: "All Items" },
                  { id: "V", label: "Vegetarian (V)", color: "#C49A3C" },
                  { id: "VE", label: "Vegan (VE)", color: "#4F7942" },
                  { id: "GF", label: "Gluten-Free (GF)", color: "#B87333" },
                ].map((diet) => (
                  <button
                    key={diet.id}
                    onClick={() => setSelectedDietary(diet.id as any)}
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      padding: "0.45rem 1rem",
                      background: selectedDietary === diet.id ? "#1A1512" : "transparent",
                      border: `1.5px solid ${selectedDietary === diet.id ? "#1A1512" : "rgba(26,21,18,0.12)"}`,
                      color: selectedDietary === diet.id ? "#FFFFFF" : "#7A6A5A",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {diet.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category filters */}
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "3.5rem",
                borderBottom: "1.5px solid rgba(26,21,18,0.08)",
                paddingBottom: "1rem",
              }}
            >
              {categoryList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSearchQuery(""); // Clear search on tab switch
                  }}
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: activeCategory === cat ? "#C49A3C" : "#7A6A5A",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.8rem 1.6rem",
                    position: "relative",
                    transition: "all 0.25s ease",
                  }}
                >
                  {cat}
                  {activeCategory === cat && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-1.1rem",
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "#C49A3C",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Toggle Extras/Sides Panel CTA */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <button
                onClick={() => setShowCustomizers(!showCustomizers)}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  background: "#1A1512",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.8rem 1.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  boxShadow: "0 4px 15px rgba(26,21,18,0.15)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#C49A3C")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1512")}
              >
                <Sparkles size={14} />
                {showCustomizers ? "Hide Coffee Extras & Sides List" : "Show Coffee Extras & Sides List"}
              </button>
            </div>

            {/* Interactive Customization Trays (Optional Expandable panels) */}
            {showCustomizers && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "2rem",
                  marginBottom: "3.5rem",
                  animation: "fadeIn 0.4s ease",
                }}
              >
                {/* Extras Card */}
                <div
                  style={{
                    background: "#FFFFFF",
                    padding: "2rem",
                    border: "1.5px solid rgba(196,154,60,0.25)",
                    boxShadow: "0 6px 30px rgba(196,154,60,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                    <CoffeeIcon size={18} color="#C49A3C" />
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        color: "#1A1512",
                      }}
                    >
                      Coffee Add-ons & Extras
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "0.85rem",
                      color: "#7A6A5A",
                      marginBottom: "1.5rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Customize your hot beverage with our extensive selection of flavor syrups, alternative milks, and double shots.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    {coffeeExtras.map((extra) => (
                      <div
                        key={extra.name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingBottom: "0.6rem",
                          borderBottom: "1px dashed rgba(26,21,18,0.1)",
                        }}
                      >
                        <div>
                          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#1A1512", marginBottom: "0.1rem" }}>
                            {extra.name}
                          </p>
                          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", color: "#7A6A5A" }}>
                            {extra.details}
                          </p>
                        </div>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.9rem", color: "#C49A3C", background: "rgba(196,154,60,0.1)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>
                          {extra.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sides Tray Card */}
                <div
                  style={{
                    background: "#FFFFFF",
                    padding: "2rem",
                    border: "1.5px solid rgba(196,154,60,0.25)",
                    boxShadow: "0 6px 30px rgba(196,154,60,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                    <Egg size={18} color="#C49A3C" />
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        color: "#1A1512",
                      }}
                    >
                      Breakfast & Mains Sides Tray
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "0.85rem",
                      color: "#7A6A5A",
                      marginBottom: "1.5rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Accompany your Eggs on Toast, Benedict, or Omelette with premium protein, grilled cheese, or fresh avocado.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.6rem",
                      maxHeight: "260px",
                      overflowY: "auto",
                      paddingRight: "0.4rem",
                    }}
                  >
                    {breakfastSides.map((side) => (
                      <div
                        key={side.name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.4rem 0.6rem",
                          background: "#F7F2EC",
                          borderRadius: "0px",
                        }}
                      >
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#1A1512" }}>
                          {side.name}
                        </span>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem", fontWeight: 700, color: "#C49A3C" }}>
                          {side.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Empty state filter match */}
            {filteredItems.length === 0 && (
              <div style={{ textAlign: "center", padding: "4rem 1rem", background: "#FFFFFF", border: "1.5px dashed rgba(26,21,18,0.15)" }}>
                <Info size={40} color="#C49A3C" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", color: "#1A1512", marginBottom: "0.5rem" }}>
                  No Menu Items Match Your Search
                </h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", color: "#7A6A5A" }}>
                  Try adjusting your dietary filter, removing your search query, or switching categories!
                </p>
              </div>
            )}

            {/* Menu grid */}
            <div
              className="menu-grid"
              style={{
                gap: "2.25rem",
              }}
            >
              {filteredItems.map((item) => {
                const hasMultiplePrices = typeof item.price === "object";

                return (
                  <div
                    key={item.name}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(26,21,18,0.06)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 12px 35px rgba(26,21,18,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.02)";
                    }}
                  >
                    <div>
                      {/* Image (If available) */}
                      {item.image ? (
                        <div style={{ position: "relative", overflow: "hidden", height: "230px" }}>
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.4s ease",
                            }}
                          />
                          {/* Badge (e.g. Best Seller) */}
                          {item.badge && (
                            <span
                              style={{
                                position: "absolute",
                                top: "1rem",
                                left: "1rem",
                                background: "#C49A3C",
                                color: "#FFFFFF",
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: 800,
                                fontSize: "0.62rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                padding: "0.35rem 0.8rem",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                                zIndex: 1,
                              }}
                            >
                              {item.badge}
                            </span>
                          )}

                          {/* Dietary Badges on Image */}
                          {item.tags && item.tags.length > 0 && (
                            <div
                              style={{
                                position: "absolute",
                                bottom: "0.8rem",
                                right: "0.8rem",
                                display: "flex",
                                gap: "0.35rem",
                                zIndex: 1,
                              }}
                            >
                              {item.tags.map((tag) => {
                                let tagColor = "#C49A3C"; // V
                                if (tag === "VE") tagColor = "#4F7942";
                                else if (tag === "GF") tagColor = "#B87333";
                                else if (tag === "GFO") tagColor = "#5A5A5A";

                                return (
                                  <span
                                    key={tag}
                                    style={{
                                      background: tagColor,
                                      color: "#FFFFFF",
                                      fontFamily: "'Nunito', sans-serif",
                                      fontWeight: 800,
                                      fontSize: "0.62rem",
                                      padding: "0.2rem 0.5rem",
                                      borderRadius: "1px",
                                      boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                                    }}
                                  >
                                    {tag}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        // Header tag display for text-only items (e.g. coffee)
                        item.tags && item.tags.length > 0 && (
                          <div
                            style={{
                              padding: "1.25rem 1.5rem 0.2rem",
                              display: "flex",
                              gap: "0.35rem",
                            }}
                          >
                            {item.tags.map((tag) => {
                              let tagColor = "#C49A3C";
                              if (tag === "VE") tagColor = "#4F7942";
                              else if (tag === "GF") tagColor = "#B87333";
                              else if (tag === "GFO") tagColor = "#5A5A5A";

                              return (
                                <span
                                  key={tag}
                                  style={{
                                    background: "transparent",
                                    border: `1px solid ${tagColor}`,
                                    color: tagColor,
                                    fontFamily: "'Nunito', sans-serif",
                                    fontWeight: 800,
                                    fontSize: "0.58rem",
                                    padding: "0.15rem 0.45rem",
                                  }}
                                >
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        )
                      )}

                      {/* Text Details */}
                      <div style={{ padding: "1.5rem 1.5rem 1.25rem" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "0.75rem",
                            gap: "1.2rem",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Playfair Display', Georgia, serif",
                              fontWeight: 700,
                              fontSize: "1.18rem",
                              color: "#1A1512",
                              margin: 0,
                              lineHeight: 1.3,
                            }}
                          >
                            {item.name}
                          </h3>

                          {/* Price Render */}
                          {!hasMultiplePrices ? (
                            <span
                              style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontWeight: 700,
                                fontSize: "1.1rem",
                                color: "#C49A3C",
                                flexShrink: 0,
                              }}
                            >
                              {item.price as string}
                            </span>
                          ) : null}
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p
                            style={{
                              fontFamily: "'Nunito', sans-serif",
                              fontSize: "0.88rem",
                              lineHeight: 1.6,
                              color: "#7A6A5A",
                              margin: 0,
                            }}
                          >
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Multiple size pricing footer */}
                    {hasMultiplePrices && (
                      <div
                        style={{
                          background: "#FDFDFD",
                          borderTop: "1px dashed rgba(26,21,18,0.06)",
                          padding: "0.9rem 1.5rem",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        {/* Size options rendering */}
                        {item.price && "cup" in (item.price as any) ? (
                          <>
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "0.65rem", fontFamily: "'Nunito', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#7A6A5A", display: "block" }}>Cup</span>
                              <span style={{ fontSize: "0.92rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#C49A3C" }}>{(item.price as any).cup}</span>
                            </div>
                            <div style={{ width: "1px", height: "20px", background: "rgba(26,21,18,0.1)" }} />
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "0.65rem", fontFamily: "'Nunito', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#7A6A5A", display: "block" }}>Mug</span>
                              <span style={{ fontSize: "0.92rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#C49A3C" }}>{(item.price as any).mug}</span>
                            </div>
                            <div style={{ width: "1px", height: "20px", background: "rgba(26,21,18,0.1)" }} />
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "0.65rem", fontFamily: "'Nunito', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#7A6A5A", display: "block" }}>Large</span>
                              <span style={{ fontSize: "0.92rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#C49A3C" }}>{(item.price as any).large}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "0.65rem", fontFamily: "'Nunito', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#7A6A5A", display: "block" }}>Regular</span>
                              <span style={{ fontSize: "0.92rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#C49A3C" }}>{(item.price as any).reg}</span>
                            </div>
                            <div style={{ width: "1px", height: "20px", background: "rgba(26,21,18,0.1)" }} />
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "0.65rem", fontFamily: "'Nunito', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#7A6A5A", display: "block" }}>Large</span>
                              <span style={{ fontSize: "0.92rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#C49A3C" }}>{(item.price as any).lrg}</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Counter Info Callout */}
            <div
              style={{
                marginTop: "4.5rem",
                background: "#1A1512",
                padding: "2rem",
                textAlign: "center",
                borderLeft: "4px solid #C49A3C",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.4rem",
                  color: "#F7F2EC",
                  marginBottom: "0.6rem",
                  letterSpacing: "0.05em",
                }}
              >
                &gt;&gt; PLEASE ORDER AND PAY AT COUNTER &lt;&lt;
              </h3>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(247,242,236,0.65)",
                  letterSpacing: "0.05em",
                  margin: 0,
                }}
              >
                10% surcharge Sundays | 15% surcharge Public Holidays. Please inform our staff of any allergies when ordering.
              </p>
            </div>

            {/* Order online CTA */}
            <div
              style={{ textAlign: "center", marginTop: "4.5rem" }}
            >
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#7A6A5A",
                  fontSize: "0.98rem",
                  marginBottom: "1.25rem",
                }}
              >
                Short on time? Order online for pickup or delivery.
              </p>
              <a
                href="#order"
                style={{
                  display: "inline-block",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#1A1512",
                  background: "transparent",
                  border: "2px solid #1A1512",
                  cursor: "pointer",
                  padding: "1rem 2.5rem",
                  textDecoration: "none",
                  transition: "background 0.25s ease, color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1A1512";
                  e.currentTarget.style.color = "#F7F2EC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1A1512";
                }}
              >
                View Ordering Options
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(26,21,18,0.96)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#FFFFFF",
              zIndex: 1001,
            }}
          >
            <X size={32} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev === 0 ? menuPhotos.length - 1 : prev! - 1));
            }}
            style={{
              position: "absolute",
              left: "1.5rem",
              background: "rgba(255,255,255,0.06)",
              border: "none",
              cursor: "pointer",
              color: "#FFFFFF",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
          >
            &larr;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev === menuPhotos.length - 1 ? 0 : prev! + 1));
            }}
            style={{
              position: "absolute",
              right: "1.5rem",
              background: "rgba(255,255,255,0.06)",
              border: "none",
              cursor: "pointer",
              color: "#FFFFFF",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
          >
            &rarr;
          </button>

          {/* Image Display */}
          <div
            style={{
              maxWidth: "90%",
              maxHeight: "80vh",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={menuPhotos[lightboxIndex].src}
              alt={menuPhotos[lightboxIndex].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
                border: "2px solid rgba(255,255,255,0.1)",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.3rem",
                color: "#FFFFFF",
                marginTop: "1.5rem",
                textAlign: "center",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {menuPhotos[lightboxIndex].title} ({lightboxIndex + 1} / {menuPhotos.length})
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
