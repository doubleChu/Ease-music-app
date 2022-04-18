import styled from 'styled-components';
import sprite_button2 from '../../../../assets/imgs/sprite_button2.png'

export const SongListWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  padding: 40px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .ant-pagination {
    position: relative;
    left: 50%;
    transform: translateX(-25%);
    margin: 18px 0 -6px;

    .ant-pagination-options {
      display: none !important;
    }
  }
`;

export const HotButton = styled.a`
  display: inline-block;
  text-align: center;
  color: #fff;
  background: url(${sprite_button2}) no-repeat 0 0;
  width: 46px;
  height: 29px;
  &:hover {
    color: #fff;
  }
`