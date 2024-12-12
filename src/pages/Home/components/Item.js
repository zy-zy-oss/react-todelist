
const Item = ({note,date,time,id,deleteData}) => {
    function deleteItem(){
        deleteData(function(prev){
            return prev.filter(x=>x.id!==id
            )
        })
    }
    return <div className="item ">  
   <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>

   </div>
    <button className="remove" onClick={deleteItem}>🗑️</button>
    </div>
}
export default Item