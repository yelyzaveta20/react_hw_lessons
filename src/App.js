import logo from './logo.svg';
import './App.css';
import SimpsonsFamily from "./Simpsons/SimpsonsFamily";
import RickMorti from "./RickAndMorti/RickMorti";

function App() {
  return (
    <div>
<div>
  <SimpsonsFamily name={'Homer'} img={'https://upload.wikimedia.org/wikipedia/ru/b/bd/Homer_Simpson.png'}/>
  <SimpsonsFamily name={'Margery'} img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
  <SimpsonsFamily name={'Bartholomew'} img={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
  <SimpsonsFamily name={'Lisa-Marie'} img={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
  <SimpsonsFamily name={'Margaret-Evelyn "Maggie"'} img={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
</div>

    <div>
      <RickMorti id={'1'} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'}
                 img={'https://rickandmortyapi.com/api/character/avatar/328.jpeg'}/>
      <RickMorti id={'2'} name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'}
                 img={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
      <RickMorti id={'3'} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'}
                 img={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
      <RickMorti id={'4'} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'}
                 img={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
      <RickMorti id={'5'} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'}
                 img={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
      <RickMorti id={'6'} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'}
                 img={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
    </div>


    </div>
  );
}

export default App;
