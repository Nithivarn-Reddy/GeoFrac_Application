import React from 'react';
import { connect } from 'react-redux';
import StagesForm from './stages-form';

function Stages(props) {
    const inputRef = React.useRef(null)
    const [selected, setSelected] = React.useState(0)
    const [defaultVal, setDefault] = React.useState(null)

    React.useEffect(()=>{
        if(!defaultVal&&props.stage.length){
            setDefault(true)
            setTimeout(()=>{
                inputRef.current.click()
            },500)
        }
    },[props.stage.length])
    return (
        <div className="stages-tabs">
            <ul class="nav nav-tabs stages-pills">
                {props.stage.length?props.stage.map((v,i)=>((i==0)?<li className={(selected===i)?"active p-2":"p-2"} style={{cursor:"pointer"}} onClick={e=>setSelected(i)}><a data-toggle="tab" onClick={e=> e.preventDefault()} ref={inputRef} href={"#stage"+i}>Stage {i+1}</a></li>:
                <li className={(selected===i)?"active p-2":"p-2"} style={{cursor:"pointer"}} key={"stage1"+i} onClick={e=>setSelected(i)}><a data-toggle="tab" onClick={e=> e.preventDefault()} href={"#stage"+i}>Stage {i+1}</a></li>
                )):null}
            </ul>
            <div className="stages-form-container">
                <div class="tab-content ">
                    {props.stage.length?props.stage.map((v,i)=>(<div id={"stage"+i}  key={"stage"+i} class={(selected===i)?"tab-pane active":"tab-pane fade"}>
                        <StagesForm data={v} {...props} stageNo={i} selectedStage={selected}/>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Stages)
  