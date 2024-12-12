import Item from './Item'
const List = ({ listData,deleteData }) => {

    return <div className="list">
        {
            listData.map(item => {
                const { note, date, time ,id} = item
                return < Item note={note} date={date} time={time} id={id} deleteData={deleteData} key={id}/>
            })
        }
    </div>
}
export default List