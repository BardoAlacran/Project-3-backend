const mongoose = require('mongoose');
const Post = require('../models/Post.model');
const User = require('../models/User.model');

const posts = [
  {
    body: '¿Por qué las puestas de sol en Marte son azules?. El polvo que hay en la atmósfera de Marte tiene unas finas partículas que permiten que la luz azul entre en la atmósfera de una forma más eficiente que los colores que poseen mayor longitud de onda.',
    level: 'Easy',
    theme: 'Science',
  },
  {
    body: '¿Por qué las plantas en mi jardín no crecen como deberían?, Las plantas también tienen preferencias con respecto al  clima, la exposición al sol, o los nutrientes y el tipo de tierra en las que se sienten cómodas. Antes de nada, comprueba que tus plantas puedan crecer bien en tu terreno: posiblemente hay algunas características de este que no les ayuda en su desarrollo.',
    level: 'Easy',
    theme: 'Gardening',
  },
  {
    body: '¿Sabías que la banda sonora de Cowboy Beebop compuesta por Yokko Kanno se iba componiendo a memdida que el director de este inspiraba a la compositora, y viceversa? Efectivamente. Ella componía al ver las imágenes que él creaba inspirado en su música, en un búcle casi infinito. De ahí que la banda sonora sea tan original.',
    level: 'Godlike',
    theme: 'Anime',
  },
  {
    body: 'Esa puntita de metal o plástico que hay en los límites de los cordones se llama "herrete"',
    level: 'Godlike',
    theme: 'Curiosities',
  },
  {
    body: 'La teoría del "Gato de Schrödinger" nació de un intercambio de cartas entre Erwin Schrödinger y Albert Einstein, en un intento del primero por negar uno de los principios de la mecánica cuántica: las partículas pueden existir y no existir a la vez. Por desgracia para él, esa teoría acabó sentando las báses como uno de los principios fundamentales de la mecánica cuántica.',
    level: 'Godlike',
    theme: 'Science',
  },
];

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb+srv://BardoAlacran:Alacran95@cluster0.ao3oh.mongodb.net/curiositys-starship?retryWrites=true&w=majority  ')
  .then(async () => {
    return await Post.deleteMany({});
  })

  .then(() => {
    const postsUpdated = posts.map(post => ({ ...post, user: '621e7ce20a0ca30f8baffcb0' }));
    console.log(postsUpdated);
    return Post.insertMany(postsUpdated);
  })
  .then(posts => {
    console.log(`${posts.length} curiosidades insertadas con exito`);
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .then(() => {
    console.log('conection closed');
  });
