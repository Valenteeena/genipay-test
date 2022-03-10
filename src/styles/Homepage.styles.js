import styled from "styled-components";

export const HomepageContainer = styled.section`
  display: flex;
  .side2 {
    width: 100%;
    background: #fcfdfe;
    .body {
      background: #fff;
      margin: 0 20px;
      padding: 5px 15px;
      border-radius: 16px;
    }
  }
`;

export const Card = styled.div`
  background: ${(props) => (props.white ? "#FFF5E9" : "#2B899D")};
  color: ${(props) => (props.white ? "#2B4146" : "white")};
  width: 246px;
  height: 186px;
  border-radius: 8px;
  & > button {
    background: #017189;
    border-radius: 8px;
    height: 56px;
    width: 85%;
    border: NONE;
    margin: 0 1rem;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: ${(props) => (props.white ? "1rem 0.3rem" : "0.6rem 0.3rem")};
    margin: 0 1rem;
    border-bottom: 0.5px solid #eafbff;
    span:first-of-type {
      background: #ffffff;
      border-radius: 8px;
      color: #14b8a6;
      width: 32px;
      height: 32px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.5rem;
    }
    img {
      margin-right: 1rem;
    }
    div {
      flex: 1;
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        margin: 0;
      }
      b {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;

export const Buttons = styled.div`
  border-bottom: none !important;
  display: flex;
  button {
    flex: 1;
    border-radius: 4px;
    border: none;
    padding: 0.6rem;
    font-size: 16px;
    :first-of-type {
      background: #fda4af;
      margin-right: 0.5rem;
      color: white;
    }
    :last-of-type {
      background: white;
      margin-right: 0.5rem;
      color: #2b899d;
    }
  }
`;

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  /* justify-content: space-between; */
  h1 {
    color: #001b21;
    font-weight: bold;
    font-size: 25px;
    flex: 1;
  }
  .search {
    background: #f8fcfc;
    width: 304px;
    height: 53px;
    border: 1px solid #aac0c5;
    box-sizing: border-box;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 0px 34px 0 80px;

    input {
      flex: 1;
      padding: 0.5rem;
      border: none;
      background: unset;
      outline: none;
    }
  }
  .planted {
    display: flex;
    align-items: center;
    p {
      font-weight: normal;
      font-size: 14px;
      color: #2b4146;
      margin: 0 0.5rem;
    }
  }
  .notification {
    font-size: 24px;
    margin: 0 1rem;
  }
  .profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    div {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      p {
        color: #22c55e;
        font-weight: normal;
        font-size: 12px;
      }
      b {
        color: #2b4146;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;

export const WalletContainer = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    h3 {
      font-weight: bold;
      font-size: 21px;
      color: #001b21;
    }
    p {
      font-weight: bold;
      font-size: 16px;
      color: #017189;
    }
  }
  .card-container {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;
export const SingleCard = styled.div`
  width: 310px;
  height: 164px;
  border-radius: 16px;
  box-sizing: border-box;
  background: ${(props) => (props.bg ? props.bg : "#2B899D")};
  padding: 1rem;
  position: relative;
  h2 {
    position: absolute;
    bottom: 1rem;
    font-weight: bold;
    font-size: 28px;
    color: #001b21;
  }
  > div {
    display: flex;
    justify-content: space-between;
    div {
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
      }
      i {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #2b4146;
      }
    }
    span {
      margin: 0.5rem;
    }
  }
`;

export const Activity = styled.div`
  margin-top: 3rem;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    h3 {
      font-weight: bold;
      font-size: 21px;
      color: #001b21;
      display: flex;
      align-items: center;
      span {
        color: #017189;
        font-weight: normal;
        font-size: 16px;
        margin-left: 1.3rem;
        display: flex;
        align-items: center;
      }
    }
    p {
      font-weight: bold;
      font-size: 16px;
      color: #017189;
    }
  }
`;
export const LinksContainer = styled.section`
  margin-top: 3rem;
  .top {
    margin-top: 1rem;
    h3 {
      font-weight: 700;
      font-size: 21px;
      color: #001b21;
      display: flex;
      align-items: center;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #94a3b8;
    }
  }
  .links-list {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

export const SingleLinks = styled.div`
  border: 1px solid #f1f5f9;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  padding: 24px;
  width: 120px;
  cursor: pointer;
  :hover {
    background-color: #f1f5f9;
  }
  > div {
    background: ${(props) => (props.bg ? props.bg : "#2B899D")};
    width: 32px;
    height: 32px;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: auto;
  }
  p {
    color: #001b21;
    font-weight: 400;
    font-size: 14px;
    margin-top: 0.8rem;
  }
`;
