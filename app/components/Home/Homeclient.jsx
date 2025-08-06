import Banner from "../Banner";
import Info1 from "../Info1";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Banner />
      </Wrapper>
      <Info1 />
    </>
  );
}
