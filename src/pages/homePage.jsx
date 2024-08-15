import ForFarmers from "../components/ForFarmers";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Divider from "../components/ui/Divider";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <ForFarmers />
      <Divider className={`bg-[#eee]`} />
      <Projects />
    </div>
  );
};

export default HomePage;
