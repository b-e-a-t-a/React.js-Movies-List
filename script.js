/*
var element = React.createElement('div', {}, 'Hello world!');
ReactDOM.render(element, document.getElementById('app'));
*/

/*
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Zielona Mila'),
        React.createElement('p', {}, 'Dramat, rok 1999')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Skazani na Shawshank'),
        React.createElement('p', {}, 'Dramat, rok 1994')
      ),
    ),
  );
  ReactDOM.render(element, document.getElementById('app'));
  */

  var movies = [
    {
      id: 1,
      title: 'Zielona Mila',
      desc: 'Dramat, rok 1999',
      src: 'http://1.fwcdn.pl/po/08/62/862/7517878.2.jpg'
    },
    {
      id: 2,
      title: 'Skazani na Shawshank',
      desc: 'Dramat, rok 1994',
      src: 'http://1.fwcdn.pl/po/10/48/1048/6925401.2.jpg'
    },
    {
      id: 3,
      title: 'Incepcja',
      desc: 'Thriller, rok 2010',
      src: 'http://1.fwcdn.pl/po/08/91/500891/7354571.2.jpg'
    },
    {
      id: 4,
      title: 'Chłopiec w pasiastej piżamie',
      desc: 'Dramat wojenny, rok 2008',
      src: 'http://1.fwcdn.pl/po/01/36/420136/7347382.2.jpg'
    },
    {
      id: 5,
      title: 'Piękny umysł',
      desc: 'Dramat, rok 2001',
      src: 'http://1.fwcdn.pl/po/18/64/31864/7521208.2.jpg'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.src})
    );
  });

  var element =
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
    );

  ReactDOM.render(element, document.getElementById('app'));