import { motion } from "framer-motion";
import styled from "styled-components";
import {} from "../../shared/Styles/flex";

export const Wrapper = styled(motion.div)`
  height: 100%;
  & > div {
    border-radius: 8px;
  }
  .mbsc-scrollview-scroll {
  }
  //
  /* .mbsc-calendar-text,
  .mbsc-calendar-label,
  .mbsc-calendar-label-start {
    display: flex;
    align-items: center;
    height: 24px;
    padding: 0.4rem;
    font-weight: 500;
    font-size: 0.75rem;
  }
  // 풀버전 bar
  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-label {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0.5rem;
  } */

  .mbsc-calendar-cell-inner {
    div {
    }
  }
`;
