import { useRouter } from 'next/router';
import cardsData from '../../../components/cardsData';

function CardDetails({ card }) {
  if (!card) {
    return <div>Card not found.</div>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = cardsData.map(card => ({ params: { id: card.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const cardId = parseInt(params.id);
  const card = cardsData.find(card => card.id === cardId);

  return {
    props: {
      card,
    },
  };
}

export default CardDetails;
