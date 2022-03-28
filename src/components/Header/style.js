import styled from "styled-components"

export const HeaderWrapper = styled.div`
  width: 100%;
  /* height: 75px; */
  background-color: #242221;
  .content {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  .red-line {
    height: 5px;
    background-color: #c20b0b;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .header-group {
    display: flex;
    color: #ccc;
    font-size: 14px;
    .header-item {
      position: relative;
      padding: 0 19px;
      height: 70px;
      text-align: center;
      line-height: 70px;
      color: #ccc;
      &:hover {
        text-decoration: none;
        background-color: #000;
      }
      /* hot图标 */
      :last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require('../../assets/imgs/sprite_01.png')});
          background-position: -192px 0;
          top: 20px;
          right: -20px;
        }
      }
    }
    /* NavLink活跃状态 */
    .link-active {
      color: #fff;
      background-color: #000;
      /* 下面的小三角 */
      .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-image: url(${require('../../assets/imgs/sprite_01.png')});
        background-position: 254px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 12px;
  .search-wrapper {
    position: relative;
    /* 搜索框 */
    .search {
      width: 158px;
      height: 32px;
      border-radius: 16px;
      background-color: #fff;
      input {
        font-size: 14px;
        font-family: "微软雅黑";
        &::placeholder {
          font-size: 12px;
        }
      }
    }
    
    /* 下拉框 */
    .down-slider {
      position: absolute;
      top: 36px;
      left: 0;
      right: 0;
      width: 237px;
      z-index: 999;
      /* height: 144px; */
      border: 1px solid #bebebe;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 4px 7px #555;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
      .search-header {
        height: 35px;
        .discover {
          display: inline-block;
          padding-top: 10px;
          padding-left: 10px;
        }
      }
      .content {
        display: flex;
        border: 1px solid rgb(183, 183, 187);
        .zuo {
          /* float: left; */
          /* height: 100%; */
          width: 65px;
          /* border: 1px solid rgb(183, 183, 187); */
          padding-top: 10px;
          border-bottom: none;
          .song {
            color: #ccc;
            margin-left: 28px;
          }
        }
        .main {
          display: inline-block;
          font-size: 13px;
          line-height: 28px;
          .item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 168px;
            cursor: pointer;
            height: 35px;
            line-height: 35px;
            color: #000;
            text-indent: 8px;
            &:hover {
              background-color: #ecf0f1;
              border-radius: 5%;
              color: #2ecc71;
            }
            &.active {
              background-color: #ecf0f1;
              color: #2ecc71;
            }
          }
        }
        span.blue {
          color: #7ab3dd;
        }
      }
    }
  }
  .center {
    width: 90px;
    text-decoration: none;
    height: 32px;
    margin: 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    background-position: 0 -140px;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;

    &:hover {
      cursor: pointer;
      border-color: #fff;
      color: #fff;
    }
  }
  .login {
    height: 45px;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -47px;
    background-image: none;
    .link{
      display: block;
      width: 28px;
      margin-top: 7px;
      color: #787878;
    }
  }
  .login:hover {
    cursor: pointer;
  }
  .profile-img {
    width: 35px;
    height: auto;
    border-radius: 50%;
  }
`
