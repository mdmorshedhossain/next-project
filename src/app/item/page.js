import CardList from '../../components/CardList';
import cardsData from '../../components/cardsData';

function HomePage({cardList}) {
  console.log("object cardList", cardList);
  return (
    <div>
      <h1>Card App</h1>
      {/* <CardList cardList={cardList} /> */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      cardList: cardsData,
    },
  };
}

export default HomePage;
