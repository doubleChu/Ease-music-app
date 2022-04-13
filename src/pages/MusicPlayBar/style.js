import styled from "styled-components"

export const PlayBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
    align-content: center;
  }

  /* 进入 */
  .playlist-enter,
  .playlist-appear {
    opacity: 0;
    transform: scale(0.6);
  }
  /* 执行动画 */
  .playlist-enter-active,
  .playlist-appear-active {
    transition: opacity 300ms, transform 300ms;
    opacity: 1;
    transform: scale(1);
  }

  /* 离开 */
  .playlist-exit {
    opacity: 1;
    transform: scale(1);
  }

  .playlist-exit-active {
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 300ms, transform 300ms;
  }

  .playlist-exit-done {
    opacity: 0;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;

  .pre,
  .next,
  .play {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    cursor: pointer;
  }

  .pre {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    /* 动态的传递 */
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    margin-top: 0;

    &:hover {
      /* 动态的传递 */
      background-position: -40px
        ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayerInfo = styled.div`
  display: flex;
  .image {
    width: 34px;
    height: 35px;
    border-radius: 5px;
    overflow: hidden;
    margin: 6px 15px 0 0;
  }

  .play-detail {
    .song-info {
      width: 100%;
      height: 28px;
      overflow: hidden;
      text-shadow: 0 1px 0 #171717;
      line-height: 28px;
      .song-name {
        color: #e8e8e8;
      }
      .singer-name {
        color: #9b9b9b;
      }
      .mv {
        display: inline-block;
        margin: 3px 10px -3px;
        background-position: -1px -57px;
        width: 16px;
        height: 16px;
        outline: none;
        &:hover {
          background-position: -21px -57px;
        }
        cursor: pointer;
      }
    }

    .ant-slider {
      width: 466px;
      height: 9px;

      margin-top: -2px;
      z-index: 100;

      .ant-slider-rail,
      .ant-slider-track,
      .ant-slider-step {
        height: 9px;
      }

      .ant-slider-rail {
        background: url(${require("../../assets/imgs/progress_bar.png")}) 0 0;
      }

      .ant-slider-track {
        background: url(${require("../../assets/imgs/progress_bar.png")});
        background-position: left -66px;
      }

      .ant-slider-handle {
        width: 20px;
        height: 22px;
        border: 0;
        background: url(${require("../../assets/imgs/sprite_icon.png")});
        background-position: 0 -250px;
      }
    }
  }

  .song-time {
    line-height: 68px;
    color: #a1a1a1;
    margin: 0 30px 0 9px;

    .total-time {
      color: #797979;
    }
  }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .refresh {
    margin: 0 5px;
    cursor: pointer;
    font-size: 17px;
    color: #9f9f9f;
    &:hover {
      color: #ccc;
    }
  }

  .left {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    justify-content: space-around;
    width: 87px;
    .pictureIP {
      background: url(${require("../../assets/imgs/pictureInPicture.png")}) -4px -4px;
      width: 17px;
      height: 17px;
      &:hover {
        background-position: -4px -29px;
      }
    }
    .collection {
      background-position: -92px -166px;
      width: 18px;
      height: 18px;
      &:hover {
        background-position: -92px -192px;
      }
    }
    .share {
      background-position: -118px -167px;
      width: 18px;
      height: 18px;
      &:hover {
        background-position: -118px -193px;
      }
    }
  }

  // ! changed
  .ant-icon-download {
    cursor: pointer;
    padding: 1px 6px;
    font-size: 19px;
    color: #adadad;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -240px;
    margin-bottom: 6px;
    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.play_sequence) {
          case 1:
            return "-66px -248px;"
          case 2:
            return "-66px -344px;"
          default:
            return "-3px -344px;"
        }
      }};

      &:hover {
        background-position: ${(props) => {
          switch (props.play_sequence) {
            case 1:
              return "-93px -248px;"
            case 2:
              return "-93px -344px;"
            default:
              return "-33px -344px;"
          }
        }};
      }
    }

    .playlist {
      /* position: relative; */
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }

  .top-volume {
    position: absolute;
    top: -117px;
    left: 65px;
    clear: both;
    width: 32px;
    height: 113px;
    overflow: hidden;
    padding: 10px;
    background-position: 0 -503px;

    /* ant design Slider style change */
    .ant-slider-vertical {
      margin: 0;
      .ant-slider-rail {
        background-color: transparent;
      }

      .ant-slider-track {
        background: url(${require("../../assets/imgs/playbar_sprite.png")})
          no-repeat 0 9999px;
        background-position: -40px bottom;
      }

      .ant-slider-handle {
        border: 0;
        background: url(${require("../../assets/imgs/sprite_icon.png")});
        background-position: -42px -250px;
      }
    }
  }
`
