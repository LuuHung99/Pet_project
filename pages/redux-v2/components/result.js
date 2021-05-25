import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
function Result(props) {
  const virut = useSelector((state) => state.corona.viruts);
  console.log(virut);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_DATA_CORONA'});
  },[])


  return (
    <>
      <p>Moi nhiem: {virut.moi_nhiem}</p>
      <p>Tong nhiem: {virut.tong_nhiem}</p>
      <p>Tu vong: {virut.tu_vong}</p>
      <p>Tong tu vong: {virut.tong_tv}</p>
      <p>Khoi: {virut.khoi}</p>
      <p>Tong khoi: {virut.tong_khoi}</p>

      {/* export const data = {
    moi_nhiem: 100,
    tong_nhiem: 3000,
    tu_vong: 1223,
    tong_tv: 32433,
    khoi: 2131,
    tong_khoi: 1231
} */}
    </>
  );
}

export default React.memo(Result);
