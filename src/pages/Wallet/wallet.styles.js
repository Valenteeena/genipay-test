import styled from "styled-components";

export const WalletPageContainer = styled.section`
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

export const YourWalletCont = styled.div`
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
    button {
      background: #017189;
      border-radius: 8px;
      width: 207px;
      height: 56px;
      border: none;
      color: white;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
    }
  }
  .wallet-body {
    display: flex;
    margin-top: 2rem;
    .wallet-sidea {
      width: 406px;
      margin-right: 1rem;
      aside {
        display: flex;
        justify-content: space-between;
        align-items: center;
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

          input {
            flex: 1;
            padding: 0.5rem;
            border: none;
            background: unset;
            outline: none;
          }
        }
        p {
          color: #017189;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .tabs {
        display: flex;
        margin-top: 1rem;
        p {
          color: #2b4146;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          width: 130px;
          padding: 0.5rem;
          margin-right: 1rem;
          text-align: center;
          :first-of-type {
            box-shadow: inset 0px -4px 0px #017189;
            color: #001b21 !important;
          }
        }
      }
      .wallet-list {
        margin-top: 1.5rem;
      }
    }
  }
`;
export const SingleWal = styled.div`
  background: ${(props) => (props.default ? "#EEF7F9" : "#FFFFFF")};
  border-radius: 16px;
  height: 80px;
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  div {
    :first-of-type {
      flex: 1;
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #001b21;
      }
      i {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #2b4146;
      }
    }
  }

  div {
    :last-of-type {
      text-align: right;
      h2 {
        color: #2b4146;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        color: #2b4146;
      }
    }
  }
  span {
    margin-right: 1rem;
    width: 52px;
    height: 48px;
  }
`;
