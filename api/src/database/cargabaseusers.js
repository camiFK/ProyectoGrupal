
const { User } = require('../../src/database/postgres');

const fxuser = async function() {
    try {
        const juan=await User.create(
            {email:'nnxx@hotmail.com', 
            password: '123456789', 
            name: 'Juan', 
            last_name: 'Perez',
            country: 'Peru',
            province_state: 'Lima',
            rol: 'client' ,
            description: "Responsabilidad",
            avatar_image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            buyer_reputation: 3,  
            buyer_opinions:[{commenter:"Fernando Fernandez",comment:"Muy cumplido",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Carlos Perez",comment:"Bien",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Nicolas Garcia",comment:"No se pudo completar el trabajo por un problema mio",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
  
        ],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Fulano Perez",comment:"Que buen servicio",rating:5},{commenter:"Mengano Gomez",comment:"Trabajo decente, medio caro",rating:3}],
        })
        juan.createFavorite()
        const leo = await User.create(
            {email:'leonardo@gmail.com', 
            password: 'leo1234', 
            name: 'Leonardo ', 
            last_name: 'Aguirre',
            country: 'Mexico',
            province_state: 'Jalisco',
            rol: 'client' ,
            description: "Seller Prueba",
            avatar_image: "https://lh3.googleusercontent.com/a-/AOh14GgBHQmhGGJRY48XGosIktPoELevkD2Kvk_2Nm13JA=s96-c",
            buyer_reputation: 4,  
            buyer_opinions:[
            {commenter:"Jorge Fernandez",comment:"Actitud negativa y muy caro",rating:2,buyer_avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Alicia Sanchez",comment:"Buen trabajo",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Damian Juarez",comment:"Lo recomiendo muchisimo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
        ],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Jorge Juarez",comment:"Mal Servicio",rating:1},{commenter:"Jhonatan Perez",comment:"Muy puntual y responsable",rating:5}],
        }


        )

        const fernando=await User.create(
            {email:'fer@hotmail.com', 
            password: '123456789', 
            name: 'Fernando', 
            last_name: 'Fernandez',
            country: 'Argentina',
            province_state: 'Buenos Aires',
            rol: 'client' ,
            description: "Seller",
            avatar_image: "https://images.unsplash.com/photo-1595856619767-ab739fa7daae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            buyer_reputation: 4,  
            buyer_opinions:[
            {commenter:"Jorge Fernandez",comment:"Actitud negativa y muy caro",rating:2,buyer_avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Alicia Sanchez",comment:"Buen trabajo",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Damian Juarez",comment:"Lo recomiendo muchisimo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
        ],
        seller_reputation: 4,
        seller_opinions: [{ commenter: 'Jorge Juarez', comment: 'Mal Servicio', rating: 1 }, { commenter: 'Jhonatan Perez', comment: 'Muy puntual y responsable', rating: 5 }]
      });
    fernando.createFavorite();
    const damian = await User.create(
      {
        email: 'damian@hotmail.com',
        password: '123456',
        name: 'Damian',
        last_name: 'Dominguez',
        country: 'Uruguay',
        description: 'Mas de 20 Años en el rubro',
        avatar_image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        province_state: 'Montevideo',
        rol: 'client',
        buyer_reputation: 3,
        buyer_opinions: [{ commenter: 'Alicia Sanchez', comment: 'Que agradable sujeto', rating: 3, buyer_avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
          { commenter: 'Jorge Flores', comment: 'Lo recomiendo', rating: 5, buyer_avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }],
        seller_reputation: 3,
        seller_opinions: [{ commenter: 'Armando Paredes', comment: 'Se desempeño muy bien y termino antes de tiempo', rating: 5 }, { commenter: 'Juan Lopez', comment: 'Se tardo mucho en terminar', rating: 3 }]
      });
    damian.createFavorite();
    const lucas = await User.create(
      {
        email: 'lucas@hotmail.com',
        password: '123456',
        name: 'Lucas',
        last_name: 'Juarez',
        avatar_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        country: 'Colombia',
        description: 'Presupuesto sin compromiso',
        province_state: 'Bogota',
        rol: 'client',
        buyer_reputation: 3,
        buyer_opinions: [{ commenter: 'Alicia Sanchez', comment: 'Que agradable sujeto', rating: 3, buyer_avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
          { commenter: 'Jorge Fernandez', comment: 'Actitud negativa y muy caro', rating: 2, buyer_avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
          { commenter: 'Alicia Sanchez', comment: 'Buen trabajo', rating: 4, buyer_avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
          { commenter: 'Damian Juarez', comment: 'Lo recomiendo muchisimo', rating: 5, buyer_avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }
        ],
        seller_reputation: 4,
        seller_opinions: [{ commenter: 'Fulano Perez', comment: 'Cumplido y bien hecho', rating: 5 }, { commenter: 'Fernando Vazquez', comment: 'Me gusto su trabajo', rating: 4 }]
      });
    lucas.createFavorite();

    let a = await User.create({
      email: 'cangur@intercom.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'ALENA',
      last_name: 'ALEU ICART',
      country: 'España',
      province_state: 'Barcelona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2016/alena.jpg',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Mala atencion',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png'
        },
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'Mala atencion',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png'
        },
        {
          commenter: 'RUBEN BIDAULT CULLERÉS',
          comment: 'Recomendable 10%',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/ruben.png'
        }],
      seller_reputation: 4,
      seller_opinions: [
        {
          commenter: 'CATALINA RAYA GARCIA',
          comment: 'No cumplio con lo prometido',
          rating: 5
        },
        {
          commenter: 'CRISTOBAL AYALA FERRERAS',
          comment: 'Brinda buena atención',
          rating: 3
        },
        {
          commenter: 'ALMENDRA ANGUERA VILAFRANCA',
          comment: 'Precio adecuado',
          rating: 2
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'alien@intercom.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'ALMENDRA',
      last_name: 'ANGUERA VILAFRANCA',
      country: 'España',
      province_state: 'Valencia',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Excelente servicio y atención !!!,Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría. Muy agradecido con su servicio.',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/felipe.png'
        },
        {
          commenter: 'CRISTOBAL AYALA FERRERAS',
          comment: 'Siempre nos brindan la mejor atención y el mejor servicio. Muchas gracias por ser una empresa de excelencia.',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png'
        },
        {
          commenter: 'SOL BIOSCA FONTANET',
          comment: 'Brinda buena atención',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/sol.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Inpuntuales.',
          rating: 5
        },
        {
          commenter: 'GUIDO MORALES GESE',
          comment: 'Trabajo con ellos aproximadamente desde 2013, nunca tuve ningún problema. Su soporte siempre muy rápido y eficiente!',
          rating: 2
        },
        {
          commenter: 'RUBEN BIDAULT CULLERÉS',
          comment: 'No me gusto la actitud',
          rating: 1
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'amores@hotmail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'AMANDA',
      last_name: 'PASCUAL ALOY',
      country: 'España',
      province_state: 'Girona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/amanda.png',
      buyer_reputation: 4,
      buyer_opinions: [
        {
          commenter: 'SOL BIOSCA FONTANET',
          comment: 'Brinda buena atención',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/sol.png'
        },
        {
          commenter: 'ANTONIA VALLÉS GIRVENT',
          comment: 'No me gusto la actitud',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png'
        },
        {
          commenter: 'ALMENDRA ANGUERA VILAFRANCA',
          comment: 'Excelente servicio y atención !!!,Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría. Muy agradecido con su servicio.',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Siempre nos brindan la mejor atención y el mejor servicio. Muchas gracias por ser una empresa de excelencia.',
          rating: 2
        },
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Precio adecuado',
          rating: 2
        },
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'El servicios es bueno. Pero un poco caro',
          rating: 3
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'anabel@altecom.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'ANTONIA',
      last_name: 'VALLÉS GIRVENT',
      country: 'España',
      province_state: 'Tarragona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png',
      buyer_reputation: 2,
      buyer_opinions: [
        {
          commenter: 'SOL BIOSCA FONTANET',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/sol.png'
        },
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Despacha sus productos a tiempo',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png'
        },
        {
          commenter: 'DANIEL ANDREU CRUZ',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/daniel.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'ESTEFANIA AROCAS PASADAS',
          comment: 'Mala atencion',
          rating: 2
        },
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'No me gusto la actitud',
          rating: 4
        },
        {
          commenter: 'RUBEN BIDAULT CULLERÉS',
          comment: 'Excelente!!! super recomendable!.',
          rating: 2
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'antiga@minorisa.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'CATALINA',
      last_name: 'RAYA GARCIA',
      country: 'España',
      province_state: 'Barcelona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png',
      buyer_reputation: 4,
      buyer_opinions: [
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Todo bien',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg'
        },
        {
          commenter: 'PEDRO ZAMBUDIO FIGULS',
          comment: 'No volveria a contratarlos',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/pedro.png'
        },
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png'
        }],
      seller_reputation: 4,
      seller_opinions: [
        {
          commenter: 'DANIEL ANDREU CRUZ',
          comment: 'Barato',
          rating: 2
        },
        {
          commenter: 'ESTEFANIA AROCAS PASADAS',
          comment: 'Despacha sus productos a tiempo',
          rating: 5
        },
        {
          commenter: 'CRISTOBAL AYALA FERRERAS',
          comment: 'Excelente servicio y atención !!!,Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría. Muy agradecido con su servicio.',
          rating: 4
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'agata@hotmail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'CATALINA',
      last_name: 'VISO GILABERT',
      country: 'España',
      province_state: 'Barcelona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2022/catalina.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'No cumplio con lo prometido',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/felipe.png'
        },
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Excelente soporto en rapidez y solución!',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png'
        },
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'No cumplio con lo prometido',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg'
        }],
      seller_reputation: 2,
      seller_opinions: [
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 4
        },
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Barato',
          rating: 1
        },
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Son muy puntuales y respetuosos. Quedamos muy conformes con el trabajo realizado en esta oportunidad.',
          rating: 1
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'badia@hotmail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'CESAR',
      last_name: 'BADIA TORNÉ',
      country: 'España',
      province_state: 'Valencia',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Recomiendo sus servicios',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png'
        },
        {
          commenter: 'GUIDO MORALES GESE',
          comment: 'Excelente servicio y atención !!!,Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría. Muy agradecido con su servicio.',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2016/guido.jpg'
        },
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png'
        }],
      seller_reputation: 5,
      seller_opinions: [
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Excelente servicio y atención !!!,Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría. Muy agradecido con su servicio.',
          rating: 5
        },
        {
          commenter: 'SOL BIOSCA FONTANET',
          comment: 'Despacha sus productos a tiempo',
          rating: 3
        },
        {
          commenter: 'CRISTOBAL AYALA FERRERAS',
          comment: 'No volveria a contratarlos',
          rating: 5
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'tricia@gmail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'CRISTOBAL',
      last_name: 'AYALA FERRERAS',
      country: 'España',
      province_state: 'Zaragoza',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'CATALINA VISO GILABERT',
          comment: 'Excelente!!! super recomendable!.',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/catalina.png'
        },
        {
          commenter: 'CATALINA RAYA GARCIA',
          comment: 'Despacha sus productos a tiempo',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png'
        },
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'Excelente atención y profesionalismo, seriedad y oportunidad en las respuestas y apoyo tanto en soporte técnico como vía whatsapp.',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png'
        }],
      seller_reputation: 4,
      seller_opinions: [
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Barato',
          rating: 3
        },
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 5
        },
        {
          commenter: 'CATALINA RAYA GARCIA',
          comment: 'Volveria a contratarlo',
          rating: 4
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'ballador@hotmail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'DANIEL',
      last_name: 'ANDREU CRUZ',
      country: 'España',
      province_state: 'Tarragona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/daniel.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'CRISTOBAL AYALA FERRERAS',
          comment: 'Excelente servicio y atención !!!,Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría. Muy agradecido con su servicio.',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png'
        },
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Excelente!!! super recomendable!.',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png'
        },
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Son muy puntuales y respetuosos. Quedamos muy conformes con el trabajo realizado en esta oportunidad.',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Recomendable 10%',
          rating: 3
        },
        {
          commenter: 'CATALINA RAYA GARCIA',
          comment: 'Excelente servicio y atención !!!,Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría. Muy agradecido con su servicio.',
          rating: 3
        },
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'No me gusto la actitud',
          rating: 3
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'africa@altecom.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'ESTEFANIA',
      last_name: 'AROCAS PASADAS',
      country: 'España',
      province_state: 'Zaragoza',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2022/antonia.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Excelente servicio y trato.',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png'
        },
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'No volveria a contratarlos',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png'
        },
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Inpuntuales.',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/felipe.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'Barato',
          rating: 3
        },
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Mala atencion',
          rating: 2
        },
        {
          commenter: 'GUIDO MORALES GESE',
          comment: 'Excelente servicio y atención al cliente. 100% recomendable!»',
          rating: 2
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'albatros@wandoo.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'FELIPE',
      last_name: 'BAEZ TEJADO',
      country: 'España',
      province_state: 'Zaragoza',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2022/felipe.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'RUBEN BIDAULT CULLERÉS',
          comment: 'Inpuntuales.',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/ruben.png'
        },
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Excelente servicio y atención al cliente. 100% recomendable!»',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png'
        },
        {
          commenter: 'CRISTOBAL AYALA FERRERAS',
          comment: 'Poco serio y mala atención al cliente',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Mala atencion',
          rating: 3
        },
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Precio adecuado',
          rating: 2
        },
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Brinda buena atención',
          rating: 2
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'balladora@altecom.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'FERNANDA',
      last_name: 'BARALDÉS COMAS',
      country: 'España',
      province_state: 'Lleida',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Barato',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png'
        },
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Barato',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png'
        },
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Recomiendo sus servicios',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png'
        }],
      seller_reputation: 5,
      seller_opinions: [
        {
          commenter: 'CESAR BADIA TORNÉ',
          comment: 'Excelente atención y profesionalismo, seriedad y oportunidad en las respuestas y apoyo tanto en soporte técnico como vía whatsapp.',
          rating: 5
        },
        {
          commenter: 'SOL BIOSCA FONTANET',
          comment: 'Brinda buena atención',
          rating: 4
        },
        {
          commenter: 'VICTORIA BASTARDES SOTO',
          comment: 'Barato',
          rating: 4
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'pipila@anet.com.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'GUIDO',
      last_name: 'MORALES GESE',
      country: 'España',
      province_state: 'Tarragona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2016/guido.jpg',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'ANTONIA VALLÉS GIRVENT',
          comment: 'Despacha sus productos a tiempo',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png'
        },
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Siempre nos brindan la mejor atención y el mejor servicio.  Muchas gracias por ser una empresa de excelencia.',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/amanda.png'
        },
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Recomiendo sus servicios',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Excelente servicio y trato.',
          rating: 1
        },
        {
          commenter: 'RUBEN BIDAULT CULLERÉS',
          comment: 'Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo.   El servicio es excelente.',
          rating: 3
        },
        {
          commenter: 'CESAR BADIA TORNÉ',
          comment: 'Brinda buena atención',
          rating: 3
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'barbilla@hotmail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'KUYEN',
      last_name: 'BERENGUERAS CULLERÉS',
      country: 'España',
      province_state: 'Valencia',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Excelente servicio y atención al cliente. 100% recomendable!»',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg'
        },
        {
          commenter: 'ALMENDRA ANGUERA VILAFRANCA',
          comment: 'Caro',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png'
        },
        {
          commenter: 'DANIEL ANDREU CRUZ',
          comment: 'Excelente servicio y atención al cliente. 100% recomendable!»',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/daniel.png'
        }],
      seller_reputation: 4,
      seller_opinions: [
        {
          commenter: 'CATALINA VISO GILABERT',
          comment: 'No cumplio con lo prometido',
          rating: 5
        },
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Excelente servicio y atención !!!  Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría.            Muy agradecido con su servicio.',
          rating: 1
        },
        {
          commenter: 'ANTONIA VALLÉS GIRVENT',
          comment: 'Volveria a contratarlo',
          rating: 4
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'besugo@minorisa.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'NICOLAS',
      last_name: 'LÓPEZ DE PABLO GARCIA UCEDA',
      country: 'España',
      province_state: 'Zaragoza',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'CRISTOBAL AYALA FERRERAS',
          comment: 'Buena eleccion',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png'
        },
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Recomiendo sus servicios',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png'
        },
        {
          commenter: 'ESTEFANIA AROCAS PASADAS',
          comment: 'Mala atencion',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/antonia.png'
        }],
      seller_reputation: 2,
      seller_opinions: [
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Despacha sus productos a tiempo',
          rating: 3
        },
        {
          commenter: 'GUIDO MORALES GESE',
          comment: 'Recomendable 10%',
          rating: 2
        },
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 1
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'bogart@terra.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'PALOMA',
      last_name: 'ARNAU MORENO',
      country: 'España',
      province_state: 'Girona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png',
      buyer_reputation: 2,
      buyer_opinions: [
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Excelente servicio y atención al cliente. 100% recomendable!',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/amanda.png'
        },
        {
          commenter: 'CATALINA RAYA GARCIA',
          comment: 'El servicios es bueno. Pero un poco caro',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png'
        },
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Volveria a contratarlo',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png'
        }],
      seller_reputation: 4,
      seller_opinions: [
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'El servicios es bueno. Pero un poco caro',
          rating: 3
        },
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Excelente servicio y atención !!!   Lo recomiendo ampliamente, me resolvió todas mis dudas además de soporte técnico y asesoría.        Muy agradecido con su servicio.',
          rating: 5
        },
        {
          commenter: 'ANTONIA VALLÉS GIRVENT',
          comment: 'Volveria a contratarlo',
          rating: 2
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'bond@terra.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'PAULETTE',
      last_name: 'RAYA GAVILAN',
      country: 'España',
      province_state: 'Lleida',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'RUBEN BIDAULT CULLERÉS',
          comment: 'No volveria a contratarlos',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/ruben.png'
        },
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Precio adecuado',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png'
        },
        {
          commenter: 'PEDRO ZAMBUDIO FIGULS',
          comment: 'Caro',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/pedro.png'
        }],
      seller_reputation: 4,
      seller_opinions: [
        {
          commenter: 'PEDRO ZAMBUDIO FIGULS',
          comment: 'Todo bien',
          rating: 3
        },
        {
          commenter: 'CESAR BADIA TORNÉ',
          comment: 'Excelente atención y profesionalismo, seriedad y oportunidad en las respuestas y apoyo tanto en soporte técnico como vía whatsapp.',
          rating: 3
        },
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Siempre nos brindan la mejor atención y el mejor servicio.  Muchas gracias por ser una empresa de excelencia.',
          rating: 5
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'terra@deprice.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'PEDRO',
      last_name: 'ZAMBUDIO FIGULS',
      country: 'España',
      province_state: 'Lleida',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/pedro.png',
      buyer_reputation: 3,
      buyer_opinions: [
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Precio adecuado',
          rating: 1,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/felipe.png'
        },
        {
          commenter: 'ALMENDRA ANGUERA VILAFRANCA',
          comment: 'Excelente soporto en rapidez y solución!',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png'
        },
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Son muy puntuales y respetuosos. Quedamos muy conformes con el trabajo realizado en esta oportunidad.',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 3
        },
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Recomiendo sus servicios',
          rating: 3
        },
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Barato',
          rating: 1
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'cabezalarga@cataloniamail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'RUBEN',
      last_name: 'BIDAULT CULLERÉS',
      country: 'España',
      province_state: 'Valencia',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/ruben.png',
      buyer_reputation: 2,
      buyer_opinions: [
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Despacha sus productos a tiempo',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/amanda.png'
        },
        {
          commenter: 'CATALINA VISO GILABERT',
          comment: 'Son muy puntuales y respetuosos. Quedamos muy conformes con el trabajo realizado en esta oportunidad.',
          rating: 2,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/catalina.png'
        },
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Excelente!!! super recomendable!.',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png'
        }],
      seller_reputation: 4,
      seller_opinions: [
        {
          commenter: 'ANTONIA VALLÉS GIRVENT',
          comment: 'No volveria a contratarlos',
          rating: 5
        },
        {
          commenter: 'ANTONIA VALLÉS GIRVENT',
          comment: 'Brinda buena atención',
          rating: 3
        },
        {
          commenter: 'GUIDO MORALES GESE',
          comment: 'Excelente atención y profesionalismo, seriedad y oportunidad en las respuestas y apoyo tanto en soporte técnico como vía whatsapp.',
          rating: 3
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'clar@dinam.com.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'SOL',
      last_name: 'BIOSCA FONTANET',
      country: 'España',
      province_state: 'Zaragoza',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/sol.png',
      buyer_reputation: 4,
      buyer_opinions: [
        {
          commenter: 'CATALINA VISO GILABERT',
          comment: 'Me arrepiento de haberlo elegido',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/catalina.png'
        },
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Excelente!!! super recomendable!.',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png'
        },
        {
          commenter: 'ALMENDRA ANGUERA VILAFRANCA',
          comment: 'Excelente servicio y trato.',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png'
        }],
      seller_reputation: 5,
      seller_opinions: [
        {
          commenter: 'FELIPE BAEZ TEJADO',
          comment: 'Recomiendo sus servicios',
          rating: 5
        },
        {
          commenter: 'FERNANDA BARALDÉS COMAS',
          comment: 'Siempre nos brindan la mejor atención y el mejor servicio. Muchas gracias por ser una empresa de excelencia.',
          rating: 3
        },
        {
          commenter: 'TOMAS ZAFRA FIGULS',
          comment: 'Inpuntuales.',
          rating: 5
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'tech@domin.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'TOMAS',
      last_name: 'ZAFRA FIGULS',
      country: 'España',
      province_state: 'Tarragona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png',
      buyer_reputation: 5,
      buyer_opinions: [
        {
          commenter: 'RUBEN BIDAULT CULLERÉS',
          comment: 'Siempre nos brindan la mejor atención y el mejor servicio.  Muchas gracias por ser una empresa de excelencia.',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/ruben.png'
        },
        {
          commenter: 'PAULETTE RAYA GAVILAN',
          comment: 'Excelente soporto en rapidez y solución!',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png'
        },
        {
          commenter: 'VICTORIA BASTARDES SOTO',
          comment: 'Recomiendo sus servicios',
          rating: 5,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2022/victoria.png'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'CATALINA RAYA GARCIA',
          comment: 'Barato',
          rating: 2
        },
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Barato',
          rating: 4
        },
        {
          commenter: 'KUYEN BERENGUERAS CULLERÉS',
          comment: 'Precio adecuado',
          rating: 3
        }]
    });
    a.createFavorite();

    a = await User.create({
      email: 'albert@intercom.es',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'VICTORIA',
      last_name: 'BASTARDES SOTO',
      country: 'España',
      province_state: 'Tarragona',
      rol: 'client',
      description: 'Seller',
      avatar_image: 'http://www.fpp.uchile.cl/content/perfil/2022/victoria.png',
      buyer_reputation: 4,
      buyer_opinions: [
        {
          commenter: 'AMANDA PASCUAL ALOY',
          comment: 'Recomiendo sus servicios',
          rating: 3,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/amanda.png'
        },
        {
          commenter: 'SOL BIOSCA FONTANET',
          comment: 'Volveria a contratarlo',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2021/sol.png'
        },
        {
          commenter: 'CESAR BADIA TORNÉ',
          comment: 'Brinda buena atención',
          rating: 4,
          buyer_avatar: 'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg'
        }],
      seller_reputation: 3,
      seller_opinions: [
        {
          commenter: 'PALOMA ARNAU MORENO',
          comment: 'Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo   El servicio es excelente.',
          rating: 1
        },
        {
          commenter: 'DANIEL ANDREU CRUZ',
          comment: 'Excelente servicio y trato.',
          rating: 3
        },
        {
          commenter: 'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
          comment: 'Todo bien',
          rating: 4
        }]
    });
    a.createFavorite();
    a = await User.create({
      email: 'admin123@hotmail.com',
      password: '$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
      name: 'VICTORIA',
      last_name: 'BASTARDES SOTO',
      country: 'España',
      province_state: 'Tarragona',
      rol: 'admin',
      description: 'Seller',
    })
  } catch (error) {
    console.log(error);
  }
};

module.exports = fxuser;
