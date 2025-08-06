import Banner from "../Banner";
import Info1 from "../Info1";
import Info2 from "../Info2";
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
      <Info2 />
    </>
  );
}
