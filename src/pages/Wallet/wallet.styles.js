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
    .wallet-sideb {
      flex: 1;
      padding: 2rem 3rem;
      .top-sideb {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          font-weight: 800;
          font-size: 40px;
          line-height: 100%;
          color: #001b21;
          margin-right: 3rem;
        }
        > div {
          margin-left: 1rem;
          margin-bottom: 1rem;
          .status {
            display: flex;
            align-items: center;
            color: #22c55e;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            margin-bottom: 0.5rem;
            .dot {
              width: 8px;
              height: 8px;
              background: #22c55e;
              border-radius: 50%;
              margin-right: 0.5rem;
            }
            p {
              font-weight: 400;
              font-size: 16px;
              color: #001b21;
            }
            .currency {
              color: #0a6375;
              font-weight: 700;
            }
          }
        }
      }
      .balances {
        display: flex;
        margin: 1rem 0;
        justify-content: space-between;
        > div {
          :first-of-type {
          }
          p {
            color: #001b21;
            font-weight: 400;
            font-size: 15px;
            margin-bottom: 1rem;
            span {
              color: #2b4146;
              font-weight: 400;
              font-size: 14px;
              width: 110px;
              margin-right: 1.5rem;
            }
          }
        }
      }
      .buttons {
        display: flex;
        margin: 1rem 0;
        justify-content: space-between;
        button {
          width: 156px;
          height: 56px;
          border: 1px solid #017189;
          color: #017189;
          box-sizing: border-box;
          border-radius: 8px;
          background: white;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .more {
        p {
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          display: flex;
          align-items: center;
          color: #017189;
        }
      }

      .tabs {
        display: flex;
        margin-top: 1rem;
        margin-bottom: 1rem;
        p {
          color: #2b4146;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          width: 80px;
          padding: 0.5rem;
          margin-right: 1rem;
          text-align: center;
          :first-of-type {
            box-shadow: inset 0px -4px 0px #017189;
            color: #001b21 !important;
            font-weight: 700;
          }
        }
      }
      .chart {
        width: 100%;
        p {
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          display: flex;
          align-items: center;
          color: #017189;
          text-align: right;
          justify-content: flex-end;
        }
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
