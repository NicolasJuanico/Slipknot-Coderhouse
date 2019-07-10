var app = new Vue({
    el: '#albums',
    data: {
        albums: [{
            title: 'Slipknot',
            release: '29 - Junio - 1999',
            imagen: '/resources/albumCover/compress/slipknot.jpg'
        },
        {
            title: 'Iowa',
            release: '28 - Agosto - 2001',
            imagen: '/resources/albumCover/compress/iowa.jpg'
        },
        {
            title: 'Vol. 3: (The Subliminal Verses)',
            release: '24 - Mayo - 2004',
            imagen: '/resources/albumCover/compress/vol3.jpg'
        },
        {
            title: 'All Hope Is Gone',
            release: '26 - Agosto - 2008',
            imagen: '/resources/albumCover/compress/ahig.jpg'
        },
        {
            title: '.5: The Gray Chapter',
            release: '21 - Octubre - 2014',
            imagen: '/resources/albumCover/compress/the-gray-chapter.jpg'
        },
        {
            title: 'We Are Not Your Kind',
            release: '09 - Agosto - 2019',
            imagen: '/resources/albumCover/compress/WANYK.jpg'
        }]
    }
});

var app = new Vue({
    el: '#memberS',
    data: {
        members: [{
            name: 'Alessandro',
            lastName: 'Venturella',
            imagen: '/resources/albumCover/compress/WANYK.jpg',
            information: `Se unió a Slipknot durante el proceso de grabación del álbum .5: The Gray Chapter, reemplazando al fallecido bajista Paul
            Gray, quien había participado durante un tiempo en el estudio para la grabación del disco. En el Knotfest de 20014, toca con la banda 
            en vivo por primera vez.`,
            quote: 'Persacas'
        },
        {
            name: 'Corey',
            lastName: 'Taylor',
            imagen: '/resources/albumCover/compress/WANYK.jpg',
            information: `Se unió a Slipknot en 1997 para reemplazar a su vocalista original Anders Colsefni. Ha publicado 5 álbumes de estudio 
            con la banda.`, 
            quote: `No nos estamos escondiendo detrás de estas máscaras, estamos revelando más de lo que se pueden imaginar. 
            La máscara que uso para poner todas las cosas malas que hay dentro de mí. Incluso si no usamos las máscaras, 
            la música seguiría siendo de buena calidad.` 
        }]
    }
});