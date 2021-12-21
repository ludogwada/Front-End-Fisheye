function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `${portrait}`;
  console.log(name)
  function getUserCardDOM() {
      const article = document.createElement( 'article' );
      const a = document.createElement('a');
      a.classList.add('article');
      a.setAttribute("href", "photographer.html?id="+ id);
      const img = document.createElement( 'img' );
      img.classList.add('article__img');
      img.setAttribute("src", picture);
      img.setAttribute("alt", name);
      const h2 = document.createElement( 'h2' );
      h2.classList.add('article__h2');
      h2.textContent = name;
      const h3 = document.createElement( 'h3' );
      h3.classList.add('article__h3');
      h3.textContent = city + ", " + country;
      const h4 = document.createElement( 'h4' );
      h4.classList.add('article__h4');
      h4.textContent = tagline;
      const h5 = document.createElement( 'h5' );
      h5.classList.add('article__h5');
      h5.textContent = price + "€/jour";
      article.appendChild(a);
      a.appendChild(img);
      a.appendChild(h2);
      a.appendChild(h3);
      a.appendChild(h4);
      a.appendChild(h5);
      return (article);
  }
  return { getUserCardDOM }
}