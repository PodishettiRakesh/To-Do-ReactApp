import './Assets/CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const TodoItems = ({no, display, text}) => {

    const toggle = (no)=>{
        let data= JSON.parse(localStorage.getItem("todos"));
        for(let i=0; i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display===""){
                    data[i].display="line-through";
                }else{
                    data[i].display="";
                }
                break;
            }
        }
    }
  return (
    <div className='todoitems' onClick={()=>{toggle(no)}}>
        <div className="todoitems-container">
            {display===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' src={cross} alt="" />
      
    </div>
  )
}

export default TodoItems
