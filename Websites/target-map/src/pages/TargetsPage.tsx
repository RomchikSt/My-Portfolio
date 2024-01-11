import Map from "../components/Map";
import FilterBottom from "../ui/FilterButton";
import ZoomButtons from "../ui/ZoomButtons";
import LanguageButton from "../ui/LanguageButton";
import styled from "styled-components";
import Filter from "../components/Filter";
import { selectFilter } from "../features/map/mapSelectors";
import { useSelector } from "react-redux";

const PageContainer = styled.div`
  position: relative;
`;

function TargetsPage() {
  const filterVisible = useSelector(selectFilter);
  return (
    <PageContainer>
      <Map />
      <FilterBottom />
      <LanguageButton />
      <ZoomButtons />
      {filterVisible && <Filter />}
    </PageContainer>
  );
}

export default TargetsPage;
