import React from 'react';

const pictureUrl =
  'https://images.unsplash.com/photo-1595119396388-b8822b6c91fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

class Mediacard extends React.Component { 

function Mediacard() {
  return (
    <div className='App'>
      <div className='card'>
        <div className='card__profile'>
          <img src={pictureUrl} />
          <div className='card__profile-text'>
            <p className='card__profile-name'>Ernest Miller Hemingway</p>
            <p className='card__profile-date'> 30 de julio de 2020</p>
          </div>
        </div>
        <div className='card__text-content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adisicing elit, bla bla bla
            blo blo hola amigas cómo están todo bien vamos a bailar react es
            maravilloso
          </p>
        </div>
        <div className='card__extra'>
          <p className='read-more'>Leer más...</p>
          <p className='favorite'>
            37 <i className='fas fa-heart'></i>
          </p>
        </div>
      </div>
    </div>
  );
}


export default Mediacard;
