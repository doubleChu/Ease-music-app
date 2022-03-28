import styled from 'styled-components'

export const FooterWrapper = styled.div`
	position: relative;
	height: 172px;
	overflow: hidden;
	border-top: 1px solid #d3d3d3;
	background: #f2f2f2;
  .footer-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
`

export const FooterLeft = styled.div`
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
  .copy > a {
    color: #999;
  }
  .line {
    margin: 0;
    color: #c2c2c2;
  }
  .footer-company,
  .footer-alert,
  .footer-manage-system {
    margin-right: 10px;
  }
`

export const FooterRight = styled.ul`
  display: flex;
  width: 420px;
  height: 70px;
  margin-top: 33px;
  justify-content: space-around;
  .item {
    display: flex;
    width: 60px;
    height: 70px;
    flex-direction: column;
    .link {
      display: block;
      background-image: url(${require('../../assets/imgs/sprite_footer_02.png')});
      background-size: 110px 552px;
      background-repeat: no-repeat;
	    width: 50px;
	    height: 45px;
	    margin: 0 auto;
    }
    &:nth-child(1) .link {
      background-position: -63px -456.5px;
    }
    &:nth-child(2) .link {
      background-position: -63px -101px;
    }
    &:nth-child(3) .link {
      background-position: 0px 0px;
    }
    &:nth-child(4) .link {
      background-position: -60px -50px;
    }
    &:nth-child(5) .link {
      background-position: 0px -101px;
    }
    .title {
      margin: 5px 5px 0;
      display: inline-block;
      width: 72px;
      height: 14px;
      background-image: url(${require('../../assets/imgs/sprite_footer_01.png')});
      background-size: 180px 139px;
      text-align: center;
      color: #666;
    }
    
     :nth-child(1) .title {
      background-position: 0 -108px;
      margin-left: -6px;
    }
    :nth-child(2) .title {
      background-position: -1px -91px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
    }
    :nth-child(4) .title {
      background-position: 0px -54px;
    }
    :nth-child(5) .title {
      background-position: -1px -72px;
    }
  }
`