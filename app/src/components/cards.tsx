import "../styles/cityofchoice.css"
interface IProps{
    classname:string
}
export const Cards= (props:IProps)=>{
    const {classname} = props
    return (
        <div className="col-12" style={{padding:'0 30px'}}>
<div className="cards col-12">
    <div className={`${classname} col-12 heading`}>Miracle Resorts</div>
    <div className="cards2 col-12">
        <h4 className="heading1 col-12">$600</h4>
        <span className="span1 col-12">Booking ID:60000</span>
        <span className="span2 col-12">testing</span>
    </div>
</div>
</div>
    )
}