import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Stages from './StagesTab';

function Wells(props) {
    const inputRef = React.useRef(null)
    const [selected, setselected] = React.useState(0)
    const [selectedStage, setselectedStage] = React.useState(0)
    const [defaultVal, setDefault] = React.useState(null)
    useEffect(()=>{
        if(!defaultVal&&props.wells.length){
            setDefault(true)
            setTimeout(()=>{
                inputRef.current.click()
            },500)
        }
    },[props.wells.length])
    return (
        <div className="wells-n-stages d-flex">
            <div className="wells col-2 d-flex justify-content-center align-items-center">
                <ul class="nav flex-column nav-pills wells-pills">
                    {props.wells.length?props.wells.map((v,i)=>(i==0)?<li class={selected===i?"active":""}  style={{cursor:"pointer"}} onClick={e=>setselected(i)}><a data-toggle="pill" onClick={e=> e.preventDefault()} ref={inputRef} href={"#well"+(i+1)}>Well {i+1}</a></li>:
                    <li class={selected===i?"active":""} key={"well1"+i} style={{cursor:"pointer"}} onClick={e=>setselected(i)}><a data-toggle="pill" onClick={e=> e.preventDefault()} href={"#well"+(i)}>Well {i+1}</a></li>):null}
                </ul>
            </div>
            <div className="stages col-8">
                <div class="tab-content">
                    {props.wells.length?props.wells.map((v,i)=>(<div id={"well"+(i)} key={"well"+i} class={(selected===i)?"tab-pane in active":"tab-pane fade"}>
                        <Stages  stage={v} {...props} wellNo={i} selectedWell={selected}/>
                    </div>)):null}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
      wells: state.wells
    }
  }
  
  function mapDispatchToProps(dispatch){
    return {
      setWells: (userObject) => {
        dispatch({type: "SET_WELLS", payload: userObject})
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Wells)
  
