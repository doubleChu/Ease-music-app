import * as React from 'react'
import { Fragment } from 'react'
import { FooterLeft, FooterRight, FooterWrapper } from './style'

export default function Footer() {
    const footerLinks = [
      {
        title: '服务条款',
        link: 'https://st.music.163.com/official-terms/service',
      },
      {
        title: '隐私政策',
        link: 'https://st.music.163.com/official-terms/privacy',
      },
      {
        title: '儿童隐私政策',
        link: 'https://st.music.163.com/official-terms/children',
      },
      {
        title: '版权投诉指引',
        link: 'https://music.163.com/st/staticdeal/complaints.html',
      },
      {
        title: '联系我们',
        link: 'https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station',
      },
      {
        title: '广告合作',
        link: 'https://music.163.com/ui/resource',
      },
      {
        title: '廉正举报',
        link: 'https://jubao.163.com/',
      },
    ]
    const footerImages = [
      {
        link: 'https://web-amped.music.163.com/'
      },
      {
        link: "https://music.163.com/st/userbasic#/auth",
      },
      {
        link: "https://music.163.com/musician/artist",
      },
      {
        link: "https://music.163.com/web/reward",
      },
      {
        link: "https://music.163.com/st/ncreator/revenue-plan",
      },
    ]
    
    // 底部左侧
    const showCopys = item => {
      return (
        <Fragment key={item.title}>
          <a href={item.link}>{item.title}</a>
          {item.title !== "廉正举报" ? (
            <span className="line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          ) : null}
        </Fragment>
      )
    }
    // 底部右侧
    const showUnits = item => {
      return (
        <li key={item.link} className="item">
          <a href={item.link} rel="noopener noreferrer" target="_blank" className="link"> </a>
          <span className="title"></span>
        </li>
      )
    }

  return (
    <FooterWrapper>
      <div className="footer-content w980">
        <FooterLeft>
          <p className="copy">{footerLinks.map(item => showCopys(item))}</p>
          <p>
            <span className="footer-company">网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：浙网文[2021]1186-054号</span>
          </p>
          <p>
            <a href="https://beian.miit.gov.cn/#/Integrated/index" 
            rel="noopener noreferrer" target="_blank" className="footer-manage-system">
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
            <span>浙公网安备 33010902002564号</span>
          </p>
        </FooterLeft>
        <FooterRight>{footerImages.map(item => showUnits(item))}</FooterRight>
      </div>
    </FooterWrapper>
  )
}
