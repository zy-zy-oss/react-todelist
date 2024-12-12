import { useEffect, useState ,useRef} from 'react'
import Edit from './components/Edit'
import List from './components/List'
import './index.css'
import { API_GET_DATA } from '../../global/constants'
//从服务器获取历史数据
// async function fetchData(setData) {
//     const res = await fetch(API_GET_DATA)
//     const {data} = await res.json()
//     setData(data)
// }
//向服务器上传数据
// async function fetchSetData(data) {
//     const res = await fetch(API_GET_DATA,{
// method:"put"
// headers:{ 'Content-type':'application/json'
//  },
// body: JSON.stringify(data)
//})
// }
/**对于存储不需要展示在 UI 上的状态或在多个生命周期阶段中需要使用的信息，
 * useRef 是一个很好的选择，避免了使用 useState 带来的不必要的重新渲染。
 * 用于防止在某些情况下（如连续快速操作）多次向服务器提交数据，
 * 或者在数据正在提交过程中防止用户进行其他操作。 */
const Home = () => {
    const [data,setData] = useState([])
    const submittingStatus = useRef(false) //useRef不会引发组件重新渲染
    //1.从服务器获取历史数据
    useEffect(()=>{
  // fetchData(setData)
    },[])
    //2. 更新服务器数据
    useEffect(()=>{
        if(!submittingStatus) return 
        // fetchSetData(data).then(data => submittingStatus.current = false)
    },[data])
    return <div className='app'> 
        <Edit add={setData} submittingStatus = {submittingStatus}/>
        <List listData={data} deleteData={setData} submittingStatus = {submittingStatus}/>
         </div>
}
export default Home