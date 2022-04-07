import * as React from 'react'
import { useEffect } from 'react'
import RecommendHeader from '../../../../../../components/RecommendHeader'
import TopList from '../../../../../../components/TopList'
import { TopListWrapper_3 } from './style'
import { useSelector, shallowEqual } from 'react-redux'
import { useTopListDetailAction } from '../../store/actionCreator'

export default function TopList_3(){
    const {topList0, topList1, topList2} = useSelector( 
        state => ({
            topList0: state.recommendReducer.topListDetail0,
            topList1: state.recommendReducer.topListDetail1,
            topList2: state.recommendReducer.topListDetail2,

        }), shallowEqual)
        
    const topListDetailAction = useTopListDetailAction()
    useEffect(() => {
        topListDetailAction(19723756, 3779629, 2884035)
    }, [topListDetailAction])
    
    return (
        //eslint-disable-next-line
        <TopListWrapper_3>
          <RecommendHeader title="榜单"/>
          <div className="ranking-info">
            <TopList info={topList0} />
            <TopList info={topList1} />
            <TopList info={topList2} />
          </div>
        </TopListWrapper_3>
      )
}