import styled from 'styled-components'

export const PlaylistItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 28px;
  cursor: pointer;
  justify-content: space-around;
  margin-top: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .song-name {
    width: 250px;
    height: 28px;
    text-align: left;
    line-height: 28px;
    text-indent: -18px;
  }

  .control-and-singer {
    display: flex;

    span:hover {
      color: #fff;
    }

    span {
      margin-left: 4px;
    }
  }

`
export const PlayListIcon = styled.button`
  background: url(${require("../../../../assets/imgs/playlist.png")}) no-repeat;
  width: 16px;
  height: 16px;
  background-position: ${(props) => {
    switch (props.iconType) {
      case 1:
        return "-24px 0;"
      case 2:
        return "0 0;"
      case 3:
        return "-57px -50px;"
      case 4:
        return "-51px 0;"
      default:
        return ""
    }
  }};
  &:hover {
    background-position: ${(props) => {
      switch (props.iconType) {
        case 1:
          return "-24px -20px;"
        case 2:
          return "0 -20px;"
        case 3:
          return "-80px -50px;"
        case 4:
          return "-51px -20px;"
        default:
          return ""
      }
    }};
  }
`