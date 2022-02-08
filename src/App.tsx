import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 45px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  grid-template-columns: repeat(2, 1fr);
`;

const boxVariants = {
  호버얌: { scale: 1.5, rotateZ: 90 },
  탭이얌: { scale: 1, borderRadius: "100px" },
  드래깅: {
    backgroundColor: "rgb(85, 239, 196)",
    transition: { duration: 10 },
  },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover="호버얌"
        whileTap="탭이얌"
        whileDrag="드래깅"
      />
    </Wrapper>
  );
}

export default App;
