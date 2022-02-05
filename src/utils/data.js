const partners = ["Alejandro", "Abel", "Juan"];

const categories = [
  {
    id: 0,
    name: "Café y Bebidas",
    display: false,
  },
  {
    id: 1,
    name: "Abarrotes",
    display: false,
  },
  {
    id: 2,
    name: "Salchichonería",
    display: false,
  },
  {
    id: 3,
    name: "Frutas y Verduras",
    display: false,
  },
  {
    id: 4,
    name: "Desechables",
    display: false,
  },
  {
    id: 5,
    name: "Pan y Galletas",
    display: false,
  },
  {
    id: 6,
    name: "Bebidas Tradicionales",
    display: false,
  },
  {
    id: 7,
    name: "Embotellados",
    display: false,
  },
  {
    id: 8,
    name: "Productos de Limpieza",
    display: false,
  },
  {
    id: 9,
    name: "Preparación de Alimentos",
    display: false,
  },
  {
    id: 10,
    name: "Actividades para Cafetería",
    display: false,
  },
];

const itemList = [
  {
    name: "Café Gourmet",
    key: 1,
    label: "Café Gourmet",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Café Descafeinado",
    key: 2,
    label: "Café Descafeinado",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Café de Especialidad",
    key: 3,
    label: "Café de Especialidad",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Bolsas de Café (para exhibición)",
    key: 4,
    label: "Bolsas de Café (para exhibición)",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Leche Entera",
    key: 5,
    label: "Leche Entera",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Leche Deslactosada",
    key: 6,
    label: "Leche Deslactosada",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Leche de Almendras",
    key: 7,
    label: "Leche de Almendras",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Leche de Soya",
    key: 8,
    label: "Leche de Soya",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Extracto de café de olla",
    key: 9,
    label: "Extracto de café de olla",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Chocolate Blanco",
    key: 10,
    label: "Chocolate Blanco",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Cajeta",
    key: 11,
    label: "Cajeta",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Extracto de Vainilla",
    key: 12,
    label: "Extracto de Vainilla",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Miel",
    key: 13,
    label: "Miel",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Taro",
    key: 14,
    label: "Taro",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Chai Clásico",
    key: 15,
    label: "Chai Clásico",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Chai Manzana-Canela",
    key: 16,
    label: "Chai Manzana-Canela",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Chai Frutos Rojos",
    key: 17,
    label: "Chai Frutos Rojos",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Matcha Natural",
    key: 18,
    label: "Matcha Natural",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Matcha Endulzado",
    key: 19,
    label: "Matcha Endulzado",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Blue Matcha",
    key: 20,
    label: "Blue Matcha",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Pulpa de Café",
    key: 21,
    label: "Pulpa de Café",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Cáscara de Cacao",
    key: 22,
    label: "Cáscara de Cacao",
    categoryId: 0,
    checked: false,
  },
  {
    name: "(Fríos) Concentrado de Mango",
    key: 23,
    label: "(Fríos) Concentrado de Mango",
    categoryId: 0,
    checked: false,
  },
  {
    name: "(Fríos) Concentrado de Durazno",
    key: 24,
    label: "(Fríos) Concentrado de Durazno",
    categoryId: 0,
    checked: false,
  },
  {
    name: "(Fríos) Concentrado de Toronja",
    key: 25,
    label: "(Fríos) Concentrado de Toronja",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Manzanilla-Lavanda",
    key: 26,
    label: "Manzanilla-Lavanda",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Cedrón-Romero",
    key: 27,
    label: "Cedrón-Romero",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Tres Mentas",
    key: 28,
    label: "Tres Mentas",
    categoryId: 0,
    checked: false,
  },
  {
    name: "Azúcar Blanca",
    key: 29,
    label: "Azúcar Blanca",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Azúcar Mascabado",
    key: 30,
    label: "Azúcar Mascabado",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Harina",
    key: 31,
    label: "Harina",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Mantequilla",
    key: 32,
    label: "Mantequilla",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Huevos",
    key: 33,
    label: "Huevos",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Pimienta",
    key: 34,
    label: "Pimienta",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Nuez Moscada",
    key: 35,
    label: "Nuez Moscada",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Sal",
    key: 36,
    label: "Sal",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Royal",
    key: 37,
    label: "Royal",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Bicarbonato de Sodio",
    key: 38,
    label: "Bicarbonato de Sodio",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Aceite de maíz",
    key: 39,
    label: "Aceite de maíz",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Clavo",
    key: 40,
    label: "Clavo",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Nueces",
    key: 41,
    label: "Nueces",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Arándanos",
    key: 42,
    label: "Arándanos",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Chocolate Hersheys",
    key: 43,
    label: "Chocolate Hersheys",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Aceite de Oliva",
    key: 44,
    label: "Aceite de Oliva",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Jitomates Deshidratados",
    key: 45,
    label: "Jitomates Deshidratados",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Vinagre de Arándanos",
    key: 46,
    label: "Vinagre de Arándanos",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Vino Tinto",
    key: 47,
    label: "Vino Tinto",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Crema",
    key: 48,
    label: "Crema",
    categoryId: 1,
    checked: false,
  },

  {
    name: "Piloncillo (Café de Olla)",
    key: 49,
    label: "Piloncillo (Café de Olla)",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Piloncillo (pinole)",
    key: 50,
    label: "Piloncillo (pinole)",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Canela",
    key: 51,
    label: "Canela",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Pimienta",
    key: 52,
    label: "Pimienta",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Chamoy",
    key: 53,
    label: "Chamoy",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Miguelito",
    key: 54,
    label: "Miguelito",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Pechuga de Pavo",
    key: 55,
    label: "Pechuga de Pavo",
    categoryId: 2,
    checked: false,
  },
  {
    name: "Queso Gouda",
    key: 56,
    label: "Queso Gouda",
    categoryId: 2,
    checked: false,
  },
  {
    name: "Tocino",
    key: 57,
    label: "Tocino",
    categoryId: 2,
    checked: false,
  },
  {
    name: "Mezcla 6 Quesos",
    key: 58,
    label: "Mezcla 6 Quesos",
    categoryId: 2,
    checked: false,
  },
  {
    name: "lechuga",
    key: 59,
    label: "Lechuga",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Jitomates Cherries",
    key: 60,
    label: "Jitomates Cherries",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Zanahoria",
    key: 61,
    label: "Zanahoria",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Pepino",
    key: 62,
    label: "Pepino",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Cebolla",
    key: 63,
    label: "Cebolla",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Cebollín",
    key: 64,
    label: "Cebollín",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Espinacas",
    key: 65,
    label: "Espinacas",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Poro",
    key: 66,
    label: "Poro",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Desinfectante de Frutas y Verduras",
    key: 67,
    label: "Desinfectante de Frutas y Verduras",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Vasos 8oz (calientes)",
    key: 68,
    label: "Vasos 8oz (calientes)",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Vasos 12oz (calientes)",
    key: 69,
    label: "Vasos 12oz (calientes)",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Tapas 8oz (calientes)",
    key: 70,
    label: "Tapas 8oz (calientes)",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Tapas 12oz (calientes)",
    key: 71,
    label: "Tapas 12oz (calientes)",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Vasos 12oz (frías)",
    key: 72,
    label: "Vasos 12oz (frías)",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Vasos 16oz (frías)",
    key: 73,
    label: "Vasos 16oz (frías)",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Domos Hamburgueseros",
    key: 74,
    label: "Domos Hamburgueseros",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Domos 7x7",
    key: 75,
    label: "Domos 7x7",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Servilletas",
    key: 76,
    label: "Servilletas",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Bolsas Papel Kraft (pedidos)",
    key: 77,
    label: "Bolsas Papel Kraft (pedidos)",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Baguettes",
    key: 78,
    label: "Baguettes",
    categoryId: 5,
    checked: false,
  },
  {
    name: "Galletas",
    key: 79,
    label: "Galletas",
    categoryId: 5,
    checked: false,
  },
  {
    name: "Tostar Cacao",
    key: 80,
    label: "Tostar Cacao",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Tascalate",
    key: 81,
    label: "Tascalate",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Pozol",
    key: 82,
    label: "Pozol",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Tejate",
    key: 83,
    label: "Tejate",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Chilate",
    key: 84,
    label: "Chilate",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Athool",
    key: 85,
    label: "Athool",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Atlaquetzalli",
    key: 86,
    label: "Atlaquetzalli",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Atole de Amaranto",
    key: 87,
    label: "Atole de Amaranto",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Atole Negro",
    key: 88,
    label: "Atole Negro",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Avenacao",
    key: 89,
    label: "Avenacao",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Esquiate",
    key: 90,
    label: "Esquiate",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Tanchucúa",
    key: 91,
    label: "Tanchucúa",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Bolsas de Cacao (etiqueta Azul)",
    key: 92,
    label: "Bolsas de Cacao (etiqueta Azul)",
    categoryId: 6,
    checked: false,
  },
  {
    name: "Bolsas de Bebidas Tradicionales (etiqueta rosa)",
    key: 93,
    label: "Bolsas de Bebidas Tradicionales (etiqueta rosa)",
    categoryId: 6,
    checked: false,
  },

  {
    name: "Delison Maracuyá",
    key: 94,
    label: "Delison Maracuyá",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Búho Soda Kola",
    key: 95,
    label: "Búho Soda Kola",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Búho Soda Mango-Maracuyá",
    key: 96,
    label: "Búho Soda Mango-Maracuyá",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Búho Soda Mandarina-Naranja",
    key: 97,
    label: "Búho Soda Mandarina-Naranja",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Búho Soda Limón-Menta",
    key: 98,
    label: "Búho Soda Limón-Menta",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Búho Soda Tamarindo-Chile",
    key: 99,
    label: "Búho Soda Tamarindo-Chile",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Búho Soda Guayaba-Cardamomo",
    key: 100,
    label: "Búho Soda Guayaba-Cardamomo",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Búho Soda Jamaica-Granada",
    key: 101,
    label: "Búho Soda Jamaica-Granada",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Agua Mineral",
    key: 102,
    label: "Agua Mineral",
    categoryId: 7,
    checked: false,
  },
  {
    name: "Limpiador Multiusos",
    key: 103,
    label: "Limpiador Multiusos",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Jabón para trastes (verde)",
    key: 104,
    label: "Jabón para trastes (verde)",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Jabón para manos",
    key: 105,
    label: "Jabón para manos",
    categoryId: 8,
    checked: false,
  },

  {
    name: "Desengrasante",
    key: 106,
    label: "Desengrasante",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Sanitas",
    key: 107,
    label: "Sanitas",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Cloro",
    key: 109,
    label: "Cloro",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Alcohol sanitizante",
    key: 110,
    label: "Alcohol sanitizante",
    categoryId: 8,
    checked: false,
  },
  {
    name: "🥣 *Quiche Espinacas*",
    key: 111,
    label: "Quiche Espinacas",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Quiche Pechuga de Pavo*",
    key: 112,
    label: "Quiche Pechuga de Pavo",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Pastel de Zanahoria*",
    key: 113,
    label: "Pastel de Zanahoria",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Pastel de Chocolate*",
    key: 114,
    label: "Pastel de Chocolate",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Panqué de Plátano*",
    key: 115,
    label: "Panqué de Plátano",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Tarta de manzanas con peras al vino tinto*",
    key: 116,
    label: "Tarta de manzanas con peras al vino tinto",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Cebollas caramelizadas*",
    key: 117,
    label: "Cebollas caramelizadas",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Pimientos a la mantequilla*",
    key: 118,
    label: "Pimientos a la mantequilla",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Aderezo de jitomates deshidratados*",
    key: 119,
    label: "Aderezo de jitomates deshidratados",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Desinfectar lechuga*",
    key: 120,
    label: "Desinfectar lechuga",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Zanahoria rallada*",
    key: 121,
    label: "Zanahoria rallada",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🥣 *Betún de Pastel de Zanahoria*",
    key: 122,
    label: "Betún de Pastel de Zanahoria",
    categoryId: 9,
    checked: false,
  },
  {
    name: "🪄 *Limpiar Baño (bote, excusado, lavabo)*",
    key: 123,
    label: "Limpiar Baño (bote, excusado, lavabo)",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar y ordernar vitrina*",
    key: 124,
    label: "Limpiar y ordernar vitrina",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar horno grande*",
    key: 125,
    label: "Limpiar horno grande",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar horno chico*",
    key: 126,
    label: "Limpiar horno chico",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar y ordenar bodega*",
    key: 127,
    label: "Limpiar y ordenar bodega",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar espacio debajo de barra*",
    key: 128,
    label: "Limpiar espacio debajo de barra",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar Estante*",
    key: 129,
    label: "Limpiar Estante",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar espacio de polvos*",
    key: 130,
    label: "Limpiar espacio de polvos",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar Barra de Café*",
    key: 131,
    label: "Limpiar Barra de Café",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar Toldo*",
    key: 132,
    label: "Limpiar Toldo",
    categoryId: 10,
    checked: false,
  },
  {
    name: "🪄 *Limpiar Máquina de Espresso (atrás, debajo y con cafiza)*",
    key: 133,
    label: "Limpiar Máquina de Espresso (atrás, debajo y con cafiza)",
    categoryId: 10,
    checked: false,
  },
  {
    name: "Queso Philadelfia",
    key: 134,
    label: "Queso Philadelfia",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Agua Epura",
    key: 135,
    label: "Agua Epura",
    categoryId: 1,
    checked: false,
  },
  {
    name: "Velas",
    key: 136,
    label: "Velas",
    categoryId: 1,
    checked: false,
  },
  {
    name: "🪄 *Limpiar Botes de Basura*",
    key: 137,
    label: "Limpiar Botes de Basura",
    categoryId: 10,
    checked: false,
  },
  {
    name: "Pimientos",
    key: 138,
    label: "Pimientos",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Plátanos",
    key: 139,
    label: "Plátanos",
    categoryId: 3,
    checked: false,
  },
  {
    name: "🪄 *Cambiar Pizarrón*",
    key: 140,
    label: "Cambiar Pizarrón",
    categoryId: 10,
    checked: false,
  },
  {
    name: "Guayabas",
    key: 141,
    label: "Guayabas",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Peras",
    key: 142,
    label: "Peras",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Manzanas",
    key: 143,
    label: "Manzanas",
    categoryId: 3,
    checked: false,
  },
  {
    name: "Papel Higiénico",
    key: 108,
    label: "Papel Higiénico",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Tenedores",
    key: 145,
    label: "Tenedores",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Fajillas",
    key: 146,
    label: "Fajillas",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Playo",
    key: 147,
    label: "Playo",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Bolsas para Basura (chicas)",
    key: 148,
    label: "Bolsas para Basura (chicas)",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Bolsas para Basura (grandes)",
    key: 149,
    label: "Bolsas para Basura (grandes)",
    categoryId: 8,
    checked: false,
  },
  {
    name: "Portavasos",
    key: 150,
    label: "Portavasos",
    categoryId: 4,
    checked: false,
  },
  {
    name: "Cuchillos",
    key: 145,
    label: "Cuchillos",
    categoryId: 4,
    checked: false,
  },
];

export { itemList, categories, partners };
