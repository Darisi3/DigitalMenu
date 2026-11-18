// Menuja e Shqiponjës. Produktet dhe çmimet mund të ndryshohen në këtë skedar.
const menu = [
  { name: "Mëngjesi", items: [
    ["Supë me perime", "2.00 €"], ["Supë pule", "2.00 €"], ["Omlet natyral", "3.00 €"],
    ["Omlet përshutë", "3.00 €"], ["Omlet suxhuk", "3.00 €"], ["Omlet shpie", "3.50 €"],
    ["Llokuma (ajvar, djath, long)", "3.00 €"], ["Pogaqe (ajvar, djath, long)", "4.00 €"]
  ]},
  { name: "Sallatat", items: [
    ["Sallatë Shope", "2.50 €"], ["Sallatë Greke", "3.00 €"], ["Sallatë Mikse", "3.00 €"],
    ["Sallatë Cezar", "4.00 €"], ["Sallatë Pule", "3.50 €"], ["Sallatë Jeshile", "3.00 €"]
  ]},
  { name: "Sandwich", items: [
    ["Sandwich pule", "2.00 €", " Domate · Tranguj · Marullë · Pomfrit · Sos i Burgerav · Ketchup · Majonez "], 
    ["Sandwich përshutë", "2.00 €" , " Domate · Tranguj · Marullë · Pomfrit · Sos i Burgerav · Ketchup · Majonez "], 
    ["Sandwich tuna", "2.50 €", " Domate · Tranguj · Marullë · Pomfrit · Sos i Burgerav · Ketchup · Majonez "],
    ["Sandwich shpie", "2.50 €" , " Domate · Tranguj · Marullë · Pomfrit · Sos i Burgerav · Ketchup · Majonez ", 
    ["Sandwich në petë", "3.50 €", " Domate · Tranguj · Marullë · Pomfrit · Sos i Burgerav · Ketchup · Majonez "]
  ]},
  { name: "Gjellat", items: [
    ["Gullash", "3.50 €"], ["Pasul", "3.50 €"], ["Speca të mbushur", "3.50 €"],
    ["Oriz me kofshë pule", "3.50 €"], ["Rolladë pule me oriz (sos)", "4.00 €"]
  ]},
  { name: "Pasta", items: [
    ["Makarona Napoli", "3.00 €"], ["Makarona Bolonez", "3.00 €"], ["Makarona Arabiata", "3.00 €"],
    ["Makarona Tuna", "3.00 €"], ["Makarona Karbonara", "3.00 €"], ["Makarona Pesto", "3.00 €"],
    ["Spageti Napoli", "4.00 €"], ["Spageti Bolonez", "3.00 €"], ["Spageti Arabiata", "3.00 €"],
    ["Spageti Tuna", "3.00 €"], ["Spageti Karbonara", "3.00 €"], ["Spageti Pesto", "3.00 €"],
    ["Lazanje", "4.50 €"], ["Rizoto Pule", "4.50 €"]
  ]},
  { name: "Pizza", groups: [
    { subtitle: "Pica të mesme dhe të mëdha", items: [
      ["Pizza Margarita", "3.00 € / 4.00 €"], ["Pizza Përshut", "3.50 € / 4.50 €"],
      ["Pizza Suxhuk", "3.50 € / 4.50 €"], ["Pizza Tuna", "4.00 € / 5.00 €"],
      ["Pizza Shpie", "4.00 € / 4.50 €"], ["Pizza Vegjetariane", "3.50 € / 4.50 €"],
      ["Pizza Fungi", "3.50 € / 4.50 €"], ["Pizza Regina", "3.50 € / 4.50 €"],
      ["Pizza Kallxone", "3.00 € / 4.00 €"], ["Pizza Shqiponja", "4.50 € / 5.00 €" , " Suxhuk · Përshutë · Këpurdha · Vezë "]
    ]},
    { subtitle: "Pizza Familjare", items: [
      ["Shpie", "15.00 €"], ["Margarita", "14.00 €"], ["Tuna", "16.00 €"]
    ]}
  ]},
  { name: "Skara", items: [
    ["Pomfrit", "2.00 €"], ["Pomfrit me Djath", "2.50 €"] ,
    ["Hamburger me pomfrit", "2.50 €" ,
     ],
    ["Chickenburger me pomfrit", "2.50 €" , " Domate · Tranguj · Marullë · Pomfrit · Sos i Burgerav · Ketchup · Majonez "],
    ["Pleskavicë me sos", "3.50 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "], 
    ["Pleskavicë e Mbushur", "4.00 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "],
    ["Pleskavicë Shpie", "4.50 €", "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "], 
    ["Qebapa (7 copë)", "3.50 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "], 
    ["Qofte Djegës", "4.00 €", "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "],
    ["Qofte me Kajmakë", "5.00 €"], ["File Pule me sos", "3.50 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "], 
    ["Kombinim", "3.50 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "],
    ["Kombinim Shqiponja", "5.00 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "], 
    ["Virshlle", "3.50 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "], 
    ["Suxhuk Shpie", "3.50 €" , "Sallatë Lakër · Domate · Tranguj · Marullë · Pomfrit · Sos "],
    ["Ullinjë", "1.50 €"], ["Speca me Hudër", "1.50 €"], ["Këpurdha të Fërguara", "3.00 €"]
  ]},
  { name: "Mishnat", items: [
    ["Ramstek", "10.00 €" ," Perime · Patate · Sos Demiglas " ], ["Biftek", "15.00 €" ," Perime · Patate · Sos Demiglas "], ["Mish Viqi 1KG", "40.00 €" ," Perime · Patate · Sos Demiglas "],
    ["Muskuj Tavë", "8.00 €" ," Perime · Patate · Sos Demiglas "], ["Kotlet", "10.00 €" ," Perime · Patate · Sos Demiglas "], ["Mish Viqi Porcion", "13.00 €" ," Perime · Patate · Sos Demiglas "]
    ["Kombinim i Mishit (Pleskavice, File Pule , Pjekje Viqi)", "6.50 €" , "Perime · Patate · Sos Demiglas "]
  ]},
  { name: "Specialitete", items: [
    ["Specialitet për dy persona", "25.00 €", "Pogaqë · Sallatë Mixe · Speca me Kajmak · Pjekje Viçi (Ramstek, Muskuj)"],
    ["Specialitet për 4 persona", "40.00 €", "Pogaqë · Sallatë Mixe · Speca me Kajmak · Pjekje Viçi (Ramstek, Muskuj)"],
    ["Specialitet Tradicional për 2 persona", "12.00 €", "Pogaqë · Speca · Long · Djath · Ajvar · Këpurdha · Ullinjë"]
  ]},
  { name: "Pijet", groups: [
    { subtitle: "Uji", items: [
      ["Ujë natyral", "0.50 €"], ["Ujë mineral", "0.50 €"], ["Ujë natyral qelq", "0.70 €"], ["Ujë mineral qelq", "0.70 €"]
    ]},
    { subtitle: "Pije të gazuara", items: [
      ["Coca Cola", "1.20 €"], ["Fanta", "1.20 €"], ["Schweppes", "1.20 €"],
      ["Sprite", "1.20 €"], ["Ice Tea", "1.20 €"], ["Lacin", "0.70 €"], ["Redbull", "2.50 €"]
    ]},
    { subtitle: "Lëngjet", items: [
      ["Pjeshkë", "1.20 €"], ["Vishnje", "1.20 €"], ["Juice", "1.20 €"],
      ["Mollë", "1.20 €"], ["Dredhëz", "1.20 €"], ["ACE", "1.20 €"], ["Boronicë", "1.20 €"]
    ]},
    { subtitle: "Të ngrohta", items: [
      ["Expresso", "0.70 €"], ["Makiato e Madhe", "0.70 €"], ["Makiato e Vogël", "0.70 €"],
      ["Amerikane", "0.70 €"], ["Qaj", "0.50 €"], ["Nescafe", "0.70 €"]
    ]},
    { subtitle: "Verërat", items: [
      ["Verë e Kuqe (Aleksandria e Vogël)", "3.00 €"], ["Verë e Bardhë (Aleksandria e Vogël)", "3.00 €"]
    ]},
    { subtitle: "Pije Alkoolike", items: [
      ["Birra Peja", "1.50 €"], ["Birra Shkupi", "1.50 €"], ["Lasko", "1.50 €"], ["Heineken", "2.50 €"]
    ]}
  ]},
  { name: "Ëmbëlsirat", items: [
    ["Trileqe", "1.00 €"],
    ["Panna Cotta", "1.80 €", "", "assets/PannaCotta.jpg"],
    ["Cheesecake me fruta mali", "1.80 €", "", "assets/Chessecake.jpg"],
    ["Lotus Cheesecake", "1.80 €", "", "assets/LotusChessecake.jpg"]
  ]}
];

const welcomeView = document.getElementById("welcome-view");
const categoryView = document.getElementById("category-view");
const categoryGrid = document.getElementById("category-grid");
const categoryTitle = document.getElementById("active-category-title");
const categoryItems = document.getElementById("category-items");
const categoryHours = document.getElementById("category-hours");

function createMenuItem(item) {
  const row = document.createElement("article");
  row.className = "menu-item";

  // Fotografia opsionale e produktit (përdoret te ëmbëlsirat).
  if (item[3]) {
    const photo = document.createElement("img");
    photo.className = "item-photo";
    photo.src = item[3];
    photo.alt = item[0];
    photo.loading = "lazy";
    photo.onerror = () => { photo.hidden = true; };
    row.appendChild(photo);
  }

  const left = document.createElement("div");
  left.className = "item-details";
  const name = document.createElement("div");
  name.className = "item-name";
  name.textContent = item[0];
  left.appendChild(name);

  // Përbërësit shfaqen poshtë emrit kur plotësohet fusha e tretë.
  if (item[2]) {
    const note = document.createElement("div");
    note.className = "item-note";
    note.textContent = item[2];
    left.appendChild(note);
  }

  const price = document.createElement("div");
  price.className = "item-price";
  price.textContent = item[1];
  row.append(left, price);
  return row;
}

function openCategory(index) {
  const category = menu[index];
  categoryTitle.textContent = category.name;
  categoryItems.replaceChildren();
  const limitedHours = ["Mëngjesi", "Gjellat"].includes(category.name);
  categoryHours.hidden = !limitedHours;
  categoryHours.replaceChildren();
  if (limitedHours) {
    const strong = document.createElement("strong");
    strong.textContent = "⏰ Kjo kategori shërbehet deri në ora 14:00.";
    categoryHours.appendChild(strong);
  }

  const groups = category.groups || [{ subtitle: "", items: category.items }];
  groups.forEach(group => {
    const section = document.createElement("section");
    section.className = "menu-group";
    if (group.subtitle) {
      const heading = document.createElement("h2");
      heading.className = "group-title";
      heading.textContent = group.subtitle;
      section.appendChild(heading);
    }
    const list = document.createElement("div");
    list.className = "menu-list";
    group.items.forEach(item => list.appendChild(createMenuItem(item)));
    section.appendChild(list);
    categoryItems.appendChild(section);
  });

  welcomeView.hidden = true;
  categoryView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showWelcome() {
  categoryView.hidden = true;
  welcomeView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

menu.forEach((category, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-card";
  button.setAttribute("aria-label", `Hap kategorinë ${category.name}`);
  const text = document.createElement("span");
  const name = document.createElement("span");
  name.className = "category-name";
  name.textContent = category.name;
  text.append(name);
  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  button.append(text, arrow);
  button.addEventListener("click", () => openCategory(index));
  categoryGrid.appendChild(button);
});

document.getElementById("back-button").addEventListener("click", showWelcome);
document.getElementById("home-link").addEventListener("click", event => {
  event.preventDefault();
  showWelcome();
});

// Navigimi me rrëshqitje në telefon, pa ndikuar në lëvizjen vertikale të faqes.
let touchStartX = 0;
let touchStartY = 0;
let touchStartedInMain = false;
document.addEventListener("touchstart", event => {
  if (!event.changedTouches.length) return;
  const target = event.target;
  touchStartedInMain = !!(target && target.closest && target.closest(".shell"));
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", event => {
  if (!touchStartedInMain || !event.changedTouches.length) return;
  const dx = event.changedTouches[0].clientX - touchStartX;
  const dy = event.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) < 90 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
  if (!categoryView.hidden && dx > 0) {
    showWelcome();
  } else if (!welcomeView.hidden && dx < 0) {
    openCategory(0);
  }
  touchStartedInMain = false;
}, { passive: true });
