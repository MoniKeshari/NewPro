import { useParams } from 'react-router-dom';
import style from '../../StyleComponent/Card.module.scss';
import { Logo_url } from '../../Services/Constants';
import { useSelector } from 'react-redux';
const DetailsPage = () => {
  const { id } = useParams();
  const carddata = useSelector((state) => state.inputFieldSlice.carddata);
  const selectedCard = carddata.find((card) => card.id === parseInt(id));

  return (
    <div className="container mt-3">
      
      {selectedCard ? (
        <div className={`${style.parentCard}`}>
              <h2>Details of Card</h2>
          <div className={`${style.cardWrapper} ${style.card_detail}`}>
            <div className={`${style.card_info} ${style.cardInfoDetail}`}>
              <div className={style.cardImg}>
                <img src={Logo_url} alt="logo" />
              </div>
              <h4>{selectedCard.title}</h4>

              <p>{selectedCard.body}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>click the card first</div>
      )}
    </div>
  );
};

export default DetailsPage;
