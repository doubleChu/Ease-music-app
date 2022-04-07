import styled from 'styled-components'

export const TopListWrapper = styled.div`
  width: 230px;

  .ranking-header {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;

    .image {
      position: relative;
      height: 80px;
    }

    .title {
      width: 116px;
      margin: 6px 0 0 10px;

      div > h3 {
        font-weight: bold !important;
      }

      .btn {
        display: flex;
        margin-top: 8px;
        .play,
        .favorite {
          width: 22px;
          height: 22px;
        }

        .play {
          background-position: -267px -205px;
          margin-right: 8px;

          &:hover {
            background-position: -267px -235px;
          }
        }

        .favorite {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .ranking-list {
    padding-left: 10px;
    .list-item {
      display: flex;
      height: 32px;
      line-height: 32px;

      .number {
        width: 35px;
        text-align: center;
        font-size: 16px;
      }

      .song-name {
        width: 185px;
        font-size: 12px;
        color: #000;
      }

      &:hover .song-name {
        width: 96px;
      }

      &:hover .operation {
        visibility: visible;
        width: 93px;
      }

      .operation {
        display: flex;
        align-items: center;
        visibility: hidden;
        width: 0;
        text-indent: -9999px;

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .add-to {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favorite {
          background-position: -297px -268px;
        }
      }
    }
  }

  .ranking-footer {
    height: 33px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .show-all {
      margin-right: 15px;
    }
  }
`
