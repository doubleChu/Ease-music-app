import styled from 'styled-components'

export const PlaylistItemWrapper = styled.div`
  display: grid;
  box-sizing: content-box;
  width: 100%;
  color: #ccc;
  grid-template-columns: 10px 256px 100px 70px 35px;
  grid-template-rows: 28px;
  height: 28px;
  cursor: pointer;
  margin-top: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .song-name {
    padding-left: 20px;
    grid-column-start: 2;
    width: 250px;
    height: 28px;
    text-align: left;
    line-height: 28px;
  }

  .singer {
    line-height: 28px;
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    span:hover {
      color: #fff;
    }
    span {
      margin-left: 4px;
    }
    grid-column-start: 4;
  }

`
export const ControlIcons = styled.div`
  visibility: hidden;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  grid-column-start: 3;
  margin-top: 5px;
  ${PlaylistItemWrapper}:hover & {
    visibility: visible;
  }
`
export const PlayListIcon = styled.button`
  background: url(${require("../../../../assets/imgs/playlist.png")}) no-repeat;
  width: 16px;
  height: 16px;
  cursor: pointer;
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
      case 5:
        return "-205px 0;"
      case 6:
        return "-182px 0;"
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
        case 5:
          return "-205px -30px;"
        case 6:
          return "-182px 0;"
        default:
          return ""
      }
    }};
  }
`