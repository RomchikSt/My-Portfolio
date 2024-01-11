import Map from "../components/Map";
import FilterBottom from "../ui/FilterButton";
import ZoomButtons from "../ui/ZoomButtons";
import LanguageButton from "../ui/LanguageButton";
import styled from "styled-components";

const PageContainer = styled.div`
  position: relative;
`;

function TargetsPage() {
  return (
    <PageContainer>
      <Map />
      <FilterBottom />
      <LanguageButton />
      <ZoomButtons />
    </PageContainer>
  );
}

export default TargetsPage;
