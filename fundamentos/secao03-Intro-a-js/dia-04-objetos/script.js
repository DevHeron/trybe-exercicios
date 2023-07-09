//Parte 1

// const reader = {
//     name: 'Julia',
//     lastName: 'Pessoa',
//     age: 21,
//     favoriteBooks: [
//       {
//         title: 'O Senhor dos Anéis - a Sociedade do Anel',
//         author: 'J. R. R. Tolkien',
//         publisher: 'Martins Fontes',
//       },
//     ],
//   };

//   console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`);

//   reader.favoriteBooks[1] = {
//     title: 'Harry Potter e o Prisioneiro de Azkaban',
//     author: 'JK Rowling',
//     publisher: 'Rocco',
//   };

//   console.log(reader.favoriteBooks);

//   console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);

  //Parte 2: ----------------------------------------------------------------

//   const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       },
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (fullOrder) => {
//     // Adicione abaixo as informações necessárias.
//     const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
//     const costumerName = fullOrder.name;
//     const phoneNumber = fullOrder.phoneNumber;
//     const street = fullOrder.address.street;
//     const adressNumber = fullOrder.address.number;
//     const apartment = fullOrder.address.apartment;

//     return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${adressNumber}, AP: ${apartment}.`;

//   }
  
//   console.log(customerInfo(order));


  
//   const orderModifier = (fullOrder) => {
//     // Adicione abaixo as informações necessárias.
//     fullOrder.name = 'Luiz Silva';
//     fullOrder.payment.total = 50.00;
    
//     const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
//     return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total}.00.`;
    
//   }
  
//   console.log(orderModifier(order));


  //Parte 3: --------------------------------------------------------------------

//   const school = {
//     lessons: [
//       {
//         course: 'Python',
//         students: 20,
//         professor: 'Carlos Patrício',
//         shift: 'Manhã',
//       },
//       {
//         course: 'Kotlin',
//         students: 10,
//         professor: 'Gabriel Oliva',
//         shift: 'Noite',
//       },
//       {
//         course: 'JavaScript',
//         students: 738,
//         professor: 'Gustavo Caetano',
//         shift: 'Tarde',
//       },
//       {
//         course: 'MongoDB',
//         students: 50,
//         shift: 'Noite',
//       },
//     ]
//   };

  // 1.
//   const KeyValue = (object, arrayPosition) => {
//     return Object.values(object.lessons[arrayPosition]);
//   }
  
//   console.log("1) " + KeyValue(school, 3));

//   //2. 


// const studentsSum = _ => {
//     let sum = 0;

//     for(let index = 0; index < school.lessons.length; index += 1){
//         sum += school.lessons[index].students;
//     }
//     return sum;
// }

// console.log("2) " + studentsSum());

// //3.

// const keyVerif = (object, key) => {
//     for(let index = 0; index < object.lessons.length; index += 1){
//         if (object.lessons[index][key] === undefined){
//             return false;
//         }
//     }
// }

// console.log("3) " + keyVerif(school, 'professor'));

//4: 

// const changeKey = (obj, course, value) => {

//     let findCourse; //guarda aqui o nº do elemento da array lessons que contém o curso.

//     for(let index = 0; index < obj.lessons.length; index += 1){
//         let element = obj.lessons[index];
//         if(element.course === course){
//             findCourse = element;
//             break;
//         }
//     }
//     //Condição para exibir o resultado. Caso o findCourse seja indefined, significa que o curso não foi encontrado.
//     if (findCourse !== undefined){
//         findCourse.shift = value;
//         return findCourse;
//     } else {
//         return 'Curso não encontrado';
//     }
// }

// console.log(changeKey(school, 'Python', 'Noite'));

// Parte 4: ----------------------------------------------------

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  const FruitsInTheArr = (arr) => {

    const fruits = [];
    for(let index = 0; index < arr.length; index += 1){
        if(arr[index])
    }
  }
//preciso saber quais as frutas antes?

//O que preciso e o que não preciso? (anotar! e explicar o procedimento mais fácil...)








