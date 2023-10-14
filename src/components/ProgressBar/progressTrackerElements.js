import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  padding:10px;
  justify-content: space-between;
  padding: 10px 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProgressTrackerUL = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProgressTrackerLI = styled.li`
  list-style: none;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const stepLabel = styled.p`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const ProgressDiv = styled.div`
  width: ${(props) => props.dimension};
  height: ${(props) => props.dimension};
  background-color: ${(props) => props.activeColor};
  border-radius: 50%;
  margin: 14px 0;
  display: grid;
  place-items: center;
  color: #fff;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 5px;
    background-color: ${(props) => props.activeColor};
    transform: translateX(-50%);
    top: 50%;
    z-index: -1; /* To place it behind the ProgressDiv */
  }
  ${(props) =>
    props.isArabic
      ? "&.item4::after { width: 0; height: 0; }"
      : "&.item1::after { width: 0; height: 0; }"}

  @media (max-width: 1280px) {
    &::after {
      width: 250px;
    }
  }
  @media (max-width: 1200px) {
    &::after {
      width: 225px;
    }
  }
  @media (max-width: 1150px) {
    &::after {
      width: 210px;
    }
  }
  @media (max-width: 1050px) {
    &::after {
      width: 200px;
    }
  }
  @media (max-width: 1000px) {
    &::after {
      width: 180px;
    }
  }
  @media (max-width: 920px) {
    &::after {
      width: 150px;
    }
  }
  @media (max-width: 800px) {
    &::after {
      width: 120px;
    }
  }
  @media (max-width: 768px) {
    &::after {
      width: 5px;
      height: 55px;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    &.item1::after {
      content: "";
      position: absolute;
      background-color: ${(props) => props.activeColor};
      width: 5px;
      height: 55px;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    &.item4::after {
      width: 0px;
      height: 0px;
    }
  }
`;

export const ActiveDiv = styled.div`
  display: grid;
  place-items: center;

  &::after {
    background-color: #ff4732;
  }

  p {
    display: none;
  }
`;

export const ActiveUil = styled.div`
  font-size: 20px;
  display: flex;
`;

// Styled components for Responsive CSS
export const ResponsiveUL = styled.ul`
  flex-direction: column;
`;

export const ResponsiveLI = styled.li`
  flex-direction: row;
`;

export const ResponsiveProgressDiv = styled.div`
  margin: 0 30px;

  &::after {
    width: 5px;
    height: 55px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  .one::after {
    height: 0;
  }

  .icon {
    margin: 15px 0;
  }
`;

export const Head1 = styled.div`
  font-size: 24px;
`;

export const Head2 = styled.div`
  font-size: 16px;
`;
