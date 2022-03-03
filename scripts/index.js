const mongoose = require('mongoose');
const Post = require('../models/Post.model');
const User = require('../models/User.model');

const posts = [
  {
    body: '¿Por qué las puestas de sol en Marte son azules?. El polvo que hay en la atmósfera de Marte tiene unas finas partículas que permiten que la luz azul entre en la atmósfera de una forma más eficiente que los colores que poseen mayor longitud de onda.',
    level: 'Easy',
    theme: 'Science',
  },
];

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb+srv://BardoAlacran:Alacran95@cluster0.ao3oh.mongodb.net/curiositys-starship?retryWrites=true&w=majority  ')
  .then(async () => {
    //await User.deleteMany({});
    return await Post.deleteMany({});
  })
  // .then(() => {
  //   return User.create({
  //     username: 'superuser',
  //     email: 'info@ironhack.com',
  //     hashedPassword: '$2a$10$XVhEZiy9YHGuxbeoJjN18ekEfVfoZAioX3HenJOPESSuLyHk7zS4W',
  //   });
  // })
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
