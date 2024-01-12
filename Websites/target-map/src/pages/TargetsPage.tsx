import Map from "../components/Map";
import StandartMapButton from "../ui/StandartMapButton";
import ZoomButton from "../ui/ZoomButton";
import styled from "styled-components";
import {
  selectLanguage,
  selectFilter,
  selectZoom,
} from "../features/map/mapSelectors";
import { useDispatch, useSelector } from "react-redux";
import { FaInfo, FaLocationArrow } from "react-icons/fa";
import {
  setChangeLanguage,
  setFilter,
  setZoom,
} from "../features/map/mapSlice";
import { LuSettings2 } from "react-icons/lu";
import SearchInput from "../ui/SearchInput";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

const PageContainer = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  padding: 0.4rem;
`;

function TargetsPage() {
  const dispatch = useDispatch();
  const zoom = useSelector(selectZoom);
  const searchOpen = useSelector(selectFilter);
  const language = useSelector(selectLanguage);

  const handleZoomPlus = () => {
    if (zoom < 18 && zoom >= 1) dispatch(setZoom(zoom + 1));
  };

  const handleZoomMinus = () => {
    if (zoom <= 18 && zoom > 1) dispatch(setZoom(zoom - 1));
  };

  const handleOpenSearch = () => {
    dispatch(setFilter(!searchOpen));
  };

  const handleChangeLanguage = () => {
    if (language === "UA") dispatch(setChangeLanguage("EN"));
    else dispatch(setChangeLanguage("UA"));
  };

  return (
    <PageContainer>
      <Map />
      <StandartMapButton top={"3rem"} left={"2rem"} onClick={handleOpenSearch}>
        <FaSearch size={"2rem"} />
      </StandartMapButton>
      <AnimatePresence>
        {searchOpen && <SearchInput top={"3.1rem"} left={"2rem"} />}
      </AnimatePresence>
      <StandartMapButton
        top={"3rem"}
        right={"2rem"}
        onClick={handleChangeLanguage}
      >
        <StyledImage
          src={language === "UA" ? "img/uaFlag.webp" : "img/ukFlag.webp"}
          alt={language === "UA" ? "Ukrainina flag" : "UK flag"}
        />
      </StandartMapButton>
      <StandartMapButton top={"3rem"} right={"7.2rem"}>
        <FaInfo size={"2.2rem"} />
      </StandartMapButton>
      <StandartMapButton bottom={"17rem"} right={"2rem"}>
        <LuSettings2 size={"2.2rem"} />
      </StandartMapButton>
      <StandartMapButton bottom={"12rem"} right={"2rem"}>
        <FaLocationArrow
          size={"2.2rem"}
          style={{
            marginTop: "0.2rem",
            marginRight: "0.2rem",
          }}
        />
      </StandartMapButton>
      <ZoomButton zoomPlus={handleZoomPlus} zoomMinus={handleZoomMinus} />
    </PageContainer>
  );
}

export default TargetsPage;
