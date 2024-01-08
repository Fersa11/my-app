// Vegetable information 
const plants = [
    {
        id: 0,
        plantName: 'Tomato',
        sowingTime: 'Spring',
        germinationTemperature: '20-25°C',
        germinationTime: '7-14 days',
        harvestTime: 'Summer to Autumn',
        indoorsGermination: true,
        image: "https://www.gemuese.ch/media/h4wi1dfs/tomate_rispe_010919.png?width=720&height=720&format=webp&quality=80"
    },
    {
        id: 1,
        plantName: 'Carrot',
        sowingTime: 'Spring',
        germinationTemperature: '10-20°C',
        germinationTime: '14-21 days',
        harvestTime: 'Summer to Autumn',
        indoorsGermination: false,
        image: 'https://www.gemuese.ch/media/3bup13mn/karotte_bund_010819.png?width=720&height=720&format=webp&quality=80'
    },
    {
        id: 2,
        plantName: 'Spinach',
        sowingTime: 'Spring or Autumn',
        germinationTemperature: '5-20°C',
        germinationTime: '7-14 days',
        harvestTime: 'Spring or Autumn',
        indoorsGermination: false,
        image: 'https://www.gemuese.ch/media/ikwphpz4/spinat_010919.png?width=720&height=720&format=webp&quality=80'
    },
    {
        id: 3,
        plantName: 'Zucchini',
        sowingTime: 'Spring',
        germinationTemperature: '20-30°C',
        germinationTime: '7-14 days',
        harvestTime: 'Summer to Autumn',
        indoorsGermination: true,
        image: 'https://www.gemuese.ch/media/djijw4nr/zucchetti_010919.png?width=720&height=720&format=webp&quality=80'
    },
    {
        id: 4,
        plantName: 'Broccoli',
        sowingTime: 'Spring or Autumn',
        germinationTemperature: '10-20°C',
        germinationTime: '5-10 days',
        harvestTime: 'Spring or Autumn',
        indoorsGermination: true,
        image: 'https://www.gemuese.ch/media/a4jfo0w3/broccoli_020919.png?width=720&height=720&format=webp&quality=80'
    },
    {
        id: 5,
        plantName: 'Bell Pepper',
        sowingTime: 'Spring',
        germinationTemperature: '20-25°C',
        germinationTime: '14-21 days',
        harvestTime: 'Summer to Autumn',
        indoorsGermination: true,
        image: 'https://www.eatme.eu/media/ogyhp1wx/mini-paprika-productfoto2-jpg.png?anchor=center&mode=crop&width=720&height=720&rnd=132627911659230000'
    },
    {
        id: 6,
        plantName: 'Aubergine',
        sowingTime: 'Spring',
        germinationTemperature: '25-30°C',
        germinationTime: '7-14 days',
        harvestTime: 'Summer to Autumn',
        indoorsGermination: true,
        image: 'https://www.gemuese.ch/media/033dh51k/aubergine_010919.png?width=720&height=720&format=webp&quality=80'
    },
    {
        id: 7,
        plantName: 'Okra',
        sowingTime: 'Spring',
        germinationTemperature: '25-30°C',
        germinationTime: '10-14 days',
        harvestTime: 'Summer to Autumn',
        indoorsGermination: true,
        image: 'https://img.freepik.com/fotos-premium/schnitt-der-jungen-okraschoten-isoliert-auf-weissem-hintergrund_41158-21936.jpg?w=2000'
    },
    {
        id: 8,
        plantName: 'Cucumber',
        sowingTime: 'Spring',
        germinationTemperature: '20-30°C',
        germinationTime: '7-14 days',
        harvestTime: 'Summer to Autumn',
        indoorsGermination: true,
        image: 'https://www.gemuese.ch/media/vkikzrna/gurke_020919.png?width=720&height=720&format=webp&quality=80'
    },
    {
        id: 9,
        plantName: 'Lettuce',
        sowingTime: 'Spring or Autumn',
        germinationTemperature: '10-20°C',
        germinationTime: '7-14 days',
        harvestTime: 'Spring to Summer',
        indoorsGermination: false,
        image: 'https://www.gemuese.ch/media/eiifmkuu/salat_hydrokultur_010919.png?width=480&height=480&format=webp&quality=80'
    },
    {
        id: 10,
        plantName: 'Radish',
        sowingTime: 'Spring or Autumn',
        germinationTemperature: '5-20°C',
        germinationTime: '3-7 days',
        harvestTime: 'Spring or Autumn',
        indoorsGermination: false,
        image: 'https://www.gemuese.ch/media/2j2lf0yv/radieschen_020919.png?width=720&height=720&format=webp&quality=80'
    },
    // Add more vegetable varieties here
];

// Export the array for use in other files
//module.exports = vegetablesArray;
export default plants;
