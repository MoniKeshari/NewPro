import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Logo_url } from '../../Services/Constants';
import style from '../../StyleComponent/Card.module.scss';
import { fetchData } from '../../Services/ApiCall';
import ShimmerComponent from '../Shimmer/Shimmer';
import { setCardData } from '../../Reduxtoolkit/slice/homeslice';
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
  const dispatch = useDispatch();
  const { inputsearch, carddata } = useSelector(
    (state) => state.inputFieldSlice
  );

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const result = await fetchData();
      dispatch(setCardData(result));
    };

    fetchDataFromAPI();
  }, [dispatch]);

  const filteredData = inputsearch
    ? carddata.filter((item) =>
        item.title.toLowerCase().includes(inputsearch.toLowerCase())
      )
    : carddata;
    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/details/${id}`);
    };
  return (
    <div className={`${style.container_data} container`}>
      {filteredData.length ? (
        <div className={`${style.parentCard}`}>
          {filteredData.map((item, index) => {
            return (
              <div className={style.cardWrapper} key={index} onClick={()=>handleClick(item.id)}>
                <div className={style.card_info}>
                  <div className={style.cardImg}>
                    <img src={Logo_url} alt="logo" />
                  </div>
                    <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <ShimmerComponent />
      )}
    </div>
  );
};

export default CardComponent;