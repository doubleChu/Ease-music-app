import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    height: 30px;
    background-color: #c20c0c;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #a40011;
` 

export const CategoryList = styled.ul`
  display: flex;
  padding-left: 180px;
  .item {
    height: 29px;
    text-align: center;
    a {
      display: inline-block;
      padding: 0 13px;
      margin: 7px 17px 0;
      border-radius: 20px;
      color: #fff;
      line-height: normal;
      &:hover,
      &.menu-active {
        text-decoration: none;
        background-color: #9b0909;
      }
    }
  }
`