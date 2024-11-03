const cocktails = [
    {
      name: "Peppermint Martini",
      ingredients: "Vodka, Peppermint Schnapps, White Crème de Cacao",
      recipe: "Mix all ingredients with ice and shake. Strain into a glass and garnish with a candy cane.",
      calories: 200,
      img: "pep.jpg"
    },
    {
      name: "Cranberry Mule",
      ingredients: "Vodka, Cranberry Juice, Ginger Beer, Lime",
      recipe: "Combine vodka and cranberry juice over ice. Top with ginger beer and a lime wedge.",
      calories: 180,
      img: "mule.jpg"
    },
    {
      name: "Gingerbread Eggnog",
      ingredients: "Eggnog, Rum, Gingerbread Syrup",
      recipe: "Stir rum and gingerbread syrup into eggnog. Sprinkle nutmeg on top.",
      calories: 250,
      img: "egg.jpg"
    },
    {
      name: "Spiced Hot Chocolate",
      ingredients: "Hot Chocolate, Whiskey, Cinnamon",
      recipe: "Mix hot chocolate with whiskey, add cinnamon stick, and stir.",
      calories: 220,
      img: "choc.jpg"
    },
    {
      name: "Holiday Sangria",
      ingredients: "Red Wine, Orange Juice, Cranberries, Apples",
      recipe: "Combine wine, orange juice, cranberries, and apples in a pitcher. Chill before serving.",
      calories: 150,
      img: "sang.jpg"
    }
  ];
  
  const setUpCocktailCards = () => {
    const wrapper = $(".wrapper");
    cocktails.forEach((cocktail, index) => {
      const cardMarkup = `
        <div class="card" data-index="${index}">
          <img src="${cocktail.img}" alt="${cocktail.name}" />
          <p class="name">${cocktail.name}</p>
          <p class="info">${cocktail.ingredients}</p>
        </div>`;
      wrapper.append(cardMarkup);
    });
  };
  
  const handleHover = (event) => {
    const index = $(event.currentTarget).data("index");
    $(event.currentTarget).find(".info").text(cocktails[index].recipe);
  };
  
  const handleMouseOut = (event) => {
    const index = $(event.currentTarget).data("index");
    $(event.currentTarget).find(".info").text(cocktails[index].ingredients);
  };
  
  const handleClick = (event) => {
    const index = $(event.currentTarget).data("index");
    $(event.currentTarget).find(".info").text(`Calories: ${cocktails[index].calories}`);
  };
  
  $(document).ready(() => {
    setUpCocktailCards();
    $(".card")
      .on("mouseover", handleHover)
      .on("mouseout", handleMouseOut)
      .on("click", handleClick);
  });
  